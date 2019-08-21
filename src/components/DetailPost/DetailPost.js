import React from "react";
import { Button } from "semantic-ui-react";
import queryString from "query-string";
import * as service from "../../services/post";

const DetailPost = ({ location: { search } }) => {
  const query = queryString.parse(search);
  // console.log(query);
  const { id } = query;
  const info = Promise.all([service.getReadPost(id)]);
  const post_data = service.getReadPost(id);
  console.log(post_data);
  return <div className="DetailPost">dd</div>;
};

export default DetailPost;
