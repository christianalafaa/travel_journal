import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa/index.esm'

function Main(props) {
    return (
        <div>
            <main>
                <img src={ props.imageUrl } alt='Mount Fuji'/>
                <div className='main--div'>
                    <div className='main--div2'>
                        <FaMapMarkerAlt className="main--icon"/>
                        <span className='span--text'>{props.location}</span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                    </div>
                    <h1 className='main--h1'>{props.title}</h1>
                    <h5 className='main--h5'>{props.startDate} - {props.endDate}</h5>
                    <p className='main--p'>{props.description}</p>
                </div>
            </main>
            <hr className='main--hr'/>
        </div>
    )
}

export default Main
