import React, { Component } from "react";
import {
  Button,
  Card,
  Tag,
  Divider,
  Form,
  Icon,
  Input,
  AutoComplete,
  notification,
  message,
  Popconfirm,
  Col,
  Row,
  Spin,
  Rate
} from "antd";
import axios from "axios";
import CircularProgress from "components/CircularProgress/index";
import star from "../../assets/images/star.svg.png";

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    md: { span: 16 },
    lg: { span: 12 }
  }
};
const Hotel = props => (
  <tr className="ant-table-row ant-table-row-level-0">
    <td className="ant-table-row-cell-break-word" width="90" align="center">
    <Rate style={{
      fontSize:"13px"
    }} disabled defaultValue={props.hotel.Etoiles}/>
      {
      /*{props.hotel.Etoiles === 1 ? (
        <img src={star} width="20px" height="20px" alt="star" />
      ) : (
        <p></p>
      )}
      {props.hotel.Etoiles === 2 ? (
        <p>
          {" "}
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
        </p>
      ) : (
        <p></p>
      )}
      {props.hotel.Etoiles === 3 ? (
        <p>
          {" "}
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
        </p>
      ) : (
        <p></p>
      )}
      {props.hotel.Etoiles === 4 ? (
        <p>
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
        </p>
      ) : (
        <p></p>
      )}
      {props.hotel.Etoiles === 5 ? (
        <p>
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
          <img src={star} width="20px" height="20px" alt="star" />
        </p>
      ) : (
        <p></p>
      )}*/}
    </td>
    <td className="ant-table-row-cell-break-word" align="center" width="150">
      {props.hotel.NOM}
    </td>
    <td className="ant-table-row-cell-break-word" align="center" width="100">
      {props.hotel.Emplacement}
    </td>
    <td className="ant-table-row-cell-break-word" align="center">
      {props.hotel.Places}
    </td>
    <td className="ant-table-row-cell-break-word" width="90" align="center">
      {props.hotel.Places}
    </td>
    <td className="ant-table-row-cell-break-word" width="90" align="center">
      {props.hotel.Prix}
    </td>
    <td class="gx-link" width="90" align="center">
      {props.hotel.Lien}
    </td>

    <td align="center">
      <Divider orientation="left">
        <Popconfirm
          title="Voulez vous vraiment supprimer cet hotel ?"
          onConfirm={() => {
            props.deleteHotel(props.hotel._id);
          }}
          onCancel={cancel}
          okText="Oui"
          cancelText="Non"
        >
          <Button type="danger" size="small">
            <i className="icon icon-trash" />
          </Button>
        </Popconfirm>
        <Button type="primary" size="small">
          {" "}
          <i className="icon icon-edit" />{" "}
        </Button>
        <Button type="dashed" size="small">
          {" "}
          <i className="icon icon-check-square" />
        </Button>
      </Divider>
    </td>
  </tr>
);
const cancel = e => {
  console.log(e);
  message.error('Vous avez cliqué sur "Non"');
};

class HotelsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeEtoiles = this.onChangeEtoiles.bind(this);
    this.onChangeNOM = this.onChangeNOM.bind(this);
    this.onChangeEmplacement = this.onChangeEmplacement.bind(this);
    this.onChangePlaces = this.onChangePlaces.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    this.onChangeLien = this.onChangeLien.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteHotel = this.deleteHotel.bind(this);
    this.state = {
      hotels: [],
      Etoiles: "1",
      NOM: "",
      Emplacement: "",
      Places: "",
      Prix: "",
      Lien: "",
      isLoading: true
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5001/adminSide/hotel-list/")
      .then(response => {
        this.setState({ hotels: response.data });
      })
      .catch(error => {
        console.log("error !! " + error);
      });
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 5000);
    }
  }
  HotelList() {
    {
      return this.state.hotels.map(currenthotel => {
        return (
          <Hotel
            hotel={currenthotel}
            key={currenthotel._id}
            deleteHotel={this.deleteHotel}
          />
        );
      });
    }
  }
  myFunction = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
    var x = document.getElementById("user");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  onChangeEtoiles(e) {
    this.setState({
      Etoiles: e.target.value
    });
  }
  onChangeNOM(e) {
    this.setState({
      NOM: e.target.value
    });
  }
  onChangeEmplacement(e) {
    this.setState({
      Emplacement: e.target.value
    });
  }
  onChangePlaces(e) {
    this.setState({
      Places: e.target.value
    });
  }
  onChangePrix(e) {
    this.setState({
      Prix: e.target.value
    });
  }
  onChangeLien(e) {
    this.setState({
      Lien: e.target.value
    });
  }
  openNotificationWithIcon = type => {
    notification[type]({
      message: "Hotel ajoué avec succés"
    });
  };
  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        const hotel = {
          Etoiles: this.state.Etoiles,
          NOM: this.state.NOM,
          Emplacement: this.state.Emplacement,
          Places: this.state.Places,
          Prix: this.state.Prix,
          Lien: this.state.Lien
        };
        console.log(hotel);
        axios
          .post("http://localhost:5001/adminSide/addHotel", hotel)
          .then(res => console.log(res.data));
        this.openNotificationWithIcon("success");
        this.props.history.push("/hotels/hotels-list");
      }
    });
  }
  deleteHotel(id) {
    axios
      .delete("http://localhost:5001/adminSide/delete-hotel/" + id)
      .then(response => {
        console.log(response.data);
      })
      .then(response => message.success("hotel supprimé avec succés"));
    this.setState({
      hotels: this.state.hotels.filter(el => el._id !== id)
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="Liste des Hotels">
        <Button
          type="dashed"
          className="gx-link gx-btn-link gx-ml-2"
          onClick={this.myFunction}
        >
          Ajouter une convention{" "}
          <Icon type={this.state.expand ? "up" : "down"} />
        </Button>
        <div id="user" style={{ display: "none" }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item {...formItemLayout}
              label="Etoiles"
              hasFeedback
              value={this.state.Etoiles}
              onChange={this.onChangeEtoiles}
            
            >
              {getFieldDecorator("Etoiles", {
                rules: [
                  {
                    //required: true,
                    message: "Champs obligatoire"
                  }
                ]
              })(<Input style={{ width: "50%" }} placeholder="Etoiles" />)}
            </Form.Item>
         

            <FormItem
              {...formItemLayout}
              hasFeedback
              label="Nom"
              value={this.state.NOM}
              onChange={this.onChangeNOM}
            >
              {getFieldDecorator("Nom", {
                rules: [
                  {
                    required: true,
                    message: "Champs obligatoire"
                  }
                ]
              })(<AutoComplete style={{ width: "50%" }} placeholder="Nom" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="Emplacement"
              value={this.state.Emplacement}
              onChange={this.onChangeEmplacement}
            >
              {getFieldDecorator("Emplacement", {
                rules: [
                  {
                    required: true,
                    message: "Champs obligatoire"
                  }
                ]
              })(<Input placeholder="Emplacement" style={{ width: "50%" }} />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="Places disponibles"
              value={this.state.Places}
              onChange={this.onChangePlaces}
            >
              {getFieldDecorator("Places", {
                rules: [
                  {
                    required: true,
                    message: "Champs obligatoire"
                  }
                ]
              })(
                <Input
                  placeholder="Places"
                  type="number"
                  style={{ width: "50%" }}
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="Tarif /nuité"
              value={this.state.Prix}
              onChange={this.onChangePrix}
            >
              {getFieldDecorator("Prix", {
                rules: [
                  {
                    required: true,
                    message: "Champs obligatoire"
                  }
                ]
              })(<Input placeholder="Prix" style={{ width: "50%" }} />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="Site Wieb"
              value={this.state.Lien}
              onChange={this.onChangeLien}
            >
              {getFieldDecorator("Lien", {
                rules: [
                  {
                    required: true,
                    message: "Champs obligatoire"
                  }
                ]
              })(<Input placeholder="Lien" style={{ width: "50%" }} />)}
            </FormItem>
          </Form>

          <div class="vertical-center">
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.onSubmit}
              align="center"
            >
              Ajouter
            </Button>
          </div>
        </div>
        <div>
          <table className="table">
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-row-cell-break-word">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Etoiles
                      </span>
                    </div>
                  </span>
                </th>
                <th className="ant-table-row-cell-break-word">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Nom
                      </span>
                    </div>
                  </span>
                </th>
                <th className="ant-table-row-cell-break-word">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Emplacement
                      </span>
                    </div>
                  </span>
                </th>
                <th className="ant-table-row-cell-break-word">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Places disponibles
                      </span>
                    </div>
                  </span>
                </th>
                <th className="ant-table-row-cell-break-word">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        durée disponibilité
                      </span>
                    </div>
                  </span>
                </th>
                <th className="">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Tarif
                      </span>
                    </div>
                  </span>
                </th>
                <th className="">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Plus de details
                      </span>
                    </div>
                  </span>
                </th>

                <th className="ant-table-row-cell-last" align="center">
                  <span className="ant-table-header-column">
                    <div>
                      <span className="ant-table-column-title" align="center">
                        Actions
                      </span>
                    </div>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.isLoading ? <CircularProgress /> : this.HotelList()}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }
}

export default Form.create()(HotelsList);
