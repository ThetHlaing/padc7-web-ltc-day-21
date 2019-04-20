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
    this.imageFile = React.createRef();
  }

  handleOnChange = event => {
    this.setState({
      new_message: event.target.value
    });
    firestore.collection('setting')
      .doc('typing')
      .update({ status: true });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ new_message: "" });
    if (this.state.new_message !== "") {
      firestore.collection('message')
        .add({
          content: this.state.new_message,
          created_by: this.props.user.email,
          created_at: new Date()
        });
    }

  }

  handleStartTyping = () => {
    firestore.collection('setting')
      .doc('typing')
      .update({ status: true });
  }

  handleStopTyping = () => {
    firestore.collection('setting')
      .doc('typing')
      .update({ status: false });
  }

  handleFileOnChange = (event) => {
    const file = this.imageFile.current.files[0];
    var storageRef = firebase.storage().ref();

    const filePath = 'message/images/' + file.name;
    const imageRef = storageRef.child(filePath);

    imageRef
      .put(file)
      .then(snapshot => {
        console.log(snapshot)
        storageRef.child(filePath)
        .getDownloadURL().then( (url) => {
          firestore.collection('message')
          .add({
            image: url,
            created_by: this.props.user.email,
            created_at: new Date()
          });
        })
      })
      .catch(error => { console.log(error) });

  }

  render() {

    return (
        <form className="newMessageForm" onSubmit={this.handleOnSubmit}>
          <input placeholder="your message here"
            onBlur={this.handleStopTyping}
            onChange={this.handleOnChange}
            value={this.state.new_message}>
          </input>
          <button type="submit">Sent</button>
        </form>        
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(mapStateToProps)(NewMessageForm);