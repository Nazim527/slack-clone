import React from 'react'
import './style.scss'

const SideBarOptions = ({Icon,title}) => {
  return (
    <div className='sidebarOptions'>
        {Icon && <Icon className="sidebarOptions_icon"/>}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <h3 className='sidebarOptions_channel'>
              <span className='sidebarOption_hash'>#</span>{title}
            </h3>
        )}
    </div>
  )
}

export default SideBarOptions