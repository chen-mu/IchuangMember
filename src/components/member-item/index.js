import Taro from '@tarojs/taro'
import { AtAvatar, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { View, } from '@tarojs/components'
import { PAGE_MEMBER_DETAIL } from '@constants/page'
import BaseComponent from '@components/base'

import * as roomActions from '@actions/member'
import Board from '../board'


@connect(state => state, {
  ...roomActions,
})
class MemberItem extends BaseComponent {

  static defaultProps = {

  }
 //打电话
  onCallPhone(value){
    Taro.makePhoneCall({
      phoneNumber:value
    })
  }
  //前往详情页面
  onNavDetail(id){
    Taro.navigateTo({
      url:`${PAGE_MEMBER_DETAIL}?id=${id}`
    })
  }
  render() {
    const { item } = this.props


    return (
      <View className=' m-2' >
        {item.phone && <Board className='p-1' >
          <View className='at-row at-row__justify--between' onClick={this.onNavDetail.bind(this,item.id)}>
            <View className='at-row  m-2'>
              <AtAvatar circle image={item.photo} size='small' />
              <View>
                <View className='ml-2 text-normal'> {item.name} </View>
                <View className='ml-2 text-normal'> {item.phone} </View>
              </View>
            </View>
            <View className='page-middile mr-3'>
              <AtIcon  value='phone' size='30' color='#0A0A0A' onClick={this.onCallPhone.bind(this,item.phone)}  />
            </View>
          </View>
        </Board>}
      </View>
    )
  }
}

export default MemberItem
