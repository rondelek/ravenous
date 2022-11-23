import React, { useState } from "react";


export default function SearchBar({searchYelp}) {

    const [search, setSearch] = useState({
        'term': '',
        'location': '',
        'sortBy': 'best_match'
    })

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li 
                    onClick={() => handleSortByChange(sortByOptionValue)}
                    className={getSortByClass(sortByOptionValue)} 
                    key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    function getSortByClass(sortByOption) {
        return search.sortBy === sortByOption ? 'active' : '';
    }

    function handleSortByChange(sortByOption) {
        return setSearch((prev)=>{
            prev['sortBy']= sortByOption
            return prev
        });
        };

    function handleTermChange(event) {
        console.log('handled term change')
        return setSearch((prev)=>{
            prev['term']=event.target.value
            return prev
        });
    }

    function handleLocationChange(event) {
        console.log('handled location change')
        return setSearch((prev)=>{
            prev.location=event.target.value
            return prev
        });
    }

    function handleSearch(event) {
        searchYelp(search.term, search.location, search.sortBy) 
        event.preventDefault();
    }


    return (
        <div className="searchBar">
            <div className="searchBar__sort">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="searchBar__fields">
                <input 
                    onChange={handleTermChange}
                    placeholder="Search Businesses" />
                <input 
                    onChange={handleLocationChange}
                    placeholder="Where?" />
            </div>
            <div className="searchBar__submit">
                <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>
    )
}