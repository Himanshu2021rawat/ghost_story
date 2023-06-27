import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';
import InfoIcon from '@mui/icons-material/Info';

const Navigation = () => {
  return (
    <div className='navigation'>

    <nav>
        <ul>
            <li><a href="#"><HomeIcon/> Home</a></li>
            <li><a href="#"><TextRotationNoneIcon/>About</a></li>
            <li><a href="#"><InfoIcon/>Help!</a></li>
        </ul>
    </nav>

    </div>
  )
}

export default Navigation