import { Card, Form } from "antd";
import React, { Component } from "react";

const {Meta} = Card;
class DetailsHotel extends Component {
 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Card hoverable
          cover={<img alt="hotel" src={`/HotelImages/hotel.jpg`}/>}
    >
      <Meta
        title="Europe Street beat"
        description="www.instagram.com"
      />
    </Card>
    );
  }
}

export default Form.create()(DetailsHotel);
