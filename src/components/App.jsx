import '../css/styles';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';


function App() {
  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
