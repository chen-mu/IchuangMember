import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { PAYLOAD_COURSE_LIST } from '@constants/api'

import { PAGE_PROJECT_APPLYLIST } from '@constants/page'

import projectLists from '@components/project-list'

import * as courseActions from '@actions/project'
import { AtIcon } from 'taro-ui'



@connect(state => state, {
  ...courseActions,
})

class projectIndex extends Component {
  config = {
    navigationBarTitleText: '项目',
    enablePullDownRefresh: false,
  }

  refcourseList = (node) => this.courseList = node

  state = {
    payload: PAYLOAD_COURSE_LIST,
  }



  async componentDidMount() {
    const { payload } = this.state
    this.props.dispatchProjectList(payload)

  }

  //申请项目
  onApply(){
    Taro.navigateTo({
      url:PAGE_PROJECT_APPLYLIST
    })
  }


  render() {

    const { project } = this.props
    const { payload } = this.state
    return (<View className=' mb-2'>

      <projectLists
        items={project.rows}
        refs={this.courseList}
        defaultPayload={payload}
        dispatchList={this.props.dispatchCourseList}
        dispatchNextPageList={this.props.dispatchNextCourseList}
      />


      <View className='page-middile at-row sublet-back ' onClick={this.onApply}>
        <View className='sublet-button page-middile'>

          <AtIcon value='add' size='20' color='#FFFFFF' />
        </View>
        <View className='text-normal ml-2'>申请情况</View>

      </View>
    </View>)
  }
}

export default projectIndex
