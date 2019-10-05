import Taro from '@tarojs/taro'
import { View, Video } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import * as studyActions from '@actions/course'
import { AtTabBar, AtAvatar, AtIcon } from 'taro-ui'
import BaseComponent from '@components/base'
import Board from '@components/board'
import { PAGE_COURSE_EXERCISE } from '@constants/page'

@connect(state => state, {
  ...studyActions,
})



class studyDetail extends BaseComponent {
  config = {
    navigationBarTitleText: '学习',
    enablePullDownRefresh: false,
  }

  state = {
    current: 1,
    videoSrc: '',
    list: [
      { title: '教师简介' },
      { title: '课程目录' },
      { title: '课程考核' }
    ],
    teacherName: '',
    teacherPhoto: '',
    teacherIntro: '',
    teacherPhone: '',

    courseList: [],
    exerciseList: [],
  }



  async componentWillMount() {
    const { id, teacher_id, course_name } = this.$router.params
    await this.props.dispatchTeatchDetail({ id: teacher_id }).then((res) => {
      this.setState({
        teacherName: res.data.Teacher.name,
        teacherIntro: res.data.Teacher.introduction,
        teacherPhoto: res.data.Teacher.photo,
        teacherPhone: res.data.Teacher.phone
      })
    })


    await this.props.dispatchChapterDetail({ course_name }).then((res) => {
      this.setState({
        courseList: res.data.rows.map((i, index) => index === 1 ? ({ ...i, active: false }) : ({ ...i, active: true })),
        videoSrc: res.data.rows[0].video_path
      })
    })

    this.props.dispatchChapterExercise().then((res) => {
      this.setState({
        exerciseList: res.data.rows
      })
    })

  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  //切换课程学习视频
  onVideoSrc(value) {
    console.log(value)
    const { courseList } = this.state
    this.setState({
      videoSrc: value.video_path,
      courseList: courseList.map((i) => value.id === i.id ? ({ ...i, active: true }) : ({ ...i, active: false }))
    })
  }
  //前往课程练习页面
  onExercise(value){

    Taro.navigateTo({
      url:`${PAGE_COURSE_EXERCISE}?id=${value.id}&course_name=${value.course_name}`
    })
  }
  render() {
    const { current, list,
      teacherIntro, teacherName, teacherPhone, teacherPhoto, courseList,
      videoSrc, exerciseList,
    } = this.state

    return (<View >
      <View>
        <Video
          src={videoSrc}
          style='width:100vw'
        />
      </View>
      <View >
        <AtTabBar
          tabList={list}
          className='page-middile'
          onClick={this.handleClick.bind(this)}
          current={current}
        />
      </View>
      {current === 0 && <View className=' p-2'>
        <Board className=' at-row'>
          <View className='at-col-2 m-2'>
            <AtAvatar image={teacherPhoto} circle size='normal'></AtAvatar>
          </View>
          <View className='at-col-8 m-2'>
            <View className='text-normal'>{teacherName}</View>
            <View className='text-normal mt-2'>{teacherPhone}</View>
          </View>
        </Board>
        <Board className=' at-row mt-2'>
          <View className='at-col-8 m-2'>
            <View className='text-normal page-house at-col-4 page-middile'>教师介绍</View>
            <View>
              <View className='text-normal mt-2 ml-3'>{teacherIntro}</View>
            </View>
          </View>
        </Board>
      </View>}

      {current === 1 && courseList && courseList.map(i =>
        <View key={i.id} onClick={this.onVideoSrc.bind(this, i)}>
          <View style={{ backgroundColor: '#FFFFFF', width: '' }}>
            <View className=' at-row at-row__justify--between '>
              {!i.active ? <View className='m-2  text-normal at-row at-row__align--center'>{i.name}</View> :
                <View className='m-2 text-brand text-normal at-row at-row__align--center' >{i.name}</View>}
              <View className='page-middile m-2'>
                <AtIcon value='chevron-right' size='20' color='#255BFF'></AtIcon>
              </View>
            </View>
            <View className='line'></View>
          </View>
        </View>
      )}

      {current === 2 && exerciseList && exerciseList.map(i =>
        <View key={i.id} onClick={this.onExercise.bind(this, i)}>
          <View style={{ backgroundColor: '#FFFFFF', width: '' }}>
            <View className=' at-row at-row__justify--between '>
              <View className='m-2  text-normal at-row at-row__align--center ' >{i.course_name}</View>
              <View className='page-middile m-2'>
                <AtIcon value='chevron-right' size='20' color='#255BFF'></AtIcon>
              </View>
            </View>
            <View className='line'></View>
          </View>
        </View>
      )}

    </View>)
  }
}

export default studyDetail
