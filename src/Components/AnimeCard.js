import React from 'react'
import { AnimeList } from '../Styled'
import { useNavigate } from 'react-router-dom'
export const AnimeCard = (props) => {

    const navigate = useNavigate();

    const detailsPageHandler = (e) => {
        navigate(`/anime/${props.mal_id}`)
        console.log('pinkesh')
        e.stopPropagation()
    }

    return (
        <AnimeList onClick={() => {
            detailsPageHandler()
        }}>

            <div className='image' >
                <img src={props.images.jpg.image_url} height='100%' width='245px' />
            </div>
            <div className='animedetails'>

                <p className='title'> {props.title}</p>


                <div className='rank'>
                    {props.rank}
                </div>
            </div>
        </AnimeList>
    )
}
