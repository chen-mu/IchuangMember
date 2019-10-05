import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { PAYLOAD_COURSE_LIST } from '@constants/api'

import studyLists from '@components/study-list'

import * as courseActions from '@actions/course'



@connect(state => state, {
  ...courseActions,
})

class StudyIndex extends Component {
  config = {
    navigationBarTitleText: '学习 ',
    enablePullDownRefresh: false,
  }

  refcourseList = (node) => this.courseList = node

  state = {
    payload: PAYLOAD_COURSE_LIST,
  }



  async componentDidMount() {
    const { payload } = this.state
    this.props.dispatchCourseList(payload)
  }



  render() {

    const { course } = this.props
    const { payload } = this.state

    return (<View className=' mb-2'>

      <studyLists
        items={course.rows}
        refs={this.courseList}
        defaultPayload={payload}
        dispatchList={this.props.dispatchCourseList}
        dispatchNextPageList={this.props.dispatchNextCourseList}
      />
    </View>)
  }
}

export default StudyIndex
