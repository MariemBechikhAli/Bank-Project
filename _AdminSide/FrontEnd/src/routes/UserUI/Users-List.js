import React from "react";
import {Button, Card, Divider, Form, Icon, Input, Table} from "antd";

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
      },{
  title: 'Nom et Prenom',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <span className="gx-link">{text}</span>,
}, {
  title: 'Date de naissance',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'Telephone',
  dataIndex: 'phone',
  key: 'phone',
},{
    title: 'Agence',
    dataIndex: 'Agence',
    key: 'Agence',
  }, {
    title: 'Etat du compte',
    dataIndex: 'State',
    key: 'State',
  },{
  title: 'Action',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
     
      <span className="gx-link">Supprimer</span>
      <Divider type="vertical"/>
      <span className="gx-link">Modifier</span>
      <Divider type="vertical"/>
      <span className="gx-link">Desactiver</span>
      <Divider type="vertical"/>
      
      
      
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 1; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `24/12/1997`,
    CIN:`12345678`,
    phone: `000000`,
    Agence:`STB Raoued`,
    RIB:`123-15455555555`,
    State:`Activé`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {y: 240};
const pagination = {position: 'bottom'};

class UsersList extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandedRowRender,
    title: undefined,
    showHeader,
    footer: undefined,
    rowSelection: {},
    scroll: undefined,
  };

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({[prop]: enable});
    };
  };

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  };

  handleExpandChange = (enable) => {
    this.setState({expandedRowRender: enable ? expandedRowRender : undefined});
  };

  handleTitleChange = (enable) => {
    this.setState({title: enable ? title : undefined});
  };

  handleHeaderChange = (enable) => {
    this.setState({showHeader: enable ? showHeader : false});
  };

  handleFooterChange = (enable) => {
    this.setState({footer: enable ? footer : undefined});
  };

  handleRowSelectionChange = (enable) => {
    this.setState({rowSelection: enable ? {} : undefined});
  };

  handleScollChange = (enable) => {
    this.setState({scroll: enable ? scroll : undefined});
  };

  handlePaginationChange = (e) => {
    const {value} = e.target;
    this.setState({
      pagination: value === 'none' ? false : {position: value},
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
      <Card title="Liste de Personnel">
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
                  value={this.state.contentAnswer}
                  onChange={this.onChangeContentAnswer}
                >
                  {getFieldDecorator("CIN", {
                    rules: [{ required: false }]
                  })(<TextArea placeholder="CIN" />)}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  hasFeedback
                  label="Nom et Prenom"
                  value={this.state.contentCode}
                  onChange={this.onChangeContentCode}
                >
                  {getFieldDecorator("Nom et Prenom", {
                    rules: [{ required: false }]
                  })(<TextArea placeholder="Nom et Prenom" />)}
                </FormItem>
              </Form>
              <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                Ajouter
              </Button>
            </div>
        <Table className="gx-table-responsive" 
        {...this.state} columns={columns} dataSource={data}/>
      </Card>
    );
  }
}

export  default Form.create()( UsersList);
