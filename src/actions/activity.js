import { createAction } from '@utils/redux'

import Taro from '@tarojs/taro'

import {
  TYPE_ACTIVITY_LIST,
  SET_NEXT_PAGE_ACTIVITY_LIST,
  TYPE_ACTIVITY_DETAIL,
  TYPE_ACTIVITY_CREATE
} from '@constants/activity'
import {
  API_ACTIVITY_LIST,
  API_ACTIVITY_CREATE,
 } from '@constants/api'


/**
 * 获取活动列表
 * @param {*} payload
 */
export const dispatchActivityList = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_ACTIVITY_LIST,
  url: API_ACTIVITY_LIST,
  cb: (res) => res.data
})
/**
 * 获取下一页活动列表
 * @param {*} payload
 */
export const dispatchNextActivityList = (payload) => createAction({
  payload,
  method: 'POST',
  type: SET_NEXT_PAGE_ACTIVITY_LIST,
  url: API_ACTIVITY_LIST,
  cb: (res) => res.data
})
/**
 * 获取活动详细信息
 * @param {*} payload
 */
export const dispatchActivityDetail = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_ACTIVITY_DETAIL,
  url: API_ACTIVITY_LIST,
  cb: (res) => res.data
})

/**
 * 获取活动报名
 * @param {*} payload
 */
export const dispatchActivityCreate = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_ACTIVITY_CREATE,
  url: API_ACTIVITY_CREATE,
  cb: (res) => res.data
})


