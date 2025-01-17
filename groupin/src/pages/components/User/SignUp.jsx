import '../CSS/Login.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
    state = {
      id: "",
      password: "",
      nickname: "",
      email: "",
      region: "서울/경기/인천/강원",
    };
    onIdChange = e => {
      this.setState({
        id: e.target.value
      });
    };
    onPWChange = e => {
        this.setState({
          password: e.target.value
        });
      };
      onNNChange = e => {
        this.setState({
          nickname: e.target.value
        });
      };
      onEMChange = e => {
        this.setState({
          email: e.target.value
        });
      };
    onRegionChange = e => {
      this.setState({
        region: e.target.value
      });
    };

    handleSubmit = e => {
      e.preventDefault();
      const data = {
        id: this.state.id,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
        region: this.state.region,     
      };
      axios
        .post("https://groupin-songpyeon.herokuapp.com/auth/signup", JSON.stringify(data), {
          headers: {"Content-Type" : "application/json"}
        }
        )
        .then(res => console.log("---------success-----: ", res))
        .catch(err => console.log(err.message));
    };
  
    render() {
    return (
        <>
        {/* <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="id" value={this.state.id}
            onChange={this.onIdChange} required
          />
           <textarea
            placeholder="password" value={this.state.password}
            onChange={this.onPWChange} required
          />
           <textarea
            placeholder="nickname" value={this.state.nickname}
            onChange={this.onNNChange} required
          />
           <textarea
            placeholder="email" value={this.state.email}
            onChange={this.onEMChange} required
          />

          <button type="submit">Create Post</button>
        </form>
      </div> */}
        <div className='login-form'>
            <strong>회원가입</strong>
            <form onSubmit={this.handleSubmit}>
                <input type="id" name="id" class="text-field" value={this.state.id} onChange={this.onIdChange} required placeholder="ID"></input>
                <br></br>
                <br></br>
                <input type="password" name="password" class="text-field" value={this.state.password} onChange={this.onPWChange} required placeholder="PW"></input>
                <br></br>
                <br></br>
                <input type="text" name="nickname" class="text-field" placeholder="nickname" value={this.state.nickname} onChange={this.onNNChange} required></input>
                <br></br>
                <br></br>
                <input type="email" name="email" class="text-field" placeholder="E-mail" value={this.state.email} onChange={this.onEMChange} required></input>
                <br></br>
                <br></br>

            <div class="text-field">
            <input type="radio" name="place" defaultChecked value="수도권" />서울/경기/인천/강원
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="경상남도" />부산/울산/경남
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="경상북도" />대구/경북
            <br></br>
            <input type="radio" name="place" value="충청도" />대전/충청
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="전라도" />광주/전라
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="제주도" />제주
            </div>
            
            <br></br>

            <input type="file" class="text-field" accept="image/*,.txt" multiple capture='user'/> 

            <br></br>            <br></br>
            {/* <button type="submit" onClick={() => Link(/login)}>Create Post</button> */}

            <Link to = "/login"><Button type="submit" text="회원가입"/></Link>
            </form>


        </div>
        </>
    );
    }
};

export default SignUp;