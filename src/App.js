import React from 'react';
import Sidebar from './sidebar';
import { Box } from '@chakra-ui/react';
import  Nav from './Navigation';
import Mov from './Mov';
import ContactInfo from "./Contact";
import './App.css';

function App() {
  return (
    <>
    <div>
      <div className="App" id="outer-container">
        <Box bg='crimson' w='100%' p={6} color='white' fontSize={30} boxShadow="md">
          Cine Time
        </Box>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div>
      <Box bg= '#373a47' w='100%' p={3} color='white' fontSize={25} boxShadow="md">
        <Nav />    
      </Box>
      </div>
      <Mov />
    </div>
    <ContactInfo />
    </>
  );
}

export default App;