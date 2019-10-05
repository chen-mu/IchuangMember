import { createAction } from '@utils/redux'

import Taro from '@tarojs/taro'

import {
  TYPE_MATCH_LIST,
  SET_NEXT_PAGE_MATCH_LIST,
  TYPE_MATCH_DETAIL,
  TYPE_MATCH_CREATE
} from '@constants/match'
import {
  API_MATCH_LIST,
  API_MATCH_CREATE,
 } from '@constants/api'


/**
 * 获取活动列表
 * @param {*} payload
 */
export const dispatchMatchList = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_MATCH_LIST,
  url: API_MATCH_LIST,
  cb: (res) => res.data
})
/**
 * 获取下一页活动列表
 * @param {*} payload
 */
export const dispatchNextMatchList = (payload) => createAction({
  payload,
  method: 'POST',
  type: SET_NEXT_PAGE_MATCH_LIST,
  url: API_MATCH_LIST,
  cb: (res) => res.data
})
/**
 * 获取活动详细信息
 * @param {*} payload
 */
export const dispatchMatchDetail = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_MATCH_DETAIL,
  url: API_MATCH_LIST,
  cb: (res) => res.data
})

/**
 * 获取活动报名
 * @param {*} payload
 */
export const dispatchMatchCreate = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_MATCH_CREATE,
  url: API_MATCH_CREATE,
  cb: (res) => res.data
})


