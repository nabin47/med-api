import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
         
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
        else{
          
          window.location.href = "./Login";
        }
      });
  }
  /*className="d-grid"*/
  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit} className="login-form" style={{"width":"30%"}}>
        <div className="container" style={{"backgroundColor":"rgba(24,144,255,0.11)","borderRadius":"2%","marginLeft":"120%","marginTop":"20%"}}>
          <h3 style={{"color":"#28282bc7","padding":"0.5em"}} >
            <Link to='/'>
              Med-API
            </Link>
          </h3>

          <div className="mb-3">
            <div>
              <label style={{"float":"left","color":"#28282bc7","padding":"0.5em"}}>Email</label>
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label style={{"float":"left","color":"#28282bc7","padding":"0.5em"}}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary" style={{marginBottom: "3%", backgroundColor: "#001D3D"}}>
              Signin
            </button>
          </div>

          </div>
        </form>
      </div>
    );
  }
}
