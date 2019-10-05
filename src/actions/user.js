import { API_USER_VALID, API_GETINFORMATION_DETAIL } from '@constants/api'
import { createAction } from '@utils/redux'
import fetch from '@utils/request'
import Taro from '@tarojs/taro'

import { SET_USER, DELETE_USER, USER_DEFAULT } from '@constants/user'


/**
 * 更新用户 Storage
 * @param {*} userInfo
 */
export const setUserStorage = (user = {}) => {
  const oldUser = getUserStorage()

  user = { ...oldUser, ...user }
  Taro.setStorageSync('user_info', user)

  return user
}

/**
 * 获取用户 Storage
 * @param {*} userInfo
 */
export const getUserStorage = () => ({
  ...(Taro.getStorageSync('user_info') || {}),
})

/**
 * 清除用户 Storage
 * @param {*} key
 */
export const clearUserStorage = () => Taro.setStorageSync('user_info', '')

/**
 * 用户信息
 * @param {*} payload
 */
export const dispatchUser = () => ({
  type: SET_USER,
  payload: getUserStorage(),
})


/**
 * 用户登录
 * @param {*} payload
 */
export const dispatchGetInformation = (payload) => createAction({
  payload,
  method: 'POST',
  type:SET_USER,
  url: API_GETINFORMATION_DETAIL,
  cb: (res) => res.data
})


/**
 * 用户验证
 * @param {*} payload
 */
export const dispatchValid = (payload) => createAction({
  payload,
  method: 'POST',
  type: SET_USER,
  url: API_USER_VALID,
  cb: ({ data: { data: { mini_user, token } } }) => setUserStorage({ ...mini_user, token })
})


/**
 * 用户退出登录
 */
export const dispatchLogout = () => ({
  type: DELETE_USER,
  payload: USER_DEFAULT.userInfo
})
