import React, { Component } from 'react';
import slide1 from '../../images/slide1.png'
import slide3 from '../../images/slide3.png'

export default class Slider extends Component {
  render() {
    return (
      <div class = 'container' style={{width:'90%', height:'5%'}}>
  
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={slide1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slide3} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>
      </div>
    )
  }
}
