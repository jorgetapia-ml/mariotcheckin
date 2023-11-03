import React from 'react'
import "../App.css"
import NavBarTest from './NavBarTest'
import Footer from './Footer'
import VideoContainer from './VideoContainer'
import WebcamCapture from './WebCam'
import {formData} from "./ReservationPage"
const CheckinProcess = () => {
  return (
    <div className='App'>
        <NavBarTest ></NavBarTest>
        <VideoContainer></VideoContainer>
        <WebcamCapture></WebcamCapture>
        <div>{formData}</div>
        <Footer></Footer>
    </div>
  )
}

export default CheckinProcess
