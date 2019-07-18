import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomEmojiPicker from './CustomEmojiPicker'
import { EmojiData } from 'emoji-mart';

const App: React.FC = () => {

  const addEmoji = (emojiData : EmojiData) => {
    console.log(emojiData)
  }

  return (
    <div className="App">

      <header className="App-header">
        <CustomEmojiPicker addEmoji={addEmoji}/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
