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
  
  render() {
    return (
      <div className="uploadHolder">
        <input ref={this.imageFile} onChange={this.handleFileOnChange} type="file" accept="image/*" />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(mapStateToProps)(ImageUpload);