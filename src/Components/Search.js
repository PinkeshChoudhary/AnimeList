import React, { useState } from 'react'
import { SearchClass } from '../Styled'

export const Search = ({ searchHandler, clearSearchResult}) => {
    const [text, setText] = useState("")

    const handleSearch = () => {
        if(text!== ""){
        searchHandler(text)
        } else alert("Enter something to search") 
    }
        
        const onChangeHandler = (e) => {
            if(e.target.value === ""){
             clearSearchResult()

            }
            setText(e.target.value)
            }

       const clear = () => { 
          clearSearchResult();
            setText("")
            }

    return (
        <SearchClass>
            <div className='search'>
                <input type='text' value={text} className='searchvalue'
                    onChange={onChangeHandler} />
                { text && <button className='clearbtn' onClick={clear} >X</button>}

            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button className='searchbtn' onClick={handleSearch} >Search</button>
            </div>
        </SearchClass>
    )
}
