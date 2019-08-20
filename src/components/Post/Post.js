import React, { Component } from "react";
import "./Post.css";
import { PostList } from "../";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postInfo: {
        post_data: []
      },
      animate: false,
      direction: "left"
    };
  }

  componentWillReceiveProps(nextProps) {
    const { post_data } = nextProps;

    if (this.props.postId !== nextProps.postId) {
      // identify the animation direction
      const direction = this.props.postId < nextProps.postId ? "left" : "right";

      this.setState({
        direction,
        animate: true
      });

      // sync the props to state 0.5 sec later
      setTimeout(() => {
        this.setState({
          postInfo: {
            post_data
          },
          animate: false
        });
      }, 500);
      return;
    }

    // sync the props to state directly (this is the first post)
    this.setState({
      postInfo: {
        post_data
      }
    });
  }

  render() {
    const { post_data } = this.state.postInfo;
    const { animate, direction } = this.state;

    const { posts } = post_data;

    const animation = animate
      ? direction === "left"
        ? "bounceOutLeft"
        : "bounceOutRight"
      : direction === "left"
      ? "bounceInRight"
      : "bounceInLeft";

    // show nothing when data is not loaded

    if (post_data === null) return <></>;
    if (posts === null) return <></>;

    const postList =
      posts &&
      posts.map((post, index) => (
        <>
          <PostList post={post} index={index} />
        </>
      ));

    return <div className={`Post animated ${animation}`}>{postList}</div>;
  }
}

export default Post;
