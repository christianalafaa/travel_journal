import Nav from './Components/Nav';
import Main from './Components/Main';
import Data from './Components/Data';


function App() {
  const travelData = Data.map( places => {
    return (
      <Main 
              title = {places.title}
              location = {places.location}
              googleMapsUrl = {places.googleMapsUrl}
              startDate = {places.startDate}
              endDate = {places.endDate}
              description = {places.description}
              imageUrl = {places.imageUrl}
      />
  
    )
  })
  
  return (
    <div className="App">
        <Nav />
        {travelData}

    </div>
  );
}

export default App;
