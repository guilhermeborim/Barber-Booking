import userActionTypes from './action-types'

const initialState = {
  currentUser: null,
  loading: false,
  barbers: [],
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userActionTypes.USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      }
    case userActionTypes.USER_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case userActionTypes.GET_BARBERS:
      return {
        ...state,
        barbers: action.payload,
      }
    default: {
      return state
    }
  }
}

export default userReducer
