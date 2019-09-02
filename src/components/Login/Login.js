// 로그인

// 최상단 페이지
// 로그인 페이지 -> 회원이면 로그인, 비회원이면 회원가입 페이지
import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import * as service from "../../services/post";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      fetching: false,
      post_data: {
        inputId: null,
        inputPassword: null
      },
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
        post_data: {
          // inputId,
          // inputPassword
        },

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
  // service.postLogin(data, setCheckRes);
  render() {
    const {
      post_data,

      warningVisibility
    } = this.state;

    return (
      <>
        <div className="writing-board-whole">
          <h1 className="titleBar">Login</h1>
          <div className="line-wrapper">
            <div className="input-title">ID</div>
            <input
              value={post_data.inputId}
              placeholder="ID"
              onChange={e => {
                e.preventDefault();
                // setInputId(e.target.value);
              }}
            />
          </div>
          <div className="line-wrapper">
            <div className="input-title">PW</div>
            <input
              value={post_data.inputPassword}
              placeholder="PASSWORD"
              type="password"
              onChange={e => {
                e.preventDefault();
                // setInputPassword(e.target.value);
              }}
            />
          </div>

          {/* <button className="save-button" onClick={handleSubmit}>
            Login
          </button> */}

          <div className="description">
            <div>회원이 아니신가요?</div>

            <Link to="/signup">회원가입 하러가기</Link>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
// export default function Login() {
//   const [inputId, setInputId] = useState("");
//   const [inputPassword, setInputPassword] = useState("");
//   const [checkRes, setCheckRes] = useState();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const data = {
//       id: inputId,
//       password: inputPassword
//     };
//     service.postLogin(data, setCheckRes);
//     const info = service.getUserList(data.id); //await Promise.all([service.getUserList(data.id)]) ;
//     console.log(info);
//     // axios.post(LoginCheckUrl, data).then(res => {
//     //   if (res.data.success === true) {
//     //     setCheckRes(res);
//     //     console.log(res);

//     //     // props 들고 가기
//     //     return (window.location = "/userinfo");
//     //   } else {
//     //     return alert("아이디 혹은 비밀번호를 다시 입력하세요. ");
//     //   }
//     // });
//   };

//   return (
//     <>
//       <div className="writing-board-whole">
//         <h1 className="titleBar">Login</h1>
//         <div className="line-wrapper">
//           <div className="input-title">ID</div>
//           <input
//             value={inputId}
//             placeholder="ID"
//             onChange={e => {
//               e.preventDefault();
//               setInputId(e.target.value);
//             }}
//           />
//         </div>
//         <div className="line-wrapper">
//           <div className="input-title">PW</div>
//           <input
//             value={inputPassword}
//             placeholder="PASSWORD"
//             type="password"
//             onChange={e => {
//               e.preventDefault();
//               setInputPassword(e.target.value);
//             }}
//           />
//         </div>

//         <button className="save-button" onClick={handleSubmit}>
//           Login
//         </button>

//         <div className="description">
//           <div>회원이 아니신가요?</div>

//           <Link to="/signup">회원가입 하러가기</Link>
//         </div>
//       </div>
//     </>
//   );
// }
