import React from 'react';

type ScreenEmojiPlacerTypes = {
    path: string
    emojiId?: string
}

const ScreenEmojiPlacer: React.FC<ScreenEmojiPlacerTypes> = ({emojiId}) => {
    return (
        <div>
            Hello, it is I! {decodeURIComponent(emojiId || "missing emoji")}
        </div>
    )
}

export default ScreenEmojiPlacer;