import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AnimeCarousel = ({ title, animes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div style={{ marginBottom: 40 }}>
      <h2>{title}</h2>
      <Slider {...settings}>
        {animes.map((anime) => (
          <div key={anime.id} style={{ padding: '10px' }}>
            <img
              src={anime.attributes.posterImage?.small}
              alt={anime.attributes.canonicalTitle}
              style={{ width: '100%', borderRadius: 8 }}
            />
            <p style={{ marginTop: 8 }}>{anime.attributes.canonicalTitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnimeCarousel;
