import React from 'react';
import TourCard from './TourCard';
import {Tour} from "../../model/Tour";

const TourList = ({onAddToCart, isInCard}: { onAddToCart?: any, isInCard?: boolean }) => {
    const tours: Tour[] = [
        {
            id: 1,
            image: 'https://astravel.com.ua/sites/default/files/images/tours/Jambo-Beach-Bungalows1.jpg',
            title: 'Tour 1',
            type: 'відпочинок',
            company: 'Company 1',
            discount: 10,
            isHot: true,
        },
        {
            id: 2,
            image: 'https://yeremenko.ua/images/banners/8285dd91-a859-482f-acd0-5f84ec7a0d95-1-201-a.jpg',
            title: 'Tour 2',
            type: 'екскурсія',
            company: 'Company 2',
            isHot: false,
        },
        {
            id: 3,
            image: 'https://sitistravel.com/upload/images/NguyenBinhVTV-154723024718-shopping-1-800x500.jpg',
            title: 'Tour 3',
            type: 'шопінг',
            company: 'Company 3',
            discount: 5,
            isHot: true,
        },
          ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto'
        }}>
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} onAddToCart={onAddToCart} isInCard={isInCard}/>
            ))}
        </div>
    );
};

export default TourList;
