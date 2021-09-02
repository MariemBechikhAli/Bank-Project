import React, { Component } from 'react';
import { Form, Col, Row, message } from 'antd';
import "./bg_register.css";
import land from "../../assets/img/login-image2.jpg";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
const FormItem = Form.Item;

class SignIn extends Component {

  render() {
    //const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="myreg gx-app-login-wrap">
        <div style={{ margin: "0 5%", justifyItems: "center" }} className=" ">
        <Row> <h1 className="mytitle">
                  Bienvenue Dans
                  <br />
                  Votre Espace Personnel
                </h1></Row>
                <br />
                <br />
                <br />
        <Row  gutter={[32, 48]}>
        <Col span={9}>    
        <div
                style={{ height: "auto", padding: "2%" }}
                className="gx-app-login-wrap"
              >
                <div
                  className="gx-app-login-container"
                  style={{
                    width: "fit-content",

                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#28aaeb21",
                      borderRadius: "30px"
                    }}
                    className="gx-app-login-main-content"
                  >
                   
                      <Form >
                      <br /><br />
                          <Col align="middle">

                            <Col >
                              <InputGroup>
                                <Input placeholder="demo@x.tn" type="text" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>
                                    <i aria-hidden={true} className="nc-icon nc-email-85" />
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </Col>
                            < br />
                            <Col >
                              <InputGroup>
                                <Input placeholder="12345678" type="password" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>
                                    <i aria-hidden={true} className="nc-icon nc-key-25" />
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </Col>
                            < br />

                          </Col>
                          <br />
                          <FormItem>
                            <Button color="secondary" size="lg" block>
                              SignIn
                            </Button>

                          </FormItem>
                      


                      </Form>
                  
                    {loader ? (
                      <div className="gx-loader-view">

                      </div>
                    ) : null}
                    {showMessage
                      ? message.error(alertMessage.toString())
                      : null}

                  </div>
                </div>
              </div>
            
            
        </Col>
        <Col  span={9}
           >
            
            <img
                style={{
                  width: "60%",

                  borderRadius: "30px"
                }}
                src={land}
                alt="Nature"
                className="responsive animation center"
              ></img>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignIn;
