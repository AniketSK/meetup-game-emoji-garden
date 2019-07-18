import React from 'react';
import './EmojiPickingScreen.css';
import CustomEmojiPicker from './CustomEmojiPicker'
import { Emoji, EmojiData } from 'emoji-mart';
import { navigate } from "@reach/router"
const defaultEmoji = ":female-technologist::skin-tone-4:"

type EmojiPickingScreenTypes = {
    path: string
}

const EmojiPickingScreen: React.FC<EmojiPickingScreenTypes> = () => {
  const [emoji, setEmoji] = React.useState<string>(defaultEmoji)

  const showSelectedEmoji = (emojiData : EmojiData) => setEmoji(emojiData.colons || defaultEmoji)
  const selectionMade = (emojiId : string) => navigate(`/placer/:${encodeURIComponent(emojiId)}`)

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
        <button className="Button-footer" onClick={() => selectionMade(emoji)}>That's Me!</button>
      </div>
    </div>
  );
}

export default EmojiPickingScreen;
