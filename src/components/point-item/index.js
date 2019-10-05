import Taro from '@tarojs/taro'


import { View, Image } from '@tarojs/components'
import { PAGE_PROJECT_DETAIL } from '@constants/page'
import BaseComponent from '@components/base'
import Board from '../board'

class pointItem extends BaseComponent {

  static defaultProps = {

  }


  render() {
    const { item } = this.props

    return (
      <View className=' mx-3 mt-1 '  >
        <Board className='at-row at-row__justify--between ' style='width:92vw'>
          <View className='at-col-6 m-2'>{item.time}</View>
          <View className='at-row at-col-4 page-middile m-2'>
            <View>获得</View>
            <View className='text-brand '>{item.count}</View>
            <View>积分</View>
          </View>
        </Board>
      </View>
    )
  }
}

export default pointItem
