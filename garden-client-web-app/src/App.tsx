import React from 'react';
import './App.css';
import ScreenEmojiPicker from './ScreenEmojiPicker';
import ScreenEmojiPlacer from './ScreenEmojiPlacer';

import { Router, Link } from "@reach/router";

const App: React.FC = () => {

  return (
    <Router>
      <ScreenEmojiPicker path="/"/>
      <ScreenEmojiPlacer path="/placer/:emojiId" />
    </Router>
  );
}

export default App;
