import React from "react";
import "./PostList.css";
import { Icon, Button } from "semantic-ui-react";
import * as service from "../../services/post";

const PostList = ({ post, index }) => {
  // map data to components
  const {
    id,
    title,
    creatorId,
    createTime,
    text,
    tags,
    likeCount,
    viewCount
  } = post;

  return (
    <ul className="PostList" key={index}>
      <li key={id}>
        <h2>
          {/* <Icon color="pink" name="wordpress forms" size="small" /> */}
          <Button
            className="PostList-right-button"
            icon="x"
            type="submit"
            onClick={e => {
              e.preventDefault();
              service.deletePost(id);
            }}
          />
          {`${index + 1}. ${title}`}
        </h2>
        <div>
          <Icon color="red" name="heart outline" size="small" />
          {`${likeCount} `}
          <Icon color="black" name="eye" size="small" />
          {viewCount}
        </div>

        <div>{`작성자 : ${creatorId}`}</div>
        <div>{createTime}</div>
        <br />
        <div>{text}</div>
        <br />
        <div className="tag">
          {tags &&
            tags.map(tag => {
              return (
                <>
                  <Icon color="grey" name="hashtag" size="small" />
                  {`${tag} `}
                </>
              );
            })}
        </div>
      </li>
    </ul>
  );
};

export default PostList;
