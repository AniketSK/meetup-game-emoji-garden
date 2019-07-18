import React from 'react';
import './App.css';
import CustomEmojiPicker from './CustomEmojiPicker'
import { Emoji, EmojiData } from 'emoji-mart';

const defaultEmoji = ":female-technologist::skin-tone-4:"

const App: React.FC = () => {
  const [emoji, setEmoji] = React.useState<string>(defaultEmoji)

  const addEmoji = (emojiData : EmojiData) => setEmoji(emojiData.colons || defaultEmoji)

  return (
    <div className="App">

      <header className="App-header">
        <CustomEmojiPicker addEmoji={addEmoji}/>
        <div className="App-logo" ><Emoji emoji={emoji} size={64} /></div>
      </header>
    </div>
  );
}

export default App;
