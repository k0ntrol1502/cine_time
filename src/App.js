import React from 'react';
import Sidebar from './sidebar';
import { Box } from '@chakra-ui/react';
import  Nav from'./Navigation';
import './App.css';

function App() {
  return (
    <div>
      <div className="App" id="outer-container">
        <Box bg='crimson' w='100%' p={7} color='white' fontSize={25} boxShadow="md">
          Cine Time
        </Box>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;