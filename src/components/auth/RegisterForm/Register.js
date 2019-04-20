import React from 'react';
import './Register.css';
import firebase from '../../../utilities/firebase';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { registerUserEvent } from '../../../actions/userActions';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: {},
            login: false
        }
        this.email = React.createRef();
        this.password = React.createRef();
    }

    successLogin = () => {
        this.setState({
            login: true
        })
    }
    errorLogin = (error) => {
        this.setState({
            error: error
        })
    }
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.registerUserEvent(
            this.email.current.value,
            this.password.current.value,
            this.successLogin,
            this.errorLogin
        );
    }

    render() {
        return (
            <form className="sign-in-form" onSubmit={this.handleOnSubmit}>
                {this.state.login && <Redirect to="/"></Redirect>}
                {this.state.error.message && (<div> class="sign-in-error">{this.state.error.message}</div>)}
                <label>Email</label><input type="email" required ref={this.email} /><br />
                <label>Password</label><input type="password" required ref={this.password} /><br />                
                <button type="submit">Register</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    registerUserEvent
}

export default connect(null, mapDispatchToProps)(Register);