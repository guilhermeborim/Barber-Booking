import userActionTypes from './action-types'

export const userLogin = (payload: any) => ({
  type: userActionTypes.USER_LOGIN,
  payload,
})
