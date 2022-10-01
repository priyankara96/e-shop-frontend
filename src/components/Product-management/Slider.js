import React, { Component } from 'react'
import img1 from '../../images/slide1.png';
import img2 from '../../images/slide2.jpg';

export default class Home1 extends Component {
  render() {
    return (
      <div>


        
      {/* Create home page slide show */}
      <div  style = {{marginTop:"10px", marginRight:"25px", marginLeft:"25px", marginBottom:"10px"}}>
          
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            
            <div className="carousel-inner" >
        
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
            
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              
            </div>
          </div>
        </div>


        





      </div>
    )
  }
}



// import React, { Component } from 'react';
// import slide1 from '../../images/slide1.png'
// import slide3 from '../../images/slide3.png'

// export default class Slider extends Component {
//   render() {
//     return (
//       <div className="container border" style={{ width:"80%", height:"80%"}} >
//       <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img class="d-block w-100" src={slide1}alt="First slide"/>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src={slide3} alt="Second slide"/>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src={slide3} alt="Third slide"/>
//       </div>
//     </div>
//     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div>
// </div>  
//     )
//   }
// }

