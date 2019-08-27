import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import queryString from "query-string";
import * as service from "../../services/post";
import axios from "axios";

function useAxios({ url, method }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios({ url, method });
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
}
const DetailPost = ({ location: { search } }) => {
  const query = queryString.parse(search);
  // console.log(query);
  const { id } = query;

  // const info = Promise.all([service.getReadPost(id)]);
  // const post_data = service.getReadPost(id);
  // console.log(post_data);
  // return <div className="DetailPost">dd</div>;
  const ReadPostUrl = `http://lunahc92.tplinkdns.com:5100/api/posts/read/${id}`;

  const getReadPost = useAxios({
    url: `${ReadPostUrl}`,
    method: "get"
  });

  const { data, isLoading, isError } = getReadPost;
  if (!data) {
    return <></>;
  }
  if (isLoading) {
    return <>loading...!!</>;
  }
  if (isError) {
    return <>error</>;
  }

  const { post, success } = data;
  // console.log(post);

  if (success) {
    return (
      <div className="writing-board-whole">
        <h3 className="titleBar">상세 내용</h3>
        <div>{post.title}</div>
        <div>{post.creatorId}</div>
        <div>{post.createTime}</div>
        <div>{post.text}</div>
        <div>{`like : ${post.likeCount}`}</div>
        <div>{`view : ${post.viewCount}`}</div>
      </div>
    );
  }

  return <></>;
};

export default DetailPost;
