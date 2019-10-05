import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'

import { View,} from '@tarojs/components'

import * as memberActions from '@actions/member'
import MemberItem from '@components/member-item'
import BaseList from '@components/base-list'
import Board from '../board'



@connect(state => state, {
  ...memberActions,
})
class memberList extends BaseList {

  state = {


  }

  render() {
    const { items } = this.props

    return (
      <View >
        {items && items.map(i =>
          <MemberItem
            key={i.id}
            item={i}
          />
        )
        }
      </View>
    )
  }
}

export default memberList
