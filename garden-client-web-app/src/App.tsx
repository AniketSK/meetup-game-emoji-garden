import React from 'react';
import './App.css';
import CustomEmojiPicker from './CustomEmojiPicker'
import { Emoji, EmojiData } from 'emoji-mart';

const defaultEmoji = ":female-technologist::skin-tone-4:"

const App: React.FC = () => {
  const [emoji, setEmoji] = React.useState<string>(defaultEmoji)

  const showSelectedEmoji = (emojiData : EmojiData) => setEmoji(emojiData.colons || defaultEmoji)

  return (
    <div className="App">
      <div className="App-title">Pick Your Emoji!</div>
      <header className="App-header">
        <CustomEmojiPicker addEmoji={showSelectedEmoji}/>
        <div className="Emoji-logo">
          <Emoji emoji={emoji} size={64} />
        </div>
      </header>
      <div className="Button-container">
        <button className="Button-footer">That's Me!</button>
      </div>
    </div>
  );
}

export default App;
