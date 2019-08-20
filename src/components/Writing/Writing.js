// 글쓰기 게시판
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import * as service from "../../services/post";

export default function Writing() {
  const [title, setTitle] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [text, setText] = useState("");
  const [tags, setTag] = useState("");
  const [password, setPassword] = useState("");
  const [checkRes, setCheckRes] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    if (!title) {
      return alert("제목을 입력하세요");
    }
    if (!creatorId) {
      return alert("작성자를 입력하세요");
    }
    if (!text) {
      return alert("내용을 입력하세요");
    }
    const data = {
      title,
      creatorId,
      text,
      tags: [],
      isAnonymous: true,
      password
    };
    service.postWriting(data, setCheckRes);
  };

  return (
    <>
      <div className="writing-board-whole">
        <h1 className="titleBar">게시판</h1>
        <div className="line-wrapper">
          <div className="input-title">Title</div>

          <input
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="line-wrapper">
          <div className="input-title">Creator</div>

          <input
            placeholder="작성자"
            value={creatorId}
            onChange={e => setCreatorId(e.target.value)}
          />
        </div>
        <div className="line-wrapper">
          <div className="input-title">Text</div>
          <input
            placeholder="내용"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="line-wrapper">
          <div className="input-title">Tag</div>
          <input
            placeholder="태그"
            value={tags}
            onChange={e => setTag(e.target.value)}
          />
        </div>
        <div className="line-wrapper">
          <div className="input-title">password</div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="save-button" onClick={handleSubmit}>
          save
        </button>
        <br />
        <div className="new-todo">{checkRes && "작성완료!"}</div>
        <br />
        <button
          className="back-button"
          onClick={e => {
            e.preventDefault();
            window.location = "./";
          }}
        >
          글 목록으로 가기
        </button>
      </div>
    </>
  );
}
