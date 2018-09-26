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
        phone: "",
        comment: ""
      },
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleChange (event) {
    this.setState( [event.target.name], event.target.value )
  }

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handlePhone(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          phone: value
        }
      }),
     () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          comment: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name:"",
        phone:"",
        comment:""
      }
    })
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
      () => console.log(this.state.newUser)
    );
  }

  
  handleFormSubmit(e) {
    e.preventDefault();
    //this.refs.form.reset();
    let userData = this.state.newUser;
console.log(userData);

    fetch("/api/contact", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userData),
      headers: {"Content-Type": "application/json"}, 
  })
  .then(response => response.json())
    
  .then(data => {console.log("Successful", data)})
  }
    
    //function(error) {
        //console.log(error.message);
    //}
  
  
    
  render() {
    return (
      <form className="container-fluid" onSubmit={(e) => this.handleFormSubmit(e)}>
      
        <h1>Contact Us</h1>
        <Input
          inputtype={"text"}
          title={"Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          onChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputtype={"text"}
          name={"phone"}
          title={"Phone Number"}
          value={this.state.newUser.phone}
          placeholder={"Enter your phone number"}
          onChange={this.handleInput}
        />{" "}
        {/* PhoneNumber */}
        <TextArea
          title={"Comment"}
          rows={10}
          value={this.state.newUser.comment}
          name={"comment"}
          handleChange={this.handleInput}
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
