import React from 'react';
import Sidebar from './sidebar';
import Header from './Header'
import { Box } from '@chakra-ui/react'
import './App.css';
function App() {
  return (
    <div className="App" id="outer-container">
    <Box bg='tomato' w='100%' p={7} color='white' fontSize={25} boxShadow="5px 3px #888888">
      Cine Time
    </Box>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
  );
}

export default App;