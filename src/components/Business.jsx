import React from 'react';

export default function Business(props) {

    return (
        <div className="business">
            <div className="business__img">
                <img src={props.business.imageSrc} alt=''/>
            </div>
            <h2 className='business__name'>{props.business.name}</h2>
            <div className="business__info">
                <div className="business__info__address">
                    <p>{props.business.name}</p>
                    <p>{props.business.address}</p>
                    <p>{props.business.state} {props.business.zipCode}</p>
                </div>
                <div className="business__info__reviews">
                    <h3>{props.business.category}</h3>
                    <h3 className='business__info__reviews__rating'>{props.business.rating}</h3>
                    <p>{props.business.reviewCount}</p>
                </div>
            </div>
        </div>
    )
}

