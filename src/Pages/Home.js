import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/NavBar/Navbar'
import { AnimeList } from '../Components/AnimeList'
import Loader from '../Components/Loader/Loader'
import { Search } from '../Components/Search'

export const Home = () => {
    const [animeList, setAnimeList] = useState([])
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(true)
    const [initialData, setInitialData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [last_visiblePage, setLast_VisiblePage] = useState(null)
    const [has_nextPage, sethasNextPage] = useState(null)

    const clearSearch = () => {
        setAnimeList(initialData)
    }
    const searchHandler = (searchText) => {
            
        if (searchText !== "") {
            setloading(true)
            axios.get(`https://api.jikan.moe/v4/anime?search=${searchText}`)
            .then((res => {
                setAnimeList(res.data?.data)
                setLast_VisiblePage(res.data?.pagination?.last_visiblePage)
                sethasNextPage(res.data?.pagination?.has_next_page)
                setloading(false)}))

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

       if(loading){
        return <Loader />
       }

    return (
        <>
            <div>
                <Navbar title='Anime List' />
                <Search searchHandler={searchHandler} />
                <div style={{ backgroundColor: '#f4efef' }}>
                    <AnimeList animeList={animeList} />
                </div>
                {loading && <Loader />}
                <button onClick={() => setCurrentPage(currentPage - 1)} 
                disabled = {currentPage === 1}
                >-</button>
                <button onClick={() => setCurrentPage(currentPage + 1)}
                disabled ={!has_nextPage}
                >+</button>

            </div>
        </>
    )
}
