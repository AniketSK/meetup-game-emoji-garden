import 'emoji-mart/css/emoji-mart.css'
import { Picker, EmojiData } from 'emoji-mart'
import React, { ReactPropTypes } from 'react';

type EmojiPickerProps = {
    addEmoji: (emojiData: EmojiData) => void
}

const CustomEmojiPicker: React.FC<EmojiPickerProps> = ({addEmoji}) => {
return(
        <Picker title='Pick your emoji…' emoji='point_up' onSelect={addEmoji}/>
    )
}

export default CustomEmojiPicker