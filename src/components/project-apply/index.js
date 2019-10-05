import Taro from '@tarojs/taro'


import { View, Image } from '@tarojs/components'

import BaseComponent from '@components/base'
import Board from '../board'

class prjectApply extends BaseComponent {

  static defaultProps = {

  }


  render() {
    const { itemall, itemsuccess, itemfail } = this.props

    return (
      <View className=' m-2 ' style='width:100vw'  >

        <View className='at-col-5  text-brand  text-large'>项目申请中</View>
        {itemall && itemall.map(i =>
          <View className='at-row ' key={i.id}>
            <Board style='width:95vw' className='p-2 mt-2'>
              <View className='at-row'>
                <View className='text-noemal at-col-7 ' style=' overflow: hidden; text-overflow: ellipsis;white-space: nowrap;width:50vw'> {i.project_name}</View>
                <View className='at-col-4 at-row page-house page-middile'>
                  <View className=' text-normal'>申请人：</View>
                  <View className='text-normal'>{i.apply_name}</View>
                </View>
              </View>
            </Board>

          </View>
        )}

        <View className='at-col-5 mt-3   text-brand  text-large'>申请成功</View>
        {itemsuccess && itemsuccess.map(i =>
          <View className='at-row ' key={i.id}>
            <Board style='width:95vw' className='p-2 mt-2'>
              <View className='at-row'>
                <View className='text-noemal at-col-7 ' style=' overflow: hidden; text-overflow: ellipsis;white-space: nowrap;width:50vw'> {i.project_name}</View>
                <View className='at-col-4 at-row page-house page-middile'>
                  <View className=' text-normal'>申请人：</View>
                  <View className='text-normal'>{i.apply_name}</View>
                </View>
              </View>
            </Board>

          </View>
        )}

        <View className='at-col-5   mt-3  text-brand  text-large'>申请失败</View>
        {itemfail && itemfail.map(i =>
          <View className='at-row ' key={i.id}>
            <Board style='width:95vw' className='p-2 mt-2'>
              <View className='at-row'>
                <View className='text-noemal at-col-7 ' style=' overflow: hidden; text-overflow: ellipsis;white-space: nowrap;width:50vw'> {i.project_name}</View>
                <View className='at-col-4 at-row page-house page-middile'>
                  <View className=' text-normal'>申请人：</View>
                  <View className='text-normal'>{i.apply_name}</View>
                </View>
              </View>
            </Board>

          </View>
        )}

      </View>
    )
  }
}

export default prjectApply
