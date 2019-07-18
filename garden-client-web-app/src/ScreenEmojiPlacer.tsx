import React from "react";
import AppChrome from "./AppChrome";

type ScreenEmojiPlacerTypes = {
  path: string;
  emojiId?: string;
};

const ScreenEmojiPlacer: React.FC<ScreenEmojiPlacerTypes> = ({ emojiId }) => {
  const picker: React.FC = () => {
    return (
      <React.Fragment>
        Hello, it is I!{" "}
        {decodeURIComponent(emojiId || "yep crash cause of a missing emoji")})
      </React.Fragment>
    );
  };

  const submitClicked = () => console.log("Placed");

  return (
    <div>
      <AppChrome
        screenTitle="Place it in the garden :)"
        submitClicked={submitClicked}
        submitText="Place it!"
      >
        {picker}
      </AppChrome>
    </div>
  );
};

export default ScreenEmojiPlacer;
