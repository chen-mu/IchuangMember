import { createAction } from '@utils/redux'

import Taro from '@tarojs/taro'

import {
  TYPE_COURSE_LIST,
  SET_NEXT_PAGE_COURSE_LIST,
  TYPE_COURSE_TEACHER,
  TYPE_COURSE_CHAPTER,
  TYPE_COURSE_EXERCISE,
  TYPE_COURSE_EXERCISEQUSSTION,
  TYPE_COURSE_EXERCISEPOINT,
  TYPE_COURSE_EXERCISERESULT,
} from '@constants/course'
import {
  API_COURSE_LIST,
  API_COURSE_TEACHER,
  API_COURSE_CHAPTER,
  API_COURSE_EXERCISE,
  API_COURSE_EXERCISEQUSSTION,
  API_COURSE_EXERCISEPOINT,
  API_COURSE_EXERCISERESULT,
 } from '@constants/api'


/**
 * 获取活动列表
 * @param {*} payload
 */
export const dispatchCourseList = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_LIST,
  url: API_COURSE_LIST,
  cb: (res) => res.data
})
/**
 * 获取下一页活动列表
 * @param {*} payload
 */
export const dispatchNextCourseList = (payload) => createAction({
  payload,
  method: 'POST',
  type: SET_NEXT_PAGE_COURSE_LIST,
  url: API_COURSE_LIST,
  cb: (res) => res.data
})

/**
 * 获取课程教师的信息
 * @param {*} payload
 */
export const dispatchTeatchDetail = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_TEACHER,
  url: API_COURSE_TEACHER,
  cb: (res) => res.data
})

/**
 * 获取课程章节的信息
 * @param {*} payload
 */
export const dispatchChapterDetail = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_CHAPTER,
  url: API_COURSE_CHAPTER,
  cb: (res) => res.data
})

/**
 * 获取课程练习的信息
 * @param {*} payload
 */
export const dispatchChapterExercise = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_EXERCISE,
  url: API_COURSE_EXERCISE,
  cb: (res) => res.data
})

/**
 * 获取课程练习的信息
 * @param {*} payload
 */
export const dispatchChapterExerciseQuetison = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_EXERCISEQUSSTION,
  url: API_COURSE_EXERCISEQUSSTION,
  cb: (res) => res.data
})

/**
 * 提交获得的积分
 * @param {*} payload
 */
export const dispatchChapterExercisePoint = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_EXERCISEPOINT,
  url: API_COURSE_EXERCISEPOINT,
  cb: (res) => res.data
})


/**
 * 提交考核结果
 * @param {*} payload
 */
export const dispatchChapterExerciseResult = (payload) => createAction({
  payload,
  method: 'POST',
  type: TYPE_COURSE_EXERCISERESULT,
  url: API_COURSE_EXERCISERESULT,
  cb: (res) => res.data
})




