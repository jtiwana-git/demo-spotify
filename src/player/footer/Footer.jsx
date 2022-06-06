import React from 'react'
import footer from './footer.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useDataLayerValue } from '../../DataLayer';


function Footer() {
  const [{ item, currentlyPlaying }, dispatch] = useDataLayerValue();
  return (
    <div className='footer'>
        <div className="footer__left">
            
            <img className='footer_songlogo' src='' alt=''/>
          
            <div className="footer_songInfo">
              <h4>SONG</h4>
              <p>ARTIST</p>  
            </div>
        </div>
        <div className="footer__center">
        < SkipPreviousIcon fontSize='small' className='footer__icon'/>
        
        < PlayCircleFilledIcon fontSize='large' className='footer__play'/>
        < PauseCircleFilledIcon fontSize='large' className='footer__pause'/>

        < SkipNextIcon fontSize='small' className='footer__icon'/>
        <Box sx={{ width: 200 }}>
      <Stack size="small" spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume"/>
        <VolumeUp />
      </Stack>
    </Box>


        </div>
       
      
    </div>
  )
}

export default Footer
