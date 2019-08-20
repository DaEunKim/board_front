import React from "react";
import { Button } from "semantic-ui-react";

const DetailPost = ({ onClick, postId, disabled }) => (
  <div className="DetailPost">
    <Button
      color="teal"
      content="Previous"
      icon="left arrow"
      labelPosition="left"
      onClick={() => onClick("PREV")}
      disabled={disabled}
    />
    <div className="DetailPost-page-num">{postId}</div>
    <Button
      color="teal"
      content="Next"
      icon="right arrow"
      labelPosition="right"
      className="DetailPost-right-button"
      onClick={() => onClick("NEXT")}
      disabled={disabled}
    />
  </div>
);

export default DetailPost;
