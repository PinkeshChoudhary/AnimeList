import React from 'react'
import { AnimeList } from '../Styled'
import { useNavigate } from 'react-router-dom'

export const AnimeCard = (props) => {
    const navigate = useNavigate();

    const detailsPageHandler = (e) => {
        navigate(`/anime/${props.mal_id}`)
        e.stopPropagation()
    }

    const dragStart = (e) => {
        e.dataTransfer.setData('item_id', props.mal_id)
    }

    return (
        <AnimeList onClick={detailsPageHandler}
            draggable={true}
            onDragStart={(e) => dragStart(e)}
            onDragOver={(e) => e.preventDefault()}>
        
            <div className='image' >
                <img src={props.images.jpg.image_url} height='100%' width='245px' />
            </div>
            <div className='animedetails'>

                <p className='title'> {props.title}</p>
                <div className='rank'>
                    Rank-  <span style={{
                        lineHeight: 'normal',
                        display: 'inline-block',
                        color: '#fff',
                        padding: '2px 4px 2px 6px',
                        borderRadius: '3px',
                        fontWeight: '500',
                        fontSize: '12px',
                        backgroundColor: '#388e3c'
                    }}>{props.rank}</span>
                </div>
            </div>
        </AnimeList>
    )
}
