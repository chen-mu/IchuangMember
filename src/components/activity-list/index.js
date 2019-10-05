import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'

import { View,} from '@tarojs/components'

import * as activityActions from '@actions/activity'
import activityItem from '@components/activity-item'
import BaseList from '@components/base-list'



@connect(state => state, {
  ...activityActions,
})
class activityList extends BaseList {

  state = {


  }

  render() {
    const { items } = this.props

    return (
      <View >
        {items && items.map(i =>
          <activityItem
            key={i.id}
            item={i}
          />
        )
        }
      </View>
    )
  }
}

export default activityList
