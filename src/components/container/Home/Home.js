import React from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import firebase from '../../../utilities/firebase';
import { connect } from 'react-redux';
import MessageItem from '../../presentional/MessageItem';
import TypingIndicator from '../../presentional/TypingIndicator';

import ImageUpload from '../ImageUpload';
import NewMessageForm from '../NewMessageForm';

const firestore = firebase.firestore();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      settings: []
    }   
  }


  render() {
    const is_typing = this.state.settings['typing'] && this.state.settings['typing'].status;
    return (
      <React.Fragment>
        {!this.props.user && <Redirect to="/login"/>}
        <div className="messagesHolder">

            <div id="messageEnd" ref={(el) => { this.messagesEnd = el; }}></div>
        </div>

        {is_typing && (this.state.new_message === '') && (
          <TypingIndicator></TypingIndicator>
        )
        }
        
          <React.Fragment>
            <NewMessageForm></NewMessageForm>
            <ImageUpload></ImageUpload>
          </React.Fragment>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(mapStateToProps)(Home);
