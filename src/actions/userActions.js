import firebase from '../utilities/firebase';

// export const fetchUsers = () => dispatch => {

//   const userData = firestore.collection('users').get();
//   userData.then( (snapshot) => {
//     const users = [];
//     snapshot.docs.forEach( item => {
//       const user = item.data();
//       user.id = item.id;
//       users.push(user);
//     });
//     console.log('Users',users);
//     dispatch({
//       type: 'FETCH_USERS',
//       payload: users
//     });
//   });

// };

// export const insertUser = (user, cb) => dispatch => {
//   firestore.collection('users').add(user).then( (data) => {
//     user.id = data.id;
//     dispatch({
//       type: 'ADD_NEW_USER',
//       user: user
//     });

//     cb();
//   })


// };


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