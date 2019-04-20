const currentUser = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_TYPING_STATE':
            return action.status;
        default:
            return state;
    }
}


export default currentUser;