import React from 'react'
import LeftSideBarOption from './LeftSideBarOption.css'

function LeftSidebarOption( { title, Icon } ) {
  return ( 
    <div className='LeftSideBarOption'>
     

      {Icon && <Icon className='LeftSideBarOption__icon' />}
      {Icon ? <h4>{title}</h4> :  <p>{title}</p> }
      
    </div>
  )
}

export default LeftSidebarOption
