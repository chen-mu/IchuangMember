import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import * as userActions from '@actions/user'
import { connect } from '@tarojs/redux'
import { AtAvatar, AtIcon } from 'taro-ui'
import { PAGE_INFOR_TEST, PAGE_INFOR_POINT, PAGE_INFOR_RETURN, PAGE_INFOR_FREETIME } from '@constants/page'
import Board from '../../components/board';



@connect(state => state, {
  userActions
})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '我的',
    enablePullDownRefresh: true,
  }
  state = {

  }

  componentDidMount() {

  }
  //我的考核
  onTest() {
    Taro.navigateTo({
      url: `${PAGE_INFOR_TEST}?id=${1}&course_name=${1}`
    })
  }
  //我的积分
  onPoint() {
    Taro.navigateTo({
      url: `${PAGE_INFOR_POINT}`
    })
  }
  //反馈
  onReturn() {
    Taro.navigateTo({
      url: `${PAGE_INFOR_RETURN}`
    })
  }
  //空闲时间表
  onFreeTime() {
    Taro.navigateTo({
      url: `${PAGE_INFOR_FREETIME}`
    })
  }


  render() {

    const { user } = this.props

    return (<View>
      <Board className='fixed:top; p-3' border='bottom' >
        <View className='at-row'>
          <AtAvatar
            image={user.Member.photo}
            size='normal'
            circle
          ></AtAvatar>
          <View className='text-normal text-bold ml-4 mt-1'>
            <View>{user.Member.name}</View>
            <View className='mt-1'>{user.Member.id}</View>
          </View>
        </View>
      </Board>

      <Board className='m-2 p-2 mt-4'>
        <View className='at-row at-row__justify--between mt-2' onClick={this.onTest}>
          <View className='at-col-4 '>我的考核</View>
          <View className='text-normal'>
            <AtIcon value='chevron-right' size='25' color='#255BFF'></AtIcon>
          </View>
        </View>

        <View className='line mt-3'></View>

        <View className='at-row at-row__justify--between mt-3' onClick={this.onPoint}>
          <View className='at-col-3 '>我的积分</View>
          <View className='text-normal'>
            <AtIcon value='chevron-right' size='25' color='#255BFF'></AtIcon>
          </View>
        </View>

        <View className='line mt-3'></View>

        <View className='at-row at-row__justify--between mt-3' onClick={this.onReturn}>
          <View className='at-col-3 '>  反馈</View>
          <View className='text-normal'>
            <AtIcon value='chevron-right' size='25' color='#255BFF'></AtIcon>
          </View>
        </View>

        <View className='line mt-3'></View>

        <View className='at-row at-row__justify--between mt-3 mb-2' onClick={this.onFreeTime}>
          <View className='at-col-4 '>关于我们</View>
          <View className='text-normal'>
            <AtIcon value='chevron-right' size='25' color='#255BFF'></AtIcon>
          </View>
        </View>



      </Board>

    </View>)
  }
}

export default DashboardIndex
