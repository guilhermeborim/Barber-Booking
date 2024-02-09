import userActionTypes from './action-types'

export const userLogin = (payload: any) => ({
  type: userActionTypes.USER_LOGIN,
  payload,
})

export const userLoading = (payload: boolean) => ({
  type: userActionTypes.USER_LOADING,
  payload,
})

export const responseBarbers = (payload: any) => ({
  type: userActionTypes.GET_BARBERS,
  payload,
})
