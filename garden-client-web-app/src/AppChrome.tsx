import React, { FunctionComponent } from "react";
import "./AppChrome.css";

type AppChromeTypes = {
  screenTitle: string;
  submitClicked: Function;
  submitText: string;
  children: any;
};

const AppChrome: React.FC<AppChromeTypes> = ({
  screenTitle,
  submitClicked,
  submitText,
  children
}) => {
  return (
    <div className="App">
      <div className="App-title">{screenTitle}</div>
      <header className="App-header">{children()}</header>
      <div className="Button-container">
        <button className="Button-footer" onClick={() => submitClicked()}>
          {submitText}
        </button>
      </div>
    </div>
  );
};

export default AppChrome;
