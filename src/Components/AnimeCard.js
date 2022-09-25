import React from 'react'
import { AnimeCard } from '../Styled'
import { useNavigate } from 'react-router-dom'

export const AnimeItem = (props) => {
    const navigate = useNavigate();

    const detailsPageHandler = (e) => {
        navigate(`/anime/${props.mal_id}`)
        e.stopPropagation()
    }

    const dragStart = (e) => {
        e.dataTransfer.setData('item_id', props.mal_id)
    }
    const getFontSize = () =>{
        const title_len = props.title.length
        if(title_len>35 && title_len< 45){
            return "14px"
        } else if(title_len >44){
          return '12px'
        } else return "16px"
    }

    return (
        <AnimeCard onClick={detailsPageHandler}
            draggable={true}
            onDragStart={(e) => dragStart(e)}
            onDragOver={(e) => e.preventDefault()}>
        
            <div className='image' >
                <img src={props.images.jpg.image_url} height='100%' width='245px' />
            </div>
            <div className='animedetails'>

                <p className='title' style={{fontSize: getFontSize()}}> {props.title}</p>
                <div className='rank'>
                    Rank-  <span className= "spanrank" >{props.rank}</span>
                </div>
            </div>
        </AnimeCard>
    )
}
