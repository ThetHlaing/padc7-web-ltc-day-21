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

    firestore.collection('message').onSnapshot(snapshot => {
      const messages = [];
      snapshot.docs.forEach(item => {
        const message = item.data();
        message.id = item.id;
        messages.push(message);
      })
      messages.sort(
        (a, b) => { return (a.created_at.seconds > b.created_at.seconds) ? 1 : -1 }
      );

      this.setState({
        messages: messages
      })
    })


    firestore.collection('setting').onSnapshot(snapshot => {
      const settings = [];
      snapshot.docs.forEach(item => {
        const setting = item.data();
        setting.id = item.id;
        settings[setting.id] = setting;
      })
      this.setState({
        settings: settings
      })
    });

  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const is_typing = this.state.settings['typing'] && this.state.settings['typing'].status;
    return (
      <React.Fragment>
        {!this.props.user && <Redirect to="/login"/>}
        <div className="messagesHolder">
            {this.state.messages.map(item => (
              <MessageItem key={item.id} message={item} />
            ))}
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
