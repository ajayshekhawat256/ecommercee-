import React from 'react'
import { homeCarouselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {
    const items = homeCarouselData.map((item) => <img className='cursor-pointer'
        role='presentation' src={item.image} alt='' />)
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite />
    )
}

export default MainCarosel