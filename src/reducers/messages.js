const messages = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEW_MESSAGE':
        return [
          ...state,
          action.article          
        ];
      case 'FETCH_MESSAGES':
        return action.data      
      default:
        return state
    }
  }

  export default messages