import React from 'react'

function NavBarTest (props) {
return (
  <div className="navbar">
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{fontSize: 25}}>
    <div className="container">
      <a className="navbar-brand" href="/"><img src={require("../imgs/path_to_hotel_logo.png")} alt="Hotel Logo" width={40} className="mr-2" />  Marriott </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Rooms</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="/checkin">Check-in</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Check-out</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default NavBarTest
