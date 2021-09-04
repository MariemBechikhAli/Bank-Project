import React, { Component } from "react";
import { Form, Col, Row, message } from "antd";
import "./bg_register.css";
import land from "../../assets/img/login-image2.jpg";
import axios from "axios";

const FormItem = Form.Item;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Email: "",
      Password: "",
      setLoginState:true
    };
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onSubmit(){
    axios.post('http://localhost:6001/clientSide/login',{
      Email: this.state.Email,
      Password: this.state.Password
    })
    .then((res) => {
      if(!res.data.message) {
        this.setLoginState(false);
      
      }
      else {
        console.log(res.data);
       //   this.setLoginState(res.data[0].Email);
          window.location='/edit-profile'
      }
      });
    };
  render() {
    //const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="myreg gx-app-login-wrap">
        <div className=" ">
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Col
              style={{
                width: "40%",
                height: "100%",
                margin: "0",
              }}
            >
              <img width="550px" height="700px" src={land} alt="Bank" />
            </Col>
            <Col
              style={{
                width: "40%",
                height: "100%",
              }}
            >
              <Row>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Bienvenue Dans Votre Espace Personnel{" "}
                </h1>
              </Row>
              <div
                style={{ height: "100%", padding: "2%" }}
                className="gx-app-login-wrap"
              >
                <div
                  className="gx-app-login-container"
                  style={{
                    width: "fit-content",

                    marginRight: "auto",
                  }}
                >
                     <br />   <br />   <br />
                  <form align="middle" class="">
                    <div class="">
                      <div class="input-group">
                        <label style={{ color: "white", width: "80px", fontWeight:"600"}}>
                          Email
                        </label>
                        <input
                          placeholder="demo@exemple.tn"
                          type="text"
                          class="form-control"
                          value={this.state.Email}
                          onChange={this.onChangeEmail}
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i
                              aria-hidden="true"
                              class="nc-icon nc-email-85"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="">
                      <div class="input-group">
                        <label style={{ color: "white", width: "80px" , fontWeight:"600"}}>
                          Password
                        </label>
                        <input
                          placeholder="password"
                          type="password"
                          class="form-control"
                          value={this.state.Password}
                          onChange={this.onChangePassword}
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i aria-hidden="true" class="nc-icon nc-key-25"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <br />
                  </form>
                  <div class="ant-row ant-form-item">
                    <div class="ant-form-item-control-wrapper">
                      <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                          <button class="btn btn-secondary btn-lg btn-block"
                          onClick={this.onSubmit}>
                            se connecter
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {loader ? <div className="gx-loader-view"></div> : null}
                  {showMessage ? message.error(alertMessage.toString()) : null}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignIn;
