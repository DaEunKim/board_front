import React from "react";
import { Button } from "semantic-ui-react";
import "./HeaderUnder.css";

const HeaderUnder = () => (
  <div className="HeaderUnder">
    <Button
      inverted
      color="red"
      content="글쓰기"
      icon="pencil alternate"
      labelPosition="left"
      onClick={e => {
        e.preventDefault();
        window.location = "./writing";
      }}
    />
    {/* <div className="HeaderUnder-page-num">1</div> */}
    <Button
      className="HeaderUnder-right-button"
      inverted
      color="violet"
      content="Login"
      icon="sign-in"
      labelPosition="left"
      onClick={e => {
        e.preventDefault();

        alert("dd");
      }}
    />
  </div>
);

export default HeaderUnder;
