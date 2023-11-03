import React from 'react'
import "../css/services.css"
import { Col } from 'react-bootstrap'
const Services = (props) => {
    let name = props.name
    return (
      <Col>
        <img src={require(`../imgs/${name}.png`)} alt="servicio" className="imgprop img-fluid mb-3" />
        <p> {props.service_name}</p>
      </Col>
  )
}

export default Services
