import React from 'react';
import './App.css';
import EmojiPickingScreen from './EmojiPickingScreen';
import { Router, Link } from "@reach/router";

const App: React.FC = () => {

  return (
    <Router>
      <EmojiPickingScreen path="/"/>
    </Router>
  );
}

export default App;
