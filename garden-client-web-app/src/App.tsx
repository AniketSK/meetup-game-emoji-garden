import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomEmojiPicker from './CustomEmojiPicker'
import { Emoji, EmojiData } from 'emoji-mart';

const App: React.FC = () => {

  const addEmoji = (emojiData : EmojiData) => {
    console.log(emojiData)
  }

  return (
    <div className="App">

      <header className="App-header">
        <CustomEmojiPicker addEmoji={addEmoji}/>
        <div className="App-logo" ><Emoji emoji=':santa::skin-tone-3:' size={64} /></div>
      </header>
    </div>
  );
}

export default App;
