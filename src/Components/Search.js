import React, { useState } from 'react'
import { SearchClass } from '../Styled'

export const Search = ({ searchHandler }) => {
    const [text, setText] = useState("")

     const handleSearch =() =>{
      searchHandler(text)
     }

    return (
        <SearchClass>
            <div className='search'>
                <input type='text' value={text} className ='searchvalue'
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button className='searchbtn' onClick={handleSearch} >Search</button>
            </div>
        </SearchClass>
    )
}
