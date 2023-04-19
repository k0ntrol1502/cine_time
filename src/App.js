import React from 'react';
import Sidebar from './sidebar';
import { Box, Image } from '@chakra-ui/react';
import  Nav from './Navigation';
import Mov from './Mov';
import ContactInfo from "./Contact";
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Test from'./Booking';
import Carousel from './Slider';
function App() {
  return (
    <>
    <Router>
    <div>
      <div className="App" id="outer-container">
        <Box display= "flex" bg='crimson' w='100%' p={6} color='white' boxShadow="md" justifyContent="center">
        <Image src="https://ik.imagekit.io/5if8ukbxw/images/Logo.png?updatedAt=1680836288989" alt="Cine Time" width="200px" height="45px" />
        </Box>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div>
      <Box bg= '#373a47' w='100%' p={3} color='white' fontSize={25} boxShadow="md">
        <Nav />    
      </Box>
    </div>
    </div>
      {/* <Mov /> */}
      <Carousel />
      <Routes>
        <Route exact path='/' element={<Mov />}>
        </Route>
        <Route exact path='/about' element={<About />}>
        </Route>
        <Route exact path='/contact' element={<ContactInfo />}>
        </Route>
        <Route exact path='/book' element={<Test />}>
        </Route>
        </Routes>
      </Router>
  </>
  );
}

export default App;