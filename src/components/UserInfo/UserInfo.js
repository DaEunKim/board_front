// http://lunahc92.tplinkdns.com:5100/api/users/read/{id}
// import React, { useState } from "react";
// import * as service from "../../services/post";

// export default function UserInfo(id) {
//   const data = service.getUserList(id);
//   console.log(data);
//   return <>user</>;
// }
import React, { useState, Component } from "react";
import {
  PostWrapper,
  Navigate,
  Post,
  Warning,
  Writing,
  Login,
  Signup,
  DetailPost
} from "../";
import * as service from "../../services/post";

class UserInfo extends Component {
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
      const info = await Promise.all([service.getUserList(postId)]);
      console.log(info);

      //   const post_data = info[0].data;

      // const { title, body } = info[1].data;
      // const comments = info[2].data;

      this.setState({
        postId,
        // post_data,
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

    return <>g</>;
  }
}

export default UserInfo;
