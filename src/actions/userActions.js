import firebase from '../utilities/firebase';

export const registerUserEvent = (
  email,
  password,
  successEvent,
  errorEvent
) => dispatch => {
  firebase.auth()
    .createUserWithEmailAndPassword(
      email,
      password
    )
    .then(data => {
      console.log(data.user);
      dispatch({
        type: "LOGIN",
        user: data.user
      });
      successEvent();
    })
    .catch(error => {
      errorEvent(error);
    });
}

export const loginUserEvent = (
  email,
  password,
  successEvent,
  errorEvent
) => dispatch => {
  firebase.auth()
    .signInWithEmailAndPassword(
      email,
      password
    )
    .then(data => {
      console.log(data.user);
      dispatch({
        type: "LOGIN",
        user: data.user
      });
      successEvent();
    })
    .catch(error => {
      errorEvent(error);
    });
}

export const signOutEvent = () => dispatch => {
  firebase.auth().signOut().then(() => {
    dispatch({
      type: 'LOGOUT'
    });
  })
}