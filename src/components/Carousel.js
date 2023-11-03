import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css"
function CarouselMarriott() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
      <Carousel.Item>
        <div className="panC d-flex justify-content-center" >
            <img className='' style={{width: "1000px"}}  src={require("../imgs/car_1.png")} alt="carousel_1" />
        </div>
        <Carousel.Caption>
          <h3>Vistas Panorámicas</h3>
          <p>Despiértese con impresionantes vistas de la ciudad/paisaje/montañas desde nuestras habitaciones y suites premium.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="panC d-flex justify-content-center" >
            <img className='' style={{width: "1000px"}} src={require("../imgs/car_2.png")} alt="carousel_2" />
        </div>
        <Carousel.Caption>
          <h3>Actividades y Excursiones</h3>
          <p>Explore la región con nuestras excursiones personalizadas y actividades exclusivas para huéspedes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="panC d-flex justify-content-center" >
            <img className='' style={{width: "1000px"}} src={require("../imgs/car_3.png")} alt="carousel_3" />
        </div>
        <Carousel.Caption>
          <h3>Paraíso Costero</h3>
          <p>
          Sumérjase en la belleza prístina de nuestras playas de arena blanca y aguas cristalinas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselMarriott;