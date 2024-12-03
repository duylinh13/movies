import React, { Component } from "react";
import Slider from "react-slick";
import Slider1 from "../../images/slider1.jpg";
import Slider2 from "../../images/slider2.jpg";
import Slider4 from "../../images/slider4.jpg";
import Slider8 from"../../images/slider8.jpg";
import Slider9 from"../../images/slider9.jpg";
import { FaSearch } from "react-icons/fa";
import "./SectionHero.css";

export default class SectionHero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <div>
     
      <div className="row">
      <h2 className="text">H & L</h2>
        <div className="box">
          <input type="text" placeholder="Search here" />
          <a><FaSearch /></a>
        </div>
       
      </div>
    </div>
        <div className="SectionHero-taskbar"></div>
        <Slider {...settings}>
          <div>
            <img className="img" src={Slider1} />
          </div>
          <div>
            <img className="img" src={Slider2} />
          </div>
          <div>
            <img className="img" src={Slider4} />
          </div>
          <div>
            <img className="img" src={Slider8} />
          </div>
          <div>
            <img className="img" src={Slider9} />
          </div>
        </Slider>
      </div>
    );
  }
}
