import React from "react";
import "./PostList.css";

const PostList = ({ post, index }) => {
  // map data to components
  const { id, title, creatorId, createTime, text } = post;

  return (
    <ul className="PostList" key={index}>
      <li key={id}>
        <p>{title}</p>
        <div>{createTime}</div>
        <div>{creatorId}</div>
        <div>{text}</div>
      </li>
    </ul>
  );
};

export default PostList;
