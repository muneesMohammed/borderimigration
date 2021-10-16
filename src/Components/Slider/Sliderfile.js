
import "./Slider.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Assets/Group (1).svg';
import img2 from '../../Assets/Group (2).svg';
import img3 from '../../Assets/Group (3).svg';
class Sliderfile extends Component {

    render() {
        const settings = {
    
    
            
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2400,
            variableWidth: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        };
        return (
            <div>
                <div className="main">
                    <h2 className="Producthead">Our Products</h2>
                    <div className="slider">
                        <Slider {...settings}>
                            <div className="oneslider">
                                <h3>Poultry</h3>
                                <p className="p1">Naturally Bred
                                    Antibiotic Free
                                    Halal Certified
                                </p>
                                <img src={img1} alt="" />
                            </div>
                            <div className="twoslider">
                                <h3>Fish & Seafood</h3>
                                <p className="p1">100% Fresh
                                    Preservative Free
                                    Direct from shore
                                </p>
                                <img src={img2} alt="" />
                            </div>
                            <div className="threeslider">
                                <h3>Eggs</h3>
                                <p className="p1">Free Range Eggs
                                    Direct from Farm
                                    Safely Packed
                                </p>
                                <img src={img3} alt="" />
                            </div>
                            <div className="fourslider">
                                <h3>Mutton & Beef</h3>
                                <p className="p1">Fresh & Tender
                                    Steaks & Fillets
                                    Halal Certified
                                </p>
                                <img src={img2} alt="" />
                            </div>
                            <div className="threeslider">
                                <h3>Eggs</h3>
                                <p className="p1">Free Range Eggs
                                    Direct from Farm
                                    Safely Packed
                                </p>
                                <img src={img3} alt="" />
                            </div>
                            <div className="fourslider">
                                <h3>Mutton & Beef</h3>
                                <p className="p1">Fresh & Tender
                                    Steaks & Fillets
                                    Halal Certified
                                </p>
                                <img src={img2} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sliderfile




// import React, {Component} from 'react'
// import "./Slider.css";
// import Slider from "react-slick";
// import img1 from '../../Assets/Group (1).svg';
// import img2 from '../../Assets/Group (2).svg';
// import img3 from '../../Assets/Group (3).svg';
// import "slick-carousel/slick/slick.css"; 
//  import "slick-carousel/slick/slick-theme.css";


// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <div className="main">
//           <h2 className="Producthead">Our Products</h2>
//           <div className="slider">
//             <Slider {...settings}>
//               <div className="oneslider">
//                 <h3>Poultry</h3>
//                 <p className="p1">Naturally Bred
//                   Antibiotic Free
//                   Halal Certified
//                 </p>
//                 <img src={img1} alt="" />
//               </div>
//               <div className="twoslider">
//                 <h3>Fish & Seafood</h3>
//                 <p className="p1">100% Fresh
//                   Preservative Free
//                   Direct from shore

//                 </p>
//                 <img src={img2} alt="" />
//               </div>
//               <div className="threeslider">
//                 <h3>Eggs</h3>
//                 <p className="p1">Free Range Eggs
//                   Direct from Farm
//                   Safely Packed
//                 </p>
//                 <img src={img3} alt="" />
//               </div>
//               <div className="fourslider">
//                 <h3>Mutton & Beef</h3>
//                 <p className="p1">Fresh & Tender
//                   Steaks & Fillets
//                   Halal Certified
//                 </p>
//                 <img src={img2} alt="" />
//               </div>
//             </Slider>
//           </div>
//         </div >
//       </div >
//     );
//   }
// }


{/* <div className="main">
<h2 className="Producthead">Our Products</h2>
<div className="slider">
    <div className="oneslider">
        <h3>Poultry</h3>
        <p className="p1">Naturally Bred
            Antibiotic Free
            Halal Certified
        </p>
        <img src={img1} alt="" />
    </div>
    <div className="twoslider">
        <h3>Fish & Seafood</h3>
        <p className="p1">100% Fresh
            Preservative Free
            Direct from shore

        </p>
        <img src={img2} alt="" />
    </div>
    <div className="threeslider">
        <h3>Eggs</h3>
        <p className="p1">Free Range Eggs
            Direct from Farm
            Safely Packed


        </p>
        <img src={img3} alt="" />
    </div>
    <div className="fourslider">
        <h3>Mutton & Beef</h3>
        <p className="p1">Fresh & Tender
            Steaks & Fillets
            Halal Certified



        </p>
        <img src={img2} alt="" />
    </div>
</div>
</div> */}
