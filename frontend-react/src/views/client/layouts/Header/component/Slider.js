import React from 'react';
import { useState } from 'react';
import slide1 from '../../../../image/slide-1.png';
import slide2 from '../../../../image/slide-2.png';
import slide3 from '../../../../image/slide-3.png';
import slide4 from '../../../../image/slide-4.png';
import slide5 from '../../../../image/slide-5.png';

const Indicators = ({ slide, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={slide}
      className={active ? "active" : ""}
      aria-current={active ? "true" : "false"}
      aria-label={`Slide ${slide}`}
    />
  );
};

const CarouselImage = ({ picture, alt, active }) => {
  return (
    <div className={`carousel-item${active ? ' active' : ''}`} data-bs-interval="3000">
      <img src={picture} className="d-block w-100" alt={alt} />
    </div>
  );
};

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide container my-3" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <Indicators slide={0} active={activeSlide === 0} onClick={() => setActiveSlide(0)} />
          <Indicators slide={1} active={activeSlide === 1} onClick={() => setActiveSlide(1)} />
          <Indicators slide={2} active={activeSlide === 2} onClick={() => setActiveSlide(2)} />
          <Indicators slide={3} active={activeSlide === 3} onClick={() => setActiveSlide(3)} />
          <Indicators slide={4} active={activeSlide === 4} onClick={() => setActiveSlide(4)} />
        </div>

        <div className="carousel-inner rounded">
          <CarouselImage picture={slide1} alt={'Slide 1'} active={activeSlide === 0} />
          <CarouselImage picture={slide2} alt={'Slide 2'} active={activeSlide === 1} />
          <CarouselImage picture={slide3} alt={'Slide 3'} active={activeSlide === 2} />
          <CarouselImage picture={slide4} alt={'Slide 4'} active={activeSlide === 3} />
          <CarouselImage picture={slide5} alt={'Slide 5'} active={activeSlide === 4} />
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => setActiveSlide(activeSlide === 0 ? 4 : activeSlide - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => setActiveSlide(activeSlide === 4 ? 0 : activeSlide + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
