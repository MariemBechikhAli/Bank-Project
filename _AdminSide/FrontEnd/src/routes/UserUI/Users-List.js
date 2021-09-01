import React from "react";
import { Button, Card, Tag, Divider, Form, Icon, Input, Row, Table } from "antd";
import { CheckCircleOutlined, } from '@ant-design/icons';
import axios from "axios";
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
const columns = [
    {
        title: 'CIN',
        dataIndex: 'CIN',
        key: 'CIN',
        width: 8,
        render: text => <span className="gx-link">{text}</span>,
    }, {
        title: 'Nom complet',
        dataIndex: 'name',
        key: 'name',
        width: 10,
        render: text => <span className="gx-link">{text}</span>,
    }, {
        title: 'Date de naissance',
        dataIndex: 'age',
        key: 'age',
        width: 10,
    }, {
        title: 'Telephone',
        dataIndex: 'phone',
        key: 'phone',
        width: 10,
    }, , {
        title: 'RIB',
        dataIndex: 'RIB',
        key: 'RIB',
        width: 10,
    }, {
        title: 'Agence',
        dataIndex: 'Agence',
        key: 'Agence',
    }, {
        title: 'Etat du compte',
        key: 'State',
        render: text => <Tag icon={<CheckCircleOutlined />} color="#87d068">Valide</Tag>
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Divider orientation="left">
                <Button type="danger"> <i className="icon icon-trash" /> </Button>
                <Button type="primary"> <i className="icon icon-edit" /> </Button>
                <Button type="dashed"> <i className="icon icon-check-square" /></Button>


            </Divider>),
    }];


const Personnel = props => (
 
  <tr class="ant-table-row ant-table-row-level-0" >
    <td class="ant-table-row-cell-break-word" width="90"  align="center" >
            <span class="gx-link">{props.personnel.CIN}</span>
          </td>
   
    <td class="ant-table-row-cell-break-word"  align="center" >{props.personnel.NOM}</td>
    <td class="ant-table-row-cell-break-word"  align="center" >{props.personnel.Post}</td>
    <td class="ant-table-row-cell-break-word"  align="center" >{props.personnel.Numero_telephonique}</td>
    <td class="ant-table-row-cell-break-word" width="90"  align="center" >{props.personnel.RIB}</td>
    <td class="ant-table-row-cell-break-word" width="90" align="center" >{props.personnel.Agence}</td>
    <td  align="center" >
      <div>
       { props.personnel.Valide  ?    
         <Tag  color="#87d068"> Valide</Tag>
        :
        <Tag  color="#EC7063"> Non-valide</Tag>}
      </div>
    
       </td>
    <td  align="center" > <Divider orientation="left">
                <Button type="danger"> <i className="icon icon-trash" /> </Button>
                <Button type="primary"> <i className="icon icon-edit" /> </Button>
                <Button type="dashed"> <i className="icon icon-check-square" /></Button>


            </Divider></td>
  </tr>
);


const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { personnels: [] };
    }
    state = {
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        expandedRowRender,
        title: undefined,
        showHeader,
        footer: undefined,
        scroll: undefined,

      

    };
    componentDidMount() {
        axios
            .get('http://localhost:5001/adminSide/personel-list/')
            .then(response => {
                this.setState({ personnels: response.data });
            })
            .catch(error => {
                console.log("error !! " + error);
            });
    }
    personnelList() {
        return this.state.personnels.map(currentpersonnel => {
            return <Personnel personnel={currentpersonnel} key={currentpersonnel._id} />;
        })
    }
    handlePaginationChange = (e) => {
        const { value } = e.target;
        this.setState({
            pagination: value === 'none' ? false : { position: value },
        });
    };
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
    render() {
        const { getFieldDecorator } = this.props.form;
        const state = this.state;
        return (
            <Card title="Liste de Personnels">
                <div className="components-table-demo-control-bar">
                </div>
                <Button
                    type="dashed"
                    className="gx-link gx-btn-link gx-ml-2"
                    onClick={this.myFunction}
                >
                    Ajouter un personnel <Icon type={this.state.expand ? "up" : "down"} />
                </Button>
                <div id="user" style={{ display: "none" }}>
                    <Form onSubmit={this.onSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="CIN"
                            hasFeedback
                            value={this.state.CIN}
                            onChange={this.onChangeCIN}
                        >
                            {getFieldDecorator("CIN", {
                                rules: [{ required: false }]
                            })(<TextArea placeholder="CIN" />)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            hasFeedback
                            label="E-mail"
                            value={this.state.contentCode}
                            onChange={this.onChangeContentCode}
                        >
                            {getFieldDecorator("E-mail", {
                                rules: [{ required: false }]
                            })(<TextArea placeholder="E-mail" />)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            hasFeedback
                            label="Nom complet"
                            value={this.state.contentCode}
                            onChange={this.onChangeContentCode}
                        >
                            {getFieldDecorator("Nom complet", {
                                rules: [{ required: false }]
                            })(<TextArea placeholder="Nom complet" />)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            hasFeedback
                            label="Poste occupé"
                            value={this.state.Poste}
                            onChange={this.onChangePoste}
                        >
                            {getFieldDecorator("Poste occupé", {
                                rules: [{ required: false }]
                            })(<TextArea placeholder="Poste occupé" />)}
                        </FormItem>
                    </Form>
                    <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                        Ajouter
                    </Button>
                </div>
                <div>
                <table className="table">
                <thead class="ant-table-thead">
        <tr>
          <th class="ant-table-row-cell-break-word">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">CIN</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="ant-table-row-cell-break-word">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">Nom complet</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="ant-table-row-cell-break-word">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">Poste</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="ant-table-row-cell-break-word">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">Telephone</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="ant-table-row-cell-break-word">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">RIB</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">Agence</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">Etat du compte</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
          <th class="ant-table-row-cell-last" align="center">
            <span class="ant-table-header-column">
              <div>
                <span class="ant-table-column-title" align="center">Action</span>
                <span class="ant-table-column-sorter"></span>
              </div>
            </span>
          </th>
        </tr>
      </thead>
          <tbody>
            { this.personnelList() }
          </tbody>
        </table>
                </div>
               </Card>
        );
    }
}

export default Form.create()(UsersList);
