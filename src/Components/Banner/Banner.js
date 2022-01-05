import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>This is the new movie description for just testing....</h1>
                <div className="fade-bottom"></div>
            </div>
        </div>
    )
}

export default Banner
