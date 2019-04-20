import React from 'react';
import './NewMessageForm.css';
import ImageUpload from '../ImageUpload'
import firebase from '../../../utilities/firebase';
import { connect } from 'react-redux';

const firestore = firebase.firestore();
class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_message: ''
    }
  }

  render() {

    return (
        <form className="newMessageForm">
          <input placeholder="your message here"></input>
          <button type="submit">Sent</button>
        </form>        
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(mapStateToProps)(NewMessageForm);