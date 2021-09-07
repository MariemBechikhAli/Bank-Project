import React, { Component } from "react";
import land from "../../assets/img/bank.jpg";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import "./bg_register.css";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Card } from "antd";
import axios from "axios";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.onChangeCIN = this.onChangeCIN.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePoste = this.onChangePoste.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      CIN: "",
      Email: "",
      NOM: "",
      Post: "",
Password:""
    };
  }
  componentDidMount() {
    axios
    .get (
      `http://localhost:6001/clientSide/`+ this.props.match.params.id)
      //,this.props.match.params.id)
    
      .then(response => {
        this.setState({
          _id: response.data._id,
          CIN: response.data.CIN,
          Email: response.data.Email,
          NOM: response.data.NOM,
          Post: response.data.Post,
          Password: response.data.Password
        });
       console.log("data "+response.data);
     console.log(this.props)
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  onChangeCIN(e) {
    this.setState({
      CIN: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onChangeNom(e) {
    this.setState({
      NOM: e.target.value
    });
  }
  onChangePoste(e) {
    this.setState({
      Post: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }
 
  onSubmit(e) {
    e.preventDefault();

    const personnel = {
      NOM: this.state.NOM,
      Email: this.state.Email
    };

    console.log(personnel);
    axios
      .put("http://localhost:6001/clientSide/update-personel/"+this.props.match.params.id, personnel)
      .then(res => console.log(res.data));

      window.location = "/index";
    }
  render() {
    return (
      <>
        <div className="myreg gx-app-login-wrap">
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
              <img
                style={{
                  borderRadius: "10px",
                }}
                width="550px"
                height="650px"
                src={land}
                alt="Bank"
              />
            </Col>
            <Col
              style={{
                width: "40%",
                height: "100%",
                margin: "0",
              }}
            >
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "1000",
                    fontfamily: "Georgia",
                  }}
                >
                  Validation du Compte
                </h1>
              </div>
              <br />
              <Card align="middle">
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Nom Complet{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="Demo" type="text"  value={this.state.NOM}  
                      onChange={this.onChangeNom} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-circle-10"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Email{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="demo@x.tn" type="text" value={this.state.Email}  
                      onChange={this.onChangeEmail} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-email-85"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Numéro carte d'identité{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input type="number"
                       value={this.state.CIN}  
                       onChange={this.onChangeCIN} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-credit-card"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                     Changer votre mot de passe{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input type="text"
                       value={this.state.Password}  
                       onChange={this.onChangePassword} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-key-25"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Poste occupé
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input   value={this.state.Post}  
                       onChange={this.onChangePoste} 
                       type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i aria-hidden={true} className="nc-icon nc-bank" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Agence
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="Agence" type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i aria-hidden={true} className="nc-icon nc-bank" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      RIB{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="RIB ..." type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i aria-hidden={true} className="nc-icon nc-bank" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Numéro téléphonique{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="Numéro téléphonique" type="number" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-bell-55"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Etat matrimoniale{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="Etat matrimoniale" type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-single-02"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                      Nombre d'enfants{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input placeholder="Nbre enfants" type="number" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i aria-hidden={true} className="nc-icon nc-badge" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <br />
                <Row align="middle">
                  <Col sm="3"></Col>
                  <Col sm="5">
                    <Button color="secondary" block onClick={this.onSubmit}>
                      Valider
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <br />
          </Row>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default EditProfile;
