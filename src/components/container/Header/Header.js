import React from 'react';
import firebase from '../../../utilities/firebase';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from "react-router-dom";
import { signOutEvent } from '../../../actions/userActions';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="App">

                <h1><Link to="/">A simple chat app</Link></h1>

                {this.props.user ?
                    (
                        <span className="header-link" onClick={this.props.signOutEvent}>Sign Out</span>
                    ) : (
                        <React.Fragment>
                            <Link to="/login">Sign In</Link> | <Link to="/register">Register</Link>
                            <br/>
                        </React.Fragment>
                    )
                }

                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
})

const mapDispatchToProps = {
    signOutEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);