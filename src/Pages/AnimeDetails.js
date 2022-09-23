import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/NavBar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader/Loader'
export const AnimeDetails = () => {

  const [animeDetail, setAnimeDetail] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => {
        setAnimeDetail(res.data?.data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div style={{ backgroundColor: 'rgb(239, 236, 236)' }}>
      <Navbar title='Anime' />
      <div className='imagesynopis'>
        <div className='detailpageimage'>
          <img src={animeDetail.images?.jpg?.image_url} alt='image' width='auto' height='100%' />
        </div>

        <div className='detailsynopsis'>
          <p>{animeDetail.synopsis}</p>
          <div className='episodes'>
            <p>{animeDetail.aired.from}</p>
            <p> episodes : {animeDetail.episodes}</p>
          </div>
        </div>

      </div>
      <div >
        <iframe height="400" src="https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1"
          style={{ width: '80%', marginBottom: '25px' }}
        >
        </iframe>
      </div>

    </div>
  )
}
