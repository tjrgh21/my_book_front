import React from "react";
import './SearchBox.css'

export const SearchBox = (props) => {
    const {type, placeholder, value, onChange} = props

    return(
        <div className='search-box'>
            <label>
                <i>
                    <img src="icon-searchbox.png" alt="Search Icon"/>
                </i>
                <input 
                    className='search-input' 
                    type={type}
                    placeholder={placeholder}
                    value={value} 
                    onChange={onChange}
                />
            </label>
        </div>
    )
}