import React, { Component } from "react";
import { Form, Col, Row, message } from "antd";
import "./bg_register.css";
import land from "../../assets/img/login-image2.png";
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
      setLoginState:true,
      _id:"",
      Valide:""
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
      
         if(res.data.Personel === false)
       { console.log("invalid")
        window.location='/edit-profile'
      }
else{
  console.log("valid")
 window.location='/index'
}

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
              width: "30%",
              height: "100%",
              margin: "0",
            }}
          >
            <img width="550px" height="700px" src={land} alt="Bank" />
          </Col>
          <Col
            style={{
              width: "50%",
              height: "100%",
            }}
          >
            <Row>
              <h1
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontFamily:"Georgia, serif"
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
                   <br />   <br />   <br />   <br />   <br />  
                <form align="middle" className="">
                  <div className="">
                    <div className="input-group">
                      <label style={{ color: "white", width: "100px", fontWeight:"600",
                       fontFamily:"cursive",
                       fontSize:"15px"}}>
                        Email
                      </label>
                      <input
                      style={{ width: "250px"}}
                        placeholder="demo@exemple.tn"
                        type="text"
                        className="form-control"
                        value={this.state.Email}
                        onChange={this.onChangeEmail}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i
                            aria-hidden="true"
                            className="nc-icon nc-email-85"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="">
                    <div className="input-group">
                      <label style={{ color: "white", width: "100px" , fontWeight:"600", fontFamily:"cursive",
                       fontSize:"15px"}}>
                        Password
                      </label>
                      <input
                        style={{ width: "250px"}}
                        placeholder="password"
                        type="password"
                        className="form-control"
                        value={this.state.Password}
                        onChange={this.onChangePassword}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i aria-hidden="true" className="nc-icon nc-key-25"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                </form>
                <div className="ant-row ant-form-item">
                  <div className="ant-form-item-control-wrapper">
                    <div className="ant-form-item-control">
                      <span className="ant-form-item-children">
                        <button className="btn-lg" style={{
                          backgroundColor:"#AD4A52",
                          color:"white",
                          fontFamily:"serif",
                          fontWeight:"500",
                          fontSize:"19px",
                          margin:"0",
                         position: "absolute",
                         top: "62%",
                         left: "58%",
                         width:"290px"
                        }}
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
