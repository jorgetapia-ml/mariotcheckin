import '../App.css';
import NavBarTest from './NavBarTest';
import "bootstrap/dist/css/bootstrap.min.css"
import VideoContainer from './VideoContainer';
import WellcomeText from "./WellcomeText"
import Services from './Services';
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import CarouselMarriott from "./Carousel"
import Rooms from "./Rooms"
const HomePage = () => {
  return (
    <div className="App">
      <NavBarTest ></NavBarTest>
      <VideoContainer></VideoContainer>
      <WellcomeText></WellcomeText>
      <div className='panelRooms'>
        <h2 style={{ textAlign: "center", padding: "2%", fontSize: "50px", color: "white"}}>
            Available Rooms
        </h2>
      <Rooms></Rooms>

      </div>
        <div className='panel'>
            <div className='p-5'>
                  <h2 style={{  textAlign: "center", padding: "2%" }}>
                  Our Services
                  </h2>
            </div>
                        
          <Container  >
            <Row>
              <Services name="path_to_wifi_icon" service_name="Free WiFi"></Services>
              <Services name="path_to_restaurant_icon" service_name="Restaurant"></Services>
              <Services name="path_to_pool_icon" service_name="Swimming Pool"></Services>
              <Services name="path_to_transport_icon" service_name="Transportation" ></Services>
            </Row>
          </Container>
          <div className='p-5'>
             
            </div>
             

        </div> 
        <CarouselMarriott></CarouselMarriott>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
