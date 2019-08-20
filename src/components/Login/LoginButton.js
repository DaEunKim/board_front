import React from "react";
import { Button } from "semantic-ui-react";
// import "./WritingButton.css";
// import { Writing } from "./Writing";

const LoginButton = () => (
  <div className="WritingButton">
    <Button
      inverted
      color="red"
      content="Login"
      icon="login"
      labelPosition="right"
      onClick={e => {
        e.preventDefault();

        // window.location = "./writing";
      }}
    />
  </div>
);
export default LoginButton;
