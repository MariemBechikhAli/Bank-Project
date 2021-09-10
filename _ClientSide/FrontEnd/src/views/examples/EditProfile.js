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
import { Icon, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
    this.onChangeRIB = this.onChangeRIB.bind(this);
    this.onChangeAgence = this.onChangeAgence.bind(this);
    this.onChangeNumero_telephonique = this.onChangeNumero_telephonique.bind(this);
    this.onChangeNbre_enfants = this.onChangeNbre_enfants.bind(this);
    this.onChangeEtat_matrimoniale = this.onChangeEtat_matrimoniale.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      CIN: "",
      Email: "",
      NOM: "",
      Post: "",
      Password: "",
      RIB: "",
      Agence: "",
      Numero_telephonique: "",
      Nbre_enfants: "",
      Etat_matrimoniale: "",
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:6001/clientSide/6139d418108c9e427e78c1d1`)
      //,this.props.match.params.id)

      .then((response) => {
        this.setState({
          _id: response.data._id,
          CIN: response.data.CIN,
          Email: response.data.Email,
          NOM: response.data.NOM,
          Post: response.data.Post,
          Password: response.data.Password,
          RIB: response.data.RIB,
          Agence: response.data.Agence,
          Numero_telephonique: response.data.Numero_telephonique,
          Nbre_enfants: response.data.Nbre_enfants,
          Etat_matrimoniale: response.data.Etat_matrimoniale,
        });
        console.log("data " + response.data);
        console.log(this.props);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onChangeCIN(e) {
    this.setState({
      CIN: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }
  onChangeNom(e) {
    this.setState({
      NOM: e.target.value,
    });
  }
  onChangePoste(e) {
    this.setState({
      Post: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      Password: e.target.value,
    });
  }
  onChangeRIB(e) {
    this.setState({
      RIB: e.target.value,
    });
  }
  onChangeAgence(e) {
    this.setState({
      Agence: e.target.value,
    });
  }
  onChangeNumero_telephonique(e) {
    this.setState({
      Numero_telephonique: e.target.value,
    });
  }
  onChangeNbre_enfants(e) {
    this.setState({
      Nbre_enfants: e.target.value,
    });
  }
  onChangeEtat_matrimoniale(e) {
    this.setState({
      Etat_matrimoniale: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const personnel = {
      NOM: this.state.NOM,
      Email: this.state.Email,
      CIN: this.state.CIN,
      Post: this.state.Post,
      Password: this.state.Password,
      RIB: this.state.RIB,
      Agence: this.state.Agence,
      Numero_telephonique: this.state.Numero_telephonique,
      Nbre_enfants: this.state.Nbre_enfants,
      Etat_matrimoniale: this.state.Etat_matrimoniale,
    };

    console.log(personnel);
    axios
      .put(
        "http://localhost:6001/clientSide/update-personel/6139d418108c9e427e78c1d1",
        personnel
      )
      .then((res) => console.log("Updated succssefuly ! " + res.data));

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
            <Col style={{ width: "40%", height: "100%", margin: "0" }}>
              <img
                style={{ borderRadius: "10px" }}
                width="550px"
                height="900px"
                src={land}
                alt="Bank"
              />
            </Col>
            <Col style={{ width: "40%", height: "100%", margin: "0" }}>
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
                      <Input
                        placeholder="Demo"
                        type="text"
                        value={this.state.NOM}
                        onChange={this.onChangeNom}
                      />
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
                      <Input
                        placeholder="demo@x.tn"
                        type="text"
                        readOnly="true"
                        value={this.state.Email}
                        onChange={this.onChangeEmail}
                      />
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
                      <Input
                        type="number"
                        readOnly="true"
                        value={this.state.CIN}
                        onChange={this.onChangeCIN}
                      />
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
                      <Input
                        type="text"
                        // value={this.state.Password}
                        onChange={this.onChangePassword}
                        placeholder="Nouveau mot de passe"
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i aria-hidden={true} className="nc-icon nc-key-25" />
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
                      <Input
                        value={this.state.Post}
                        onChange={this.onChangePoste}
                        type="text"
                      />
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
                      <Input
                        type="text"
                        value={this.state.Agence}
                        onChange={this.onChangeAgence}
                      />
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
                      RIB
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input
                        type="text"
                        value={this.state.RIB}
                        onChange={this.onChangeRIB}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-single-copy-04"
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
                      Numéro téléphonique{" "}
                    </label>
                  </Col>
                  <Col sm="5">
                    <InputGroup>
                      <Input
                        placeholder="Numéro téléphonique"
                        type="number"
                        value={this.state.Numero_telephonique}
                        onChange={this.onChangeNumero_telephonique}
                      />
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
                      <Input
                        placeholder="Etat matrimoniale"
                        type="text"
                        value={this.state.Etat_matrimoniale}
                        onChange={this.onChangeEtat_matrimoniale}
                      />
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
                      <Input
                        placeholder="Nbre enfants"
                        type="number"
                        value={this.state.Nbre_enfants}
                        onChange={this.onChangeNbre_enfants}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i aria-hidden={true} className="nc-icon nc-badge" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <br />
                <Row>
                <Col sm="4">
                    <label style={{ color: "white", fontWeight: "500" }}>
                    Extraits de naissances
                    </label>
                  </Col>
                  <Col sm="5">
                  <InputGroup> 
                  <div className="dropbox" style={{
                     backgroundColor : "white",
                     borderRadius: "5%",
                     lineHeight: "1.5"
                  }}>
                {
                  <Upload.Dragger
                    name="files"
                    action="/upload.do"
                    listType="picture"
                  >
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text" style={{
                    color : "black",
                    fontWeight: "500",
                    fontfamily: "Georgia",
                  }}>
                     Cliquez ou faites glisser le fichier dans cette zone pour le télécharger
                    </p>
                  </Upload.Dragger>
                  }
                  </div>
                  <InputGroupAddon addonType="append">
                       
                      </InputGroupAddon>
                      </InputGroup>
  
                  </Col>
                </Row>
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
