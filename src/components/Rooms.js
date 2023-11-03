import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import "../css/rooms.css"
const Rooms = () => {
    return (

    <div className='p-5'> 
        <Container >
        <Row>
            <Col>
            <Card>
                    <img src={require("../imgs/path_to_your_hotel_room_image.png")} alt="servicio" className=" img-fluid mb-3" />
                    <Card.Body style={{height: "380px"}}>
                        <strong><p> Habitacion individual</p></strong>
                        <p>Habitación diseñada para una sola persona. Suelen contar con una cama individual.</p>
                    </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card>
                        <img src={require("../imgs/path_to_your_hotel_room_image.png")} alt="servicio" className=" img-fluid mb-3" />
                        <Card.Body style={{height: "380px"}}> 
                        <strong><p> Habitación Familiar</p></strong>
                        <p>Habitación diseñada para familias, suele ser más amplia y puede tener camas adicionales o literas para niños.</p>
                        </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                        <img src={require("../imgs/path_to_your_hotel_room_image.png")} alt="servicio" className=" img-fluid mb-3" />
                        <Card.Body style={{height: "380px"}}> 
                        <strong><p> Habitacion doble</p></strong>
                        <p>Habitación con una cama doble o dos camas individuales. Puede ser para uso individual o para dos personas.</p>
                        </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                        <img src={require("../imgs/path_to_your_hotel_room_image.png")} alt="servicio" className=" img-fluid mb-3" />
                        <Card.Body style={{height: "380px"}}> 
                        <strong><p> Habitacion Suite</p></strong>
                        <p>Una habitación más lujosa que suele contar con un salón independiente, uno o más dormitorios y, a veces, varias instalaciones como jacuzzi.</p>
                        </Card.Body>
                </Card>
            </Col>
            
        </Row>
        </Container>
    </div>

    );
}

export default Rooms;