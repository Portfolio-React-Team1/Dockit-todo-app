import React from 'react';
import './ChooseTime.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

  const hours = () => {
    var times = [];
    for (var i = 1; i < 13; i++) {
      times.push(("0" + i).slice(-2));
    }
    return times;
  };

  const minutes = () => {
  var times = [];
  for (var i = 0; i < 60; i++) {
    times.push(("0" + i).slice(-2));
  }
  return times;
};

class ChooseTime extends React.Component {
  constructor(props) {
    super(props);
    this.slide1 = this.slide1.bind(this);
    this.slide2 = this.slide2.bind(this);
    this.slide3 = this.slide3.bind(this);
    this.silder1 = null;
    this.slider2 = null;
    this.slider3 = null;
    this.hours = hours();
    this.minutes = minutes();
  }

  slide1(y) {
    if (y.target.closest(".slider1")) {
      console.log(y.wheelDelta);
      y.wheelDelta > 0 ? this.slider1.slickNext() : this.slider1.slickPrev();
    }
  }

  slide2(y) {
    if (y.target.closest(".slider2")) {
      y.wheelDelta > 0 ? this.slider2.slickNext() : this.slider2.slickPrev();
    }
  }

  slide3(y) {
    if (y.target.closest(".slider3")) {
      y.wheelDelta > 0 ? this.slider3.slickNext() : this.slider3.slickPrev();
    }
  }

  componentWillMount() {
    window.addEventListener("wheel", (e) => {
      if (this.slider1) {
        this.slide1(e);
      }
      if (this.slider2) {
        this.slide2(e);
      }
      if (this.slider3) {
        this.slide3(e);
      }
    });
  }
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 200,
      slidesToScroll: 3,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows: false,
      adaptiveHeight: false,
      afterChange: (e) => {}
    };
    return (
      <div className='main'>
        <div className='container'>
          <div className='title'>
            <h2>Choose Time</h2>
          </div>
          <div className="boxes">
            <Slider
            {...settings}
            className="slider-entity hours  slider1 box"
            ref={(slider) => (this.slider1 = slider)}>
              {this.hours.map((hour) => (
                <div key={hour}>{hour}</div>
              ))}
            </Slider>
            
            <div className='col'>
              <h1 className='colon'>:</h1>
            </div>

            <Slider
            {...settings}
            className="slider-entity minutes slider2 box"
            ref={(slider) => (this.slider2 = slider)}>
              {this.minutes.map((minutes) => (
                <div key={minutes}>{minutes}</div>
              ))}
            </Slider>
            
            <Slider
            {...settings}
            infinite={false}
            className="slider-entity ampm slider3 box"
            ref={(slider) => (this.slider3 = slider)}>
              <div>AM</div>
              <div>PM</div>
            </Slider>
            
          </div>
          <div className='btns'>
            <button className='btn'>Cancel</button>
            <button className='btn'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}


export default ChooseTime