import slide1 from '../../../../image/slide-1.png'
import slide2 from '../../../../image/slide-2.png'
import slide3 from '../../../../image/slide-3.png'
import slide4 from '../../../../image/slide-4.png'
import slide5 from '../../../../image/slide-5.png'

const Indicators = ({slide, className, ariaCurrent}) => {
    return(
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={slide}
          className={className}
          aria-current={ariaCurrent}
          aria-label={`Slide ${slide}`}
        />
    );
}

const CarouselImage = ({ picture, alt }) => {
  return (
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={picture} className="d-block w-100" alt={alt} />
    </div>
  );
};


const Slider = () => {
    return (
        <div>
           <div id="carouselExampleIndicators" className="carousel slide container my-3" data-bs-ride="carousel">
            
  <div className="carousel-indicators">
    <Indicators  slide={0} className="active" ariaCurrent="true"/>
    <Indicators  slide={1}/>
    <Indicators  slide={2}/>
    <Indicators  slide={3}/>
    <Indicators  slide={4}/>
  </div>

  <div className="carousel-inner">
    <CarouselImage picture={slide1} alt={'Slide 1'}/>
    <CarouselImage picture={slide2} alt={'Slide 2'}/>
    <CarouselImage picture={slide3} alt={'Slide 3'}/>
    <CarouselImage picture={slide4} alt={'Slide 4'}/>
    <CarouselImage picture={slide5} alt={'Slide 5'}/>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Slider