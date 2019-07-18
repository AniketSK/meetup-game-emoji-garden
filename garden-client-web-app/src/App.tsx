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
      <CustomEmojiPicker addEmoji={addEmoji}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
