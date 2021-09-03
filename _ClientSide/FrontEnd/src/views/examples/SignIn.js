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
        <div className=" ">

          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row"
            }}>
            <Col
              style={{
                width: "40%",
                height:"100%",
                margin: "0"
              }}>
              <img
              
              width="550px"
              height="700px"
                src={land}
                alt="Bank"
              />
            </Col>
            <Col
              style={{
                width: "40%",
                height:"100%"
              }}>
              <Row>

                <h1 
                style={{
                  color:"white",
                  fontWeight:"500"
                }}
                >
                  Bienvenue Dans Votre Espace Personnel  </h1>
                  </Row>
              <div
                style={{ height: "100%", padding: "2%" }}
                className="gx-app-login-wrap"
              >
                <div
                  className="gx-app-login-container"
                  style={{
                    width: "fit-content",

                    marginRight: "auto"
                  }}
                >
                

                    <Form >
                      <br /><br />
                      <Col align="middle">

                        <Col >
                          <InputGroup>
                            <label
                            style={{
                              color:"white"
                            }}
                            >
                              Email
                            </label>
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
                            <label  style={{
                              color:"white",
                              
                            }}>
                              Password
                            </label>
                            <Input placeholder="Password" type="password" />
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


            </Col>

          </Row>
        </div>
      </div>
    );
  }
}

export default SignIn;
