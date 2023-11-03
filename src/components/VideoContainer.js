import React from 'react'

const VideoContainer = () => {
  return (
        <div className="video-container">
        <video className="video-background" autoPlay muted loop>
            <source src={require("../imgs/path_to_particles_video.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>

  )
}
export default VideoContainer
