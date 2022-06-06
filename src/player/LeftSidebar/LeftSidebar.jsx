import React, { useState } from 'react'
import leftsidebar from './leftsidebar.css'
import LeftSidebarOption from './LeftSidebarOption'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useDataLayerValue } from '../../DataLayer';

function LeftSidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='leftsidebar'>

      {/* CHANGE IMAGE FOR PROFILE  */}
      <img className='L-Sidebar__avatar' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='temp'/>


    

    <LeftSidebarOption Icon={PlaylistAddIcon} title='Playlist' />
    
    <br/>
    <strong className='sidebar__title'>SAVED TRACKS</strong>    
    <hr/>
    <LeftSidebarOption title='PLAYLIST HERE'/>
    
    {playlists?.items?.map((playlists) => (
      <LeftSidebarOption title={playlists.name} />
    ))}

      
    </div>
  )
}


export default LeftSidebar
