import Taro from '@tarojs/taro'
import {  AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { View, } from '@tarojs/components'
import { PAGE_ACTIVITY_DETAIL } from '@constants/page'
import BaseComponent from '@components/base'

import * as roomActions from '@actions/member'
import Board from '../board'


@connect(state => state, {
  ...roomActions,
})
class activityItem extends BaseComponent {

  static defaultProps = {

  }

  //前往详情页面
  onNavDetail(id) {
    Taro.navigateTo({
      url: `${PAGE_ACTIVITY_DETAIL}?id=${id}`
    })
  }
  render() {
    const { item } = this.props


    return (
      <View className=' m-2'  >
        <Board className='p-1' >
          <View className='at-row at-row__justify--between' onClick={this.onNavDetail.bind(this, item.id)}>
            <View style='width:80vw'>
              <View className='ml-2 text-brand  text-bold'> {item.name} </View>
              <View className='ml-2 text-normal mt-2 page-over-hidden ' > {item.introduction} </View>

            </View>
            <View className='page-middile'>
              <AtIcon value='chevron-right' size='30' color='#255BFF'></AtIcon>
            </View>


          </View>
        </Board>



      </View>
    )
  }
}

export default activityItem
