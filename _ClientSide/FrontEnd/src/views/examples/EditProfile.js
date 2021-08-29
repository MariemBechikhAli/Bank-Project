 
 
import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
function EditProfile() {
  React.useEffect(() => {
  });
  const onSubmit = (evt) => {
    evt.preventDefault();
   window.location = "/register-page";
  }
  return (
    <>
    <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h3>Veuillez svp completer la configuration de votre compte</h3>
          </div>
          <Col align="middle">
          <Col sm="3">
              <InputGroup>
                <Input placeholder="Demo" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-circle-10" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>
            <Col sm="3">
              <InputGroup>
                <Input placeholder="demo@x.tn" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-email-85" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>
            <Col sm="3">
              <InputGroup>
                <Input placeholder="12345678" type="password" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-credit-card" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>
           
            <Col sm="3">
              <InputGroup>
                <Input placeholder="RIB ..." type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-bank" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>
            <Col sm="3">
              <InputGroup>
                <Input placeholder="Numéro téléphonique" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-bell-55" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>

            <Col sm="3">
              <InputGroup>
                <Input placeholder="Etat matrimoniale" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>

            <Col sm="3">
              <InputGroup>
                <Input placeholder="Nbre enfants" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-badge" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>
            <Col sm="3">
              <InputGroup>
                <Input placeholder="Agence" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="nc-icon nc-bank" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            < br/>
            <Button block className="btn-round" color="danger" onClick={onSubmit}>
                 Valider
                  </Button>
          </Col>
          <br />
        
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default EditProfile;