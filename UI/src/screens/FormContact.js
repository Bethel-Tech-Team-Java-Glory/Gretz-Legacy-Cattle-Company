import React, { Component } from "react";

/* Import Components */

import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

class FormContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        phoneNumber: "",
        comment: ""
      },
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      //() => console.log(this.state.newUser)
    );
  }

  handlePhoneNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          phoneNumber: value
        }
      }),
     //() => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      //() => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      //() => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    //this.refs.form.reset();
    let userData = this.state.newUser;

    fetch("http://localhost:8080/api/contact", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  //handleClearForm(e) {
    //e.preventDefault();
   // this.setState({
    //  newUser: {
     //   name: "",
     //   phoneNumber: "",
     //   comment: ""
    //  }
   // });
 // }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit.bind(this)}>
        <h1>Contact Us</h1>
        <Input
          inputType={"text"}
          title={"Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"phoneNumber"}
          title={"Phone Number"}
          value={this.state.newUser.age}
          placeholder={"Enter your phone number"}
          handleChange={this.handlePhoneNumber}
        />{" "}
        {/* PhoneNumber */}
        <TextArea
          title={"Comment"}
          rows={10}
          value={this.state.newUser.about}
          name={"comment"}
          handleChange={this.handleTextArea}
          placeholder={"Leave your comment here"}/>
        {/* Comment */}
        <Button 
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContact;
