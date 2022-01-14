import React from 'react'
import Main from './Main'

function MainList({ travelData }) {
    // The important thing here is that this component's job is to map another component. It's job isn't to format the data. That should be handled above.
    if (!travelData) return // We should account for this possibly not existing so our app doesn't crash. You could return a fallback component here. Eg 'Oops something went wrong' etc.
    return (
        <>
        {travelData.map(places => (
            <Main
                title={places.title}
                location={places.location}
                googleMapsUrl={places.googleMapsUrl}
                startDate={places.startDate}
                endDate={places.endDate}
                description={places.description}
                imageUrl={places.imageUrl}
            />
        ))}
        </>
    )
}

export default MainList
