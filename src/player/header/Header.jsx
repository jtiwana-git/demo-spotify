import React, { useState } from 'react'
import header from './header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from '../../DataLayer.js';
import {  Container, Form } from 'react-bootstrap'



function Header({spotify}) {
    const [{ user, search }, dispatch] = useDataLayerValue();
  
  return (
    <Container className='d-flex flex-colmun py-2' style={{height: '100vh'}}>
      <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt={user}/>
            <h4>{user?.display_name}</h4>

        </div>
        <div className="header_left">
       <Form.Control type='search' placeholder='Search for Songs....'  value={search} onChange={e => search(e.target.value)}/>

       <div className="header_songResults flex-grow-1 my-2">
         Songs
       </div>

        </div>

        
    </Container>
  )
}

export default Header
