import React from 'react';
import './ImageUpload.css';
import firebase from '../../../utilities/firebase';
import { connect } from 'react-redux';

const firestore = firebase.firestore();
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.imageFile = React.createRef();
  }

  addMessage = (url) => {
    firestore.collection('message')
      .add({
        image: url,
        created_by: this.props.user.email,
        created_at: new Date()
      });
  }

  handleFileOnChange = () => {
    const file = this.imageFile.current.files[0];
    var storageRef = firebase.storage().ref();

    const filePath = 'message/images/' + file.name;
    const imageRef = storageRef.child(filePath);

    imageRef
      .put(file)
      .then(() => {
        storageRef.child(filePath)
          .getDownloadURL().then(this.addMessage)

      })
      .catch(error => { console.log(error) });

  }

  render() {
    return (
      <div className="uploadHolder">
        <input
          ref={this.imageFile}
          onChange={this.handleFileOnChange}
          type="file" accept="image/*" />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(mapStateToProps)(ImageUpload);