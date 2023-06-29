import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';
import InfoIcon from '@mui/icons-material/Info';
import About from './About'
import Help from './Help'
import Error from './Error'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
    <div className='navigation'>

    <Routes>
          <Route path='/About' element={<About/>}/>
          <Route path='/Help' element={<Help/>}/>
          <Route path='*' element={<Error/>} />
    </Routes>

    <nav>
        <ul>
           <Link to={'/'}> <li><HomeIcon/> Home</li></Link>
            <Link to={'/About'}><li><TextRotationNoneIcon/>About</li></Link>
            <Link to={'/Help'}><li><InfoIcon/>Help!</li></Link>
        </ul>
    </nav>

    </div>
  </Router>
  )
}

export default Navigation