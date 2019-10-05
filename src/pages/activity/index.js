import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { PAYLOAD_ACTIVITY_LIST } from '@constants/api'

import activityLists from '@components/activity-list'

import * as activityActions from '@actions/activity'



@connect(state => state, {
  ...activityActions,
})

class ActivityIndex extends Component {
  config = {
    navigationBarTitleText: '社团活动',
    enablePullDownRefresh: false,
  }

  refactivityList = (node) => this.activityList = node

  state = {
    payload: PAYLOAD_ACTIVITY_LIST,
  }



  async componentDidMount() {
    const { payload } = this.state
    this.props.dispatchActivityList(payload)
  }



  render() {

    const { activity } = this.props
    const { payload } = this.state

    return (<View className=' mb-2'>

      <activityLists
        items={activity.rows}
        refs={this.activityList}
        defaultPayload={payload}
        dispatchList={this.props.dispatchActivityList}
        dispatchNextPageList={this.props.dispatchNextActivityList}
      />
    </View>)
  }
}

export default ActivityIndex
