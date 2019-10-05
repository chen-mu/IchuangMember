import { createAction } from '@utils/redux'

import Taro from '@tarojs/taro'

import {
  TYPE_PROJECT_LIST,
  SET_NEXT_PAGE_PROJECT_LIST,
  TYPE_PROJECT_DETAIL,
  TYPE_PROJECT_APPLYCATION,
  TYPE_POINT_DETAIL,
  TYPE_POINT_COUNT
} from '@constants/project'
import {
  API_PROJECT_LISTS,
  API_PROJECT_DETAIL,
  API_PROJECT_APPLYCATION,
  API_POINT_DETAIL,
  API_POINT_COUNT,
 } from '@constants/api'


/**
 * 获取活动列表
 * @param {*} payload
 */
export const dispatchProjectList = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_PROJECT_LIST,
  url: API_PROJECT_LISTS,
  cb: (res) => res.data
})
/**
 * 获取下一页活动列表
 * @param {*} payload
 */
export const dispatchNextActivityList = (payload) => createAction({
  payload,
  method: 'POST',
  type: SET_NEXT_PAGE_PROJECT_LIST,
  url: API_PROJECT_LISTS,
  cb: (res) => res.data
})

/**
 * 获取项目详情
 * @param {*} payload
 */
export const dispatchProjectDetail = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_PROJECT_DETAIL,
  url: API_PROJECT_DETAIL,
  cb: (res) => res.data
})

/**
 * 提交申请
 * @param {*} payload
 */
export const dispatchProjectApplication = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_PROJECT_APPLYCATION,
  url: API_PROJECT_APPLYCATION,
  cb: (res) => res.data
})

/**
 * 获得积分详情
 * @param {*} payload
 */
export const dispatchPointDetail = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_POINT_DETAIL,
  url: API_POINT_DETAIL,
  cb: (res) => res.data
})

/**
 * 获得总积分
 * @param {*} payload
 */
export const dispatchPointCount = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_POINT_COUNT,
  url: API_POINT_COUNT,
  cb: (res) => res.data
})


