import React from 'react';
import './App.css';
import EmojiPickingScreen from './EmojiPickingScreen';
import ScreenEmojiPlacer from './ScreenEmojiPlacer';

import { Router, Link } from "@reach/router";

const App: React.FC = () => {

  return (
    <Router>
      <EmojiPickingScreen path="/"/>
      <ScreenEmojiPlacer path="/placer/:emojiId" />
    </Router>
  );
}

export default App;
