
import { createAction } from '@utils/redux'

import Taro from '@tarojs/taro'

import {
  TYPE_PROJECT_LIST,
  TYPE_MEMBER_LIST,
  SET_NEXT_PAGE_MEMBER_LIST,
  TYPE_MEMBER_INFORMATION,
} from '@constants/member'
import {
  API_PROJECT_LIST,
  API_MEMBER_LIST,
  API_MEMBER_INFORMATION  } from '@constants/api'


/**
 * 获取项目列表
 * @param {*} payload
 */
export const dispatchProjectList = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_PROJECT_LIST,
  url: API_PROJECT_LIST,
  cb: (res) => res.data
})

/**
 * 获取成员列表
 * @param {*} payload
 */
export const dispatchMemberList = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_MEMBER_LIST,
  url: API_MEMBER_LIST,
  cb: (res) => res.data
})

/**
 * 获取成员下一页列表
 * @param {*} payload
 */
export const dispatchNextPageMemberList = (payload) => createAction({
  payload,
  method: 'POST',
  type: SET_NEXT_PAGE_MEMBER_LIST,
  url: API_MEMBER_LIST,
  cb: (res) => res.data
})

//获取单个成员的信息

export const dispatchMemberListInformation = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_MEMBER_INFORMATION,
  url: API_MEMBER_INFORMATION,
  cb: (res) => res.data
})




