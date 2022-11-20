import React from "react";
import Business from "./Business";


export default function BusinessList(props) {
    return (
        <div className="businessList">
            {props.businesses.map(business => {
                return <Business business={business} />
            })}
        </div>

    )
} 