import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: {
    //             value: ''
    //         },
    //         username: {
    //             value: ''
    //         },
    //         email: {
    //             value: ''
    //         },
    //         password: {
    //             value: ''
    //         }
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
    //     this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
    //     this.isFormInvalid = this.isFormInvalid.bind(this);
    // }

    // handleInputChange(event, validationFun) {
    //     const target = event.target;
    //     const inputName = target.name;        
    //     const inputValue = target.value;

    //     this.setState({
    //         [inputName] : {
    //             value: inputValue,
    //             ...validationFun(inputValue)
    //         }
    //     });
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    
    //     const signupRequest = {
    //         name: this.state.name.value,
    //         email: this.state.email.value,
    //         username: this.state.username.value,
    //         password: this.state.password.value
    //     };
    //     signup(signupRequest)
    //     .then(response => {
    //         notification.success({
    //             message: '',
    //             description: "Thank you! You're successfully registered. Please Login to continue!",
    //         });          
    //         this.props.history.push("/login");
    //     }).catch(error => {
    //         notification.error({
    //             message: '',
    //             description: error.message || 'Sorry! Something went wrong. Please try again!'
    //         });
    //     });
    // }

    render() {
        return (
            <div className="signup-container">
                <h1 className="page-title">Sign Up</h1>
                <div className="signup-content">
                    <form className="signup-form">
                        <form 
                            label="Full Name"
                            >
                            <input 
                                size="large"
                                name="name"
                                autoComplete="off"
                                placeholder="Your full name"
                                />    
                        </form>
                        <form label="Username">
                            <input 
                                size="large"
                                name="username" 
                                autoComplete="off"
                                placeholder="A unique username"
                                />    
                        </form>
                        <form 
                            label="Email">
                            <input 
                                size="large"
                                name="email" 
                                type="email" 
                                autoComplete="off"
                                placeholder="Your email"/>    
                        </form>
                        <form 
                            label="Password">
                            <input 
                                size="large"
                                name="password" 
                                type="password"
                                autoComplete="off"
                                placeholder="A password between 6 to 20 characters"/>    
                        </form>
                        <form>
                            <button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                className="signup-form-button"
                                >Sign up</button>
                            Already registed? <Link to="/login">Login now!</Link>
                        </form>
                    </form>
                </div>
            </div>
        );
    }

}

export default Signup;
