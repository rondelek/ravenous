import '../css/styles';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90  
}

const businesses = [
  business, business, business, business, business, business
]

export default function App() {

  function searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term},${location}, ${sortBy}`)
  }


  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

