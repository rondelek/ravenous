import React from 'react';

export default function Business() {

    const business = [{
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90  
    }]

    return (
        <div className="business">
            <div className="business__img">
                <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
            </div>
            <h2 className='business__name'>MarginOtto Pizzeria</h2>
            <div className="business__info">
                <div className="business__info__address">
                    <p>1010 Paddington Way</p>
                    <p>Bordertown</p>
                    <p>NY 10101"</p>
                </div>
                <div className="business__info__reviews">
                    <h3>ITALIAN</h3>
                    <h3 className='business__info__reviews__rating'>4.5 stars</h3>
                    <p>90 reviews</p>
                </div>
            </div>
        </div>
    )
}

