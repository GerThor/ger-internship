import React, { useState, useEffect }from 'react'
import Slider from "react-slick";

const ReactSlickSlider = ({ children }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
  };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  function NextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}



export default ReactSlickSlider;