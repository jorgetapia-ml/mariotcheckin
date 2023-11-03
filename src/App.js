import Testimonio from './components/Testimonio';
import './App.css';
import NavBarTest from './components/NavBarTest';

import "bootstrap/dist/css/bootstrap.min.css"
import VideoContainer from './components/VideoContainer';
import WellcomeText from "./components/WellcomeText"
import Services from './components/Services';
import { Container, Row } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <NavBarTest ></NavBarTest>
      <VideoContainer></VideoContainer>
      <WellcomeText></WellcomeText>
        <div className='panel'>
          <Container >
            <Row>
              <h2 style={{  textAlign: "center"}}>Our Services</h2>            
              <Services name="path_to_wifi_icon" service_name="Free WiFi"></Services>
              <Services name="path_to_restaurant_icon" service_name="Restaurant"></Services>
              <Services name="path_to_pool_icon" service_name="Swimming Pool"></Services>
              <Services name="path_to_transport_icon" service_name="Transportation" ></Services>
            </Row>
          </Container>
        </div> 
        <div className='panel'>
        Hola mundo
        </div>
    </div>
  );    
}

export default App;
