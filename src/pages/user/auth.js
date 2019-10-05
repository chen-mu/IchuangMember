import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import logo from '@assets/icons/logo.png'

import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'

import { LOCALE_PLACEHOLDER_MOBILE, LOCALE_PLACEHOLDER_PASSWORD, LOCAL_APP_NAME } from '@constants/locale'
import { PAGE_DASHBOARD_INDEX } from '@constants/page'
import { COLOR_TEXT_WHITE } from '@constants/styles'

@connect(state => state.user, actions)
class UserAuth extends Component {
  config = {
    navigationBarTitleText: '登录中心'
  }

  state = {
    mobile: '',
    password: '',
  }

  onMobileInput({ currentTarget: { value: mobile } }) {
    this.setState({ mobile })
  }

  onPasswordInput({ currentTarget: { value: password } }) {
    this.setState({ password })
  }

  async handleLogin({ currentTarget }) {
    console.log(currentTarget.userInfo.avatarUrl)
    Taro.setStorageSync('imagUrl',currentTarget.userInfo.avatarUrl)
    Taro.setStorageSync('name',currentTarget.userInfo.nickName)
    console.log(currentTarget)
    await Taro.login().
    then((res)=>
    console.log(res))

    console.log(Taro.getStorageSync('imageUrl'))
    // const { code } = await Taro.login().
    // const { encryptedData: encrypt_data, iv } = currentTarget
    // const { mobile: username, password } = this.state

    // try {
    //   await this.props.dispatchValid({ iv, code, encrypt_data })
    //   await this.props.dispatchLogin({ username, password })
      Taro.reLaunch({ url: PAGE_DASHBOARD_INDEX })
    // } catch (e) { }

  }

  render() {
    const { password, mobile } = this.state

    return (
      <View className='page-auth px-5'>
        {/* logo 和 文字说明 */}
        <View className='text-center'>
          {/* <Image className='logo' src={logo} mode='aspectFit' /> */}
          <View className=' text-brand ' style='font-size:70px'>I创</View>
        </View >

        <View className='text-brand text-super mt-4'>HELLO!</View>

        {/* 手机输入框 */}
        <Input
          className='mt-4 base-input'
          placeholder='请输入手机号'
          onInput={this.onMobileInput}
          value={mobile}
        />


        {/* 密码输入框 */}
        <Input
          className='mt-4 base-input'
          placeholder='请输入密码'
          onInput={this.onPasswordInput}
          value={password}
          password
        />

        <View className='at-row at-row__justify--between at-row__align--center mt-5'>
          <View className='text-brand text-super'>登录</View>
          <AtButton
            type='primary'
            circle
            openType='getUserInfo'
            onGetUserInfo={this.handleLogin}
            className='button--login at-row at-row__justify--center at-row__align--center'
          >
            <AtIcon
              prefixClass='iconfont icon'
              value='arrow-right'
              size='45'
              color={COLOR_TEXT_WHITE}
            />
          </AtButton>
        </View>
      </View>
    )
  }
}

export default UserAuth
