import React from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
import data from "../data/data";

const HomeSlider = () => {
    let slider =[...data.slider];
    // console.log(slider);
    return (
        <Carousel className="carousel-homeslider">
            {
                slider.map((item, index)=>(
                    <CarouselItem key={index}>
                        <img className="img-responsive" src={item.image} alt={item.title} />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button className="read-more slider-read">Read More</button>
                        </Carousel.Caption>
                </CarouselItem>
                ))
            }
        </Carousel>
    )
}

export default HomeSlider
