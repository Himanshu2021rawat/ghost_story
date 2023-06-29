import './App.css';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
import Header from './component/Header';
import Home from './component/Home';
import Services from './component/Services';
import Error from './component/Error';
import Insta from './component/Insta';
import Mail from './component/Mail';

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">

  <Header/>
 
  

{/* switch */}
<Routes>
{/* Home */}
          <Route path="/" element={<Home />}/>


{/* About*/}
          <Route path="/Aboutus" element={<Aboutus />}/>
            
{/* Contactus*/}
          <Route path="/Contactus" element={<Contactus />}/>

{/* Services */}
          <Route path="/Services" element={<Services />}>

                <Route path='Insta' element={<Insta/>} />
                <Route path='Mail' element={<Mail/>}/>

          </Route>
{/* Error */}
          <Route path='*' element={<Error/>} />

</Routes>



    </div>
    </Router>
  );
}

export default App;
