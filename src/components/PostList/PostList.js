import React from "react";
import "./PostList.css";
import { Icon, Button } from "semantic-ui-react";
import * as service from "../../services/post";
import { Link } from "react-router-dom";
import { DetailPost } from "../DetailPost/DetailPost";
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
  const data = { postId: id, userId: creatorId };

  let likeFlag = false;
  return (
    <ul className="PostList" key={index}>
      <li key={id}>
        <Link to={`/detail?id=${id}`}>
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
        </Link>
        <div>
          <Icon
            color="red"
            name={likeFlag ? "heart" : "heart outline"}
            onClick={e => {
              e.preventDefault();
              likeFlag = true;
              service.postLike(data);
            }}
          />
          {`${likeCount} `}
          <Icon color="black" name="eye" />
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
