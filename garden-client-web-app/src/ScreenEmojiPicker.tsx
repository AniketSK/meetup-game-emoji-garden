import React, { Props } from 'react';
import './ScreenEmojiPicker.css';
import CustomEmojiPicker from './CustomEmojiPicker'
import { Emoji, EmojiData } from 'emoji-mart';
import { navigate } from "@reach/router"
import AppChrome from './AppChrome'

type ScreenEmojiPickingTypes = {
    path: string
}
const defaultEmoji = ":female-technologist::skin-tone-4:"

const ScreenEmojiPick: React.FC<ScreenEmojiPickingTypes> = () => {
  const [emoji, setEmoji] = React.useState<string>(defaultEmoji)

  const showSelectedEmoji = (emojiData : EmojiData) => setEmoji(emojiData.colons || defaultEmoji)
  const selectionMade = (emojiId : string) => navigate(`/placer/:${encodeURIComponent(emojiId)}`)
  const submitClicked = () => selectionMade(emoji)

  const picker : React.FC = () => {
    return <React.Fragment>
        <CustomEmojiPicker addEmoji={showSelectedEmoji}/>
        <div className="Emoji-logo">
            <Emoji emoji={emoji} size={64} />
        </div>
    </React.Fragment>
    }

  return (
      <AppChrome screenTitle="Pick Your Emoji!" submitClicked={submitClicked} submitText="That's me"
      midContent={picker}
        />
  );
}

export default ScreenEmojiPick;
