import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa/index.esm'

function Main({ imageUrl, location, title, startDate, endDate, description }) { // here we are just destructuring the props to make the return of our component a bit cleaner.
    return (
        // again this should be a dumb component (like you had made it), we don't need to do any calculations or formatting of data in here.
        <div>
            <main>
                <img src={imageUrl} alt='Mount Fuji'/>
                <div className='main--div'>
                    <div className='main--div2'>
                        <FaMapMarkerAlt className="main--icon"/>
                        <span className='span--text'>{location}</span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                    </div>
                    <h1 className='main--h1'>{title}</h1>
                    <h5 className='main--h5'>{startDate} - {endDate}</h5>
                    <p className='main--p'>{description}</p>
                </div>
            </main>
            <hr className='main--hr'/>
        </div>
    )
}

export default Main
