import { useState } from 'react';
import '../css/styles';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

const apiKey = 'Dy02ENHOoYAOxd-jlOWAPj8R2Wne5EQBZOeo3EjPv0kcWdvZ_3UKttRqMHvB32Kwlf9TjfeZ9pacPAdCDUV0Q40C3IGkkWwrlkvC0wuZUk7dJPFgtz9OGcMwliN-Y3Yx';


export default function App() {

  const [businesses, setBusinesses] = useState([]);


  function searchYelp(term, location, sortBy) {
    return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers: {Authorization: `Bearer ${apiKey}`}
    }).then(setBusinesses([])) 
        .then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business)
                    return setBusinesses(el => [...el, {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }])
                })
            }
        })
    } 


  return (
    <div className="App">
      <h1 className='title'>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

