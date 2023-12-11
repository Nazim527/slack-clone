import React from 'react'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import '../layouts/header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="header_left">
            {/* //? Avatars Logged in user */}
            {/* //? Time Icon */}
            <Avatar 
            className='header_avatar'
            src=''
            alt='Rzayev Nazim'/>
            <AccessTimeIcon/>
        </div>
        <div className="header_search">
            {/* //? Search Icon */}
            {/* //? Inout */}
            <SearchIcon/>
            <input type="text" placeholder='Search Clever Proggramer'/>
        </div>
        <div className="header_right">
            {/* //? Help Icon */}
            <HelpOutlineIcon/>
        </div>
    </div>
  )
}

export default Header