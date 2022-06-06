import React from 'react'
import body from './body.css'
import Header from '../header/Header.jsx'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Body({ spotify }) {
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body_info'>

        </div>

        <div className="body_songs">
            <div className="body_icons">
              <div className="body_comment">

                {/* LIST OF SONGS */}



                
                <PlayCircleOutlineIcon />
                {/* LIKE SONGS */}
                <FavoriteIcon />
                {/* COMMENTS - COMPONENTS - sort out what STRUCTURE (HTML- DIV) */}
                <p> Comments </p>
                  </div>
            </div>
        </div>

    </div>
  )
}

export default Body
