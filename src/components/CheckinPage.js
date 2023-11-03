import React from 'react'
import NavBarTest from './NavBarTest'
import Footer from './Footer'
import VideoContainer from './VideoContainer'
import "../App.css"
const CheckinPage = () => {
  return (
    <div className='App'>
        <NavBarTest ></NavBarTest>
        <VideoContainer></VideoContainer>
        <Footer></Footer>
    </div>
  )
}

export default CheckinPage
