import Taro from '@tarojs/taro'
import { clearUserStorage, getUserStorage } from '@actions/user'

import { LOCALE_ERROR } from '@constants/locale'
import { PAGE_USER_AUTH } from '@constants/page'

/**
 * 响应状态码
 */
const CODE_SUCCESS = 200
const CODE_ERROR = 2003
const CODE_NEED_LOGIN = 2006
const CODE_AUTH_EXPIRED = 911

/**
 * 开发环境配置
 */
const DEV_REQUEST_DELAY = 2000
const IS_DEV = process.env.NODE_ENV === 'development'

/**
 * RequestError
 */
class RequestError {
  constructor(code, message) {
    this.code = code
    this.message = message
    this.stack = (new Error()).stack
  }
}

export const queryStringToJSON = (queryString) => {
  if (queryString.indexOf('?') > -1) {
    queryString = queryString.split('?')[1];
  }
  var pairs = queryString.split('&');
  var result = {};
  pairs.forEach(function (pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  return result;
}

/**
 * 网络请求封装
 * @param {*} options
 */
export default async function fetch({
  url,
  payload,
  method = 'POST',
  showToast = true,
  autoLogin = true,
  showLoading = true,
  success = () => { },
  fail = () => { },
  complete = () => { },
}) {
  // 初始化头部数据
  const header = {}
  // const { token } = getUserStorage()
  const data = { ...payload }

  /**
   * 修改请求头
   */
  if (method === 'POST') {
   header['content-type']= 'application/x-www-form-urlencoded;charset=UTF-8',
   header['Accept']='application/x-www-form-urlencoded;charset=UTF-8'
  }

  /**
   * 当网络请求成功
   * 开发环境增加模拟请求延迟
   * @param {*} response
   */
  async function handleSuccess(response) {
    success(response)
    handleComplete()
    return response
  }

  /**
   * 判断网络请求状态码
   * @param {*} response
   */
  function handleStatus(response) {

    if (!response || !response.data) {
      throw new RequestError(CODE_ERROR, LOCALE_ERROR);
    }

    switch (response.statusCode) {
      case CODE_SUCCESS: {

        return response;
      }

      case CODE_ERROR: {
        return response;
        // throw new RequestError(CODE_ERROR, response.data.msg)
      }

      case CODE_NEED_LOGIN:
      case CODE_AUTH_EXPIRED: {
        clearUserStorage()
        throw new RequestError(CODE_AUTH_EXPIRED, response.data.msg)
      }
default:''
      // default: throw new RequestError(CODE_ERROR, LOCALE_ERROR)

    }
  }

  /**
   * 网络请求出错时
   * 进行提示 并 调用错误回调函数
   * @param {*} error
   */
  function handleError(error) {
    if ((error.code === CODE_AUTH_EXPIRED || error.code === CODE_NEED_LOGIN)
      && url != PAGE_USER_AUTH && autoLogin) {
      Taro.reLaunch({ url: PAGE_USER_AUTH })
    } else {
      error.message = error.message || LOCALE_ERROR
      showToast && Taro.showToast({
        icon: 'none',
        title: error.message,
      })
    }

    fail(error)
    handleComplete()
    throw error
  }

  /**
   * 当数据请求完成时调用
   * 开发环境增加模拟请求延迟
   */
  function handleComplete() {
    showLoading && Taro.hideLoading()
    return setTimeout(() => complete(), IS_DEV ? DEV_REQUEST_DELAY : 0)
  }

  /**
   * 显示数据加载
   */
  showLoading && Taro.showLoading({
    title: '加载中',
    mask: true
  })


  return Taro.request({ url, data, header, method })
    .then(handleStatus)
    .then(handleSuccess)
    .catch(handleError)
}
