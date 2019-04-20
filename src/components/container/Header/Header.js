import React from 'react';
import firebase from '../../../utilities/firebase';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="App">

                <h1><Link to="/">A simple chat app</Link></h1>

                {this.props.user ?
                    (
                        <span className="header-link">Sign Out</span>
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

export default connect(null,null)(Header);