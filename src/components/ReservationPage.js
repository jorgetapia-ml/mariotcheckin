import React from 'react'
import NavBarTest from './NavBarTest'
import Footer from './Footer'
import VideoContainer from './VideoContainer'
import "../App.css"
import "../css/reservation.css"
import { Button } from 'react-bootstrap'
const ReservationPage = () => {
  return (
    <div className='App'>
        <NavBarTest ></NavBarTest>
        <VideoContainer></VideoContainer>
        <div className="checkin-container d-flex align-items-center justify-content-center"> {/* Modificado */}
            <div className="form-container w-50 text-center "> {/* Añadido 'text-center' para centrar el contenido horizontalmente */}
                <h2 className="mb-4">Online Check-in</h2>
                <form className="w-50 mx-auto"> {/* Añadido para que el formulario tenga un ancho del 50% y esté centrado */}
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Enter your full name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
                    <input type="date" className="form-control" id="arrivalDate" />
                </div>
                <div className="mb-3">
                    <label htmlFor="reservationHours" className="form-label">Arrival Hour</label>
                    <input type="number" className="form-control" id="reservationHours" placeholder="Number of hours" min={1} max={24} />
                </div>
                <div className="mb-3">
                    <label htmlFor="arrivalDate" className="form-label">Checkout Date</label>
                    <input type="date" className="form-control" id="arrivalDate" />
                </div>
                <div className="mb-3">
                    <label htmlFor="reservationHours" className="form-label">Checkout Hour</label>
                    <input type="number" className="form-control" id="reservationHours" placeholder="Number of hours" min={1} max={24} />
                </div>
                <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">Room Type</label>
                    <select className="form-control" id="roomType">
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Suite</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="specialRequests" className="form-label">Special Requests</label>
                    <textarea className="form-control" id="specialRequests" rows={3} placeholder="Any special requests or needs?" defaultValue={""} />
                </div>
                <Button type="submit" className="btn btn-primary btn-lg" onClick={console.log("Sum")}>Next</Button>
                </form>
            </div>
        </div>






        <Footer></Footer>
    </div>
  )
}

export default ReservationPage
