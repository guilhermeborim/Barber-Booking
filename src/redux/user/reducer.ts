import userActionTypes from './action-types'

const initialState = {
  currentUser: null,
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userActionTypes.USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      }
    default: {
      return state
    }
  }
}

export default userReducer
