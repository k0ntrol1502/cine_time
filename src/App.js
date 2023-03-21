import React from 'react';
import Sidebar from './sidebar';
import './App.css';
import { Heading } from '@chakra-ui/react'
function App() {
  return (
    <div className="App" id="outer-container">
    <Heading noOfLines={3}>
      Cine Time
    </Heading>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <h2>
        Booking made easy
      </h2>
      </div>
    </div>
  );
}

export default App;