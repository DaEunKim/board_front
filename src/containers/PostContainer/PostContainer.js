import React, { Component } from "react";
import {
  PostWrapper,
  Navigate,
  Post,
  Warning,
  Writing,
  Login,
  Signup,
  DetailPost
} from "../../components";
import * as service from "../../services/post";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { Header, HeaderUnder, Writing, Login, DetailPost } from "./components";

class PostContainer extends Component {
  constructor(props) {
    super();
    // initializes component state
    this.state = {
      postId: 1,
      fetching: false, // tells whether the request is waiting for response or not
      post_data: [],
      // post: {
      //   title: null,
      //   body: null
      // },
      // comments: [],
      warningVisibility: false
    };
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  showWarning = () => {
    this.setState({
      warningVisibility: true
    });

    // after 1.5 sec

    setTimeout(() => {
      this.setState({
        warningVisibility: false
      });
    }, 1500);
  };

  fetchPostInfo = async postId => {
    this.setState({
      fetching: true // requesting..
    });

    try {
      // wait for two promises
      const info = await Promise.all([
        service.getList()
        // service.getPost(postId)
        // service.getComments(postId)
      ]);

      // Object destructuring Syntax,
      // takes out required values and create references to them

      const post_data = info[0].data;

      // const { title, body } = info[1].data;
      // const comments = info[2].data;

      this.setState({
        postId,
        post_data,
        // post: {
        //   title,
        //   body
        // },
        // comments,
        fetching: false // done!
      });
    } catch (e) {
      // if err, stop at this point
      this.setState({
        fetching: false
      });
      this.showWarning();
    }
  };

  handleNavigateClick = type => {
    const postId = this.state.postId;

    if (type === "NEXT") {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };

  render() {
    const {
      postId,
      post_data,
      fetching,
      post,
      // comments,
      warningVisibility
    } = this.state;

    return (
      <PostWrapper>
        {/* Login */}
        <BrowserRouter>
          <Switch>
            <Route
              key="switch/signup"
              exact
              path="/signup"
              component={Signup}
            />
            <Route key="switch/login" exact path="/login" component={Login} />
            <Route
              key="switch/detail"
              exact
              path="/detail"
              component={DetailPost}
            />
            <Route
              key="switch/writing"
              exact
              path="/writing"
              component={Writing}
            />

            <Post
              postId={postId}
              post_data={post_data}
              // title={post.title}
              // body={post.body}
              // comments={comments}
            />
            <Navigate
              postId={postId}
              disabled={fetching}
              onClick={this.handleNavigateClick}
            />
            <Warning
              visible={warningVisibility}
              message="That post does not exist"
            />
          </Switch>
        </BrowserRouter>
      </PostWrapper>
    );
  }
}

export default PostContainer;
