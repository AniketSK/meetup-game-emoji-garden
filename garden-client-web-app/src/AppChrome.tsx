import React, { FunctionComponent } from 'react';
import './AppChrome.css';

type AppChromeTypes = {
    screenTitle: string
    submitClicked : Function
    submitText : string
    midContent : React.FC
}

const AppChrome: React.FC<AppChromeTypes> = ({screenTitle, submitClicked, submitText, midContent}) => {
return (
    <div className="App">
      <div className="App-title">{screenTitle}</div>
      <header className="App-header">
          {midContent({})}
      </header>
      <div className="Button-container">
        <button className="Button-footer" onClick={() => submitClicked()}>{submitText}</button>
      </div>
    </div>
  );
}

export default AppChrome;