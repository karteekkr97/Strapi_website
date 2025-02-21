import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import loan1 from '../assets/images/loan1.svg';
import mortgage from '../assets/images/mortgage.svg';
import piggybank from '../assets/images/piggybank.svg';
import car from '../assets/images/car.svg';

const ContentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slidesData = [
    {
      img: loan1,
      title: 'Personal Loan',
      description: 'A personal loan offers financial support for various needs, from emergencies to personal projects, with flexible repayment terms.',
      link: 'http://localhost:3000/personalloan',
    },
    {
      img: mortgage,
      title: 'Home Loan',
      description: 'A home loan helps you finance the purchase or construction of your dream home with manageable installments',
      link: 'http://localhost:3000/homeloan',
    },
    {
      img: piggybank,
      title: 'Education Loan',
      description: 'Education loan helps facilitate young minds to pursue their academic dreams. Get a good loan amount and flexible tenure period with tax benefits.',
      link: 'http://localhost:3000/educationloan',
    },
    {
      img: car,
      title: 'Car Loan',
      description: 'A car loan provides the funds needed to purchase or lease your ideal vehicle, with easy and flexible repayment options.',
      link: '#',
    },
  ];

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className="card smooth-shadow-sm border-0 m-2">
          <div className="card-body p-5">
            <div className="categories">
              <img src={slide.img} alt={slide.title} className="icon-xxl" />
            </div>
            <h3>
                {slide.title}
            </h3>
            <p>{slide.description}</p>
            <a href={slide.link} className="btn-link border-bottom border-primary border-2 fw-bold fs-5">
              Read More
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ContentSlider;
