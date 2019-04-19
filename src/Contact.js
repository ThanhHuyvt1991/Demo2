import React from "react";
import "./App.css";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Let's contact to {this.props.name}</h1>
        <h2>{this.props.thongtin}</h2>
        <h2>{this.props.address}</h2>
      </div>
    );
  }
}
Contact.defaultProps = {
  name: "huy"
};
export default Contact;
