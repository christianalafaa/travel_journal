import Nav from './Components/Nav';
import MainList from './Components/MainList';
import Data from './Data/Data';

function App() {
  const travelData = Data // here we are reassigning the data. This isn't necessary but if you're passing data to other components you can atleast differentiate between the two sets of data.
  // If your Data wasn't in the correct format for MainList, I personally would create a container that wraps MainList eg. <MainListContainer /> you can then do all your logic here and you don't
  // need to make any changes in MainList or Main
  return (
    <div className="App">
        <Nav />
        <MainList travelData={travelData} />
    </div>
  );
}

export default App;
