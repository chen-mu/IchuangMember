import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import * as projectActions from '@actions/project'
import projectLists from '@components/point-list'
import { connect } from '@tarojs/redux'

import Board from '../../components/board';



@connect(state => state, {
  ...projectActions
})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '我的积分',
    enablePullDownRefresh: true,
  }

  refpointList = (node) => this.pointList = node

  state = {
    count: 0,
    pointLists: []
  }

  async  componentDidMount() {
    const { count, } = this.state
    // this.props.dispatchPointCount({id:JSON.stringify(this.props.user.Member.id)})
    const { data } = await this.props.dispatchPointDetail()

    let counts = 0
    for (var i = 0; i < data.rows.length; i++) {
      counts = counts + data.rows[i].count
    }
    this.setState({
      count: counts,
      pointLists: data.rows
    })
  }



  render() {

    const { count, pointLists } = this.state

    return (<View>
      <Board className='fixed:top p-4 page-middile' border='bottom' >

        <View className='text-bold mt-1 at-row  page-middile'>
          <View class='mt-2'>您已获得</View>
          <View className='text-brand text-super'>{count}</View>
          <View class='mt-2'>分</View>
        </View>


      </Board>
      <projectLists
        items={pointLists}
        refs={this.pointList}
        // defaultPayload={payload}
        dispatchList={this.props.dispatchActivityList}
        dispatchNextPageList={this.props.dispatchNextActivityList}
      />







    </View>)
  }
}

export default DashboardIndex
