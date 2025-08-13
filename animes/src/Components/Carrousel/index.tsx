import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCarousel = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Um banner por vez
    slidesToScroll: 1,
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Intervalo entre os slides
  };

  return (
    <div style={{ marginBottom: 40 }}>
      <Slider {...settings}>
        {/* Renderizando os banners */}
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              style={{
                width: '100%',
                borderRadius: '8px',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
