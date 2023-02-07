import React from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
  <div class="poster">
    <Carousel 
    showThumbs={false}
    autoPlay={true}
    transitionTime={3}
    
    >

    </Carousel>
  </div>
  )
}

export default Home