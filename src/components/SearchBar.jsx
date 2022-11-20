import React from "react";


export default function SearchBar() {

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        })
    }

    return (
        <div className="searchBar">
            <div className="searchBar__sort">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="searchBar__fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="searchBar__submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
}