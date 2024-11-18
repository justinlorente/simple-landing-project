import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg from "../../../assets/images/testimonials-1.png";

const Testimonials = () => {
  const settings = {
    accessibility: false,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <span>{i + 1}</span>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          centerPadding: '90px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="Testimonials-wrapper">
      <div className="Testimonials-container">
        <h3 className="Testimonials-title">Testimonials</h3>
        <p className="Testimonials-description">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="Testimonials-carousel">
          <Slider {...settings}>
            <div>
              <div className="Testimonials-testimonial-wrapper">
                <div className="Testimonials-image">
                  <Image src={testimonialImg} alt="" />
                </div>
                <div className="Testimonials-information-wrapper">
                  <blockquote className="Testimonials-person-testimonial">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                    </p>
                  </blockquote>
                  <p className="Testimonials-person-name">Name</p>
                  <p className="Testimonials-person-position">Ceo</p>
                </div>
              </div>
            </div>
            <div>
              <div className="Testimonials-testimonial-wrapper">
                <div className="Testimonials-image">
                  <Image src={testimonialImg} alt="" />
                </div>
                <div className="Testimonials-information-wrapper">
                  <blockquote className="Testimonials-person-testimonial">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                    </p>
                  </blockquote>
                  <p className="Testimonials-person-name">Name</p>
                  <p className="Testimonials-person-position">Ceo</p>
                </div>
              </div>
            </div>
            <div>
              <div className="Testimonials-testimonial-wrapper">
                <div className="Testimonials-image">
                  <Image src={testimonialImg} alt="" />
                </div>
                <div className="Testimonials-information-wrapper">
                  <blockquote className="Testimonials-person-testimonial">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                    </p>
                  </blockquote>
                  <p className="Testimonials-person-name">Name</p>
                  <p className="Testimonials-person-position">Ceo</p>
                </div>
              </div>
            </div>
            <div>
              <div className="Testimonials-testimonial-wrapper">
                <div className="Testimonials-image">
                  <Image src={testimonialImg} alt="" />
                </div>
                <div className="Testimonials-information-wrapper">
                  <blockquote className="Testimonials-person-testimonial">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                    </p>
                  </blockquote>
                  <p className="Testimonials-person-name">Name</p>
                  <p className="Testimonials-person-position">Ceo</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
