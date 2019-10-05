import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import SweiperHead from '@components/swiper-head'
import HomeNavigation from '@components/home_navigation'
import studyLists from '@components/study-list'
import { PAYLOAD_COURSE_LIST } from '@constants/api'

import * as memberActions from '@actions/member'
import * as userActions from '@actions/user'
import * as courseActions from '@actions/course'
import Board from '../../components/board';

@connect(state => state, {
  ...memberActions,
  ...userActions,
  ...courseActions,
})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: false,
  }
  state = {
    applySuccess: [],
    payload: PAYLOAD_COURSE_LIST,
  }
  async componentWillMount() {
    const { payload } = this.state
    let applySuccessNow = []
    await this.props.dispatchGetInformation({ id: 201626702117 })
    const { data } = await this.props.dispatchProjectList({ page: 1, row: 2 })

    data && data.rows.map(i =>
      i.status === 2 && applySuccessNow.push(i)
    )
    this.setState({
      applySuccess: applySuccessNow
    })

    this.props.dispatchCourseList(payload)
  }

  render() {
    const { applySuccess, props } = this.state
    const { course } = this.props
    return (<View>
      <View className='p-2'>
        <SweiperHead
          type='showHead'
        />

        <HomeNavigation

        />

        <SweiperHead
          applySuccess={applySuccess}
          type='showSuccess'
        />


      </View>
      <Board border='' className='p-2 mt-1 mb-2'>
        <View className='ml-3 mt-2 mb-2'>推荐课程</View>
        <studyLists

          items={course.rows}
          refs={this.courseList}
          dispatchList={this.props.dispatchCourseList}
          dispatchNextPageList={this.props.dispatchNextCourseList}
        />
      </Board>
    </View>)
  }
}

export default DashboardIndex
