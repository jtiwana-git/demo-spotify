import React from 'react'
import './player.css'
import LeftSidebar from './LeftSidebar/LeftSidebar.jsx'
import RightSidebar from './RightSidebar/RightSidebar.jsx'
import Body from './body/Body.jsx'
import Footer from './footer/Footer.jsx'

function Player( { spotify } ) {
  return (
    <div className='player'>
      <div className='player__body'>
        <LeftSidebar />
        <Body spotify={spotify} />
        <RightSidebar />
        <Footer />
      </div>

      {/* SEARCH BAR - BODY */}
      {/* RESULTS - BODY */}
      {/* USER IMAGE - LEFT*/}
      {/* SAVED PLAYLIST LEFT */}
      {/* COMMENTS - RIGHT */}
      {/* "ACTUAL" PLAYER - FOOTER (FOR NOW) */}
      
    </div>
  )
}

export default Player
