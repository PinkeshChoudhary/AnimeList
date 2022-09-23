import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/NavBar/Navbar'
import { AnimeList } from '../Components/AnimeList'
import Loader from '../Components/Loader/Loader'
import { Search } from '../Components/Search'
import { Watchlist } from '../Components/WatchList/Watchlist'

export const Home = () => {
    const [animeList, setAnimeList] = useState([])
    const [watchList, setWatchList] = useState([])
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(true)
    const [initialData, setInitialData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [last_visiblePage, setLast_VisiblePage] = useState(null)
    const [has_nextPage, sethasNextPage] = useState(null)
    const [genresList, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('')

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('items'))
        setWatchList(localData)
    }, [])

    useEffect(() => {
        if (watchList.length !== 0) {
            localStorage.setItem('items', JSON.stringify(watchList))
        }
    }, [watchList])

    const clearSearch = () => {
        setAnimeList(initialData)
    }

    const updateWatchList = (mal_id) => {
        const droppedArr = animeList.filter((el) => el.mal_id === mal_id)
        setWatchList(watchList.concat(droppedArr))
    }

    const deleteAnimeCard = (removeid) => {
        const restArr = watchList.filter((el) => el.mal_id !== removeid)
        setWatchList(restArr)
        if(restArr.length==0){
            localStorage.setItem('items', JSON.stringify([]))
        }
    }

    const searchHandler = (searchText) => {
        if (searchText !== "") {
            let searchData = animeList.filter((el) => el.title.indexOf(searchText) !== -1)
            setAnimeList(searchData)
        } else if (animeList.length !== initialData.length) {
            clearSearch()
        } else {
            alert("enter text")
        }
    }

    useEffect(() => {
        setloading(true)
    }, [currentPage])

    useEffect(() => {
        try {
            axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
                .then((res => {
                    let arr = []
                    res.data.data.forEach(({ genres }) => {
                        genres.forEach(({ name }) => {
                            if (!arr.includes(name)) {
                                arr.push(name)
                            }
                        })
                    })
                    setGenres(arr)
                    setInitialData(res.data?.data)
                    setAnimeList(res.data?.data)
                    setLast_VisiblePage(res.data?.pagination?.last_visiblePage)
                    sethasNextPage(res.data?.pagination?.has_next_page)

                    setloading(false)
                }))

        } catch (err) {
            setError(err)
        }
    }, [currentPage])

    if (loading) {
        return <Loader />
    }

    const filterGenres = (genre) => {
        if (genre === "") {
            setAnimeList(initialData)
        } else {
            let array = animeList.filter(({ genres }) => {
                let check = false
                if (!check) {
                    genres.forEach(({ name }) => {
                        if (name === genre) {
                            check = true
                        }
                    })
                }
                return check
            })
            setAnimeList(array)
        }
    }
    return (
        <>
            <Navbar title='Anime List' />
            <div className='flex'>
                <div className='select'>
                    <select onChange={(e) => filterGenres(e.target.value)} >
                        <option value="" selected disabled hidden>Select genre</option>
                        <option value="" >None</option>

                        {
                            genresList.map((g) => <option value={g}> {g} </option>)
                        }
                    </select>
                </div>
                <Search searchHandler={searchHandler} />
            </div>
            <div style={{
                backgroundColor: '#FBFBFB', display: 'flex', flexDirection: 'row',
                flexBasis: '3fr 2fr'
            }}>
                <AnimeList animeList={animeList} />
                <Watchlist watchList={watchList} updateWatchList={updateWatchList}
                    deleteAnimeCard={deleteAnimeCard} />
            </div>

            {loading && <Loader />}

            <div className='prevnextbtn'>
                <button onClick={() => setCurrentPage(currentPage - 1)}
                    className='previousbtn'
                    disabled={currentPage === 1}
                > &laquo; Previous</button>

                <button onClick={() => setCurrentPage(currentPage + 1)}
                    className='nextbtn'
                    disabled={!has_nextPage}
                >Next &raquo;</button>

            </div>
        </>
    )
}
