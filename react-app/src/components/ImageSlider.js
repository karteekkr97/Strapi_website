import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <div className="slide-text">
        <h3 className="display-3 text-white fw-bold mb-3">Secure Your Dream Home with Our Loans</h3>
<p className="text-white d-none d-xl-block d-lg-block d-sm-block">
  Find the perfect home loan with competitive rates and flexible terms. Call us at <strong>(555) 123-4567</strong> to learn more.
</p>
<p><a href="http://localhost:3000/homeloan" className="btn btn-primary">Discover Home Loan Options</a></p>
        </div>
        <img src={slider1} alt="Slide 1" />
      </div>
      <div className="slide">
        <div className="slide-text">
        <h3 className="display-3 text-white fw-bold mb-3">Drive Your Dream Car with Our Loan Options</h3>
<p className="text-white d-none d-xl-block d-lg-block d-sm-block">
  Unlock the best rates on car loans to get you on the road faster.
</p>
<p><a href="http://localhost:3000/" className="btn btn-primary">Explore Car Loans</a></p>
        </div>
        <img src={slider2} alt="Slide 2" />
      </div>
      <div className="slide">
        <div className="slide-text">
        <h3 className="display-3 text-white fw-bold mb-3">Find the Right Personal Loan for You</h3>
<p className="text-white d-none d-xl-block d-lg-block d-sm-block">
  Get the funds you need with our flexible personal loans.
</p>
<p><a href="http://localhost:3000/personalloan" className="btn btn-primary">View Loan Options</a></p>
        </div>
        <img src={slider3} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
