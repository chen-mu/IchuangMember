import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import * as studyActions from '@actions/course'
import { AtButton } from 'taro-ui'
import BaseComponent from '@components/base'
import { PAGE_STUDY_INDEX } from '@constants/page'
import { PAYLOAD_COURSE_EXERCISEPOINT,PAYLOAD_COURSE_EXERCISERESULT } from '@constants/api'

@connect(state => state, {
  ...studyActions,
})



class test extends BaseComponent {
  config = {
    navigationBarTitleText: '考核',
    enablePullDownRefresh: false,
  }

  state = {
    payloadPoint: PAYLOAD_COURSE_EXERCISEPOINT, //= {exercise_name:'',exercise_id:0,member_name:'', member_id:'',score:'',point:'' }
    payloadResult:PAYLOAD_COURSE_EXERCISERESULT ,//= {count:'',point_id:0,point_name:'', time:''}
    exerciseList: [],
    nowAns: '',
    question: '',
    chooseA: '',
    chooseB: '',
    chooseC: '',
    chooseD: '',
    count: 0,
    score: 0,
    testTime: 0,
    countDownNum: 3,
    timer: true
  }

  async componentWillMount() {
    const { id,course_name } = this.$router.params
    const { payloadPoint ,payloadResult} = this.state
    const { user } = this.props


    this.setState({
      payloadResult:{...payloadPoint,exercise_name:course_name,exercise_id:id,member_name:user.Member.name,member_id:user.Member.id},
      payloadPoint:{...payloadResult,point_id:user.Member.id,point_name:user.Member.name}
    })
    this.props.dispatchChapterExerciseQuetison({ exercise_id: id }).then((res) => {
      this.setState({
        exerciseList: res.data.rows,
        question: res.data.rows[0].question,
        chooseA: res.data.rows[0].choice_A,
        chooseB: res.data.rows[0].choice_B,
        chooseC: res.data.rows[0].choice_C,
        chooseD: res.data.rows[0].choice_D,
        countDownNum: res.data.rows.length * 10
      })
    })
    this.OnCountDown()
  }
  //倒计时
  OnCountDown() {
    const { countDownNum, timer,payloadPoint,score,payloadResult } = this.state
    if (countDownNum > 0 && timer) {
      setTimeout(() => this.OnCountDown(), 1000)
      this.setState({
        countDownNum: countDownNum - 1
      })
    }
    if (countDownNum === 0) {
      this.setState({
        timer: false
      })
      const time = new Date()

      const year = time.getFullYear()
      const month = time.getMonth() < 10 ? '0'+ time.getMonth():time.getMonth()
      const day = time.getDay() < 10 ? '0'+ time.getDay():time.getDay()
      const hours = time.getHours() < 10 ? '0'+ time.getHours():time.getHours()
      const minu = time.getMinutes() < 10 ? '0'+ time.getMinutes():time.getMinutes()
      const sec = time.getSeconds() <10 ?'0'+ time.getSeconds():time.getSeconds()

      const timeNow = year+'/'+month+'/'+day+'  '+hours+':'+minu+':'+sec

      const that = this
      Taro.showModal({
        title: '提示',
        showCancel:false,
        content: '祝贺您，您已完成这次考核',
        success: function (res) {
          if (res.confirm) {
            that.props.dispatchChapterExercisePoint({...payloadPoint,count:score,time:timeNow})
            that.props.dispatchChapterExerciseResult({...payloadResult,score:score,point:score})
            Taro.redirectTo({
              url:PAGE_STUDY_INDEX
            })
          }
        }
      })
    }
  }
  //下一题
  onNext() {
    const { exerciseList, count, nowAns, score,payloadPoint ,payloadResult} = this.state
    nowAns === exerciseList[count].answer ? this.setState({ score: score + 5 }) : this.setState({ score })
    if (exerciseList.length <= (count + 1)) {
      this.setState({
        timer: false
      })

      const time = new Date()

      const year = time.getFullYear()
      const month = time.getMonth() < 10 ? '0'+ time.getMonth():time.getMonth()
      const day = time.getDay() < 10 ? '0'+ time.getDay():time.getDay()
      const hours = time.getHours() < 10 ? '0'+ time.getHours():time.getHours()
      const minu = time.getMinutes() < 10 ? '0'+ time.getMinutes():time.getMinutes()
      const sec = time.getSeconds() <10 ?'0'+ time.getSeconds():time.getSeconds()

      const timeNow = year+'/'+month+'/'+day+'  '+hours+':'+minu+':'+sec

      const that = this
      Taro.showModal({
        title: '提示',
        showCancel:false,
        content: '祝贺您，您已完成这次考核',
        success: function (res) {
          if (res.confirm) {
            that.props.dispatchChapterExercisePoint({...payloadPoint,count:score,time:timeNow})
            that.props.dispatchChapterExerciseResult({...payloadResult,score:score,point:score})
            Taro.redirectTo({
              url:PAGE_STUDY_INDEX
            })
          }
        }
      })
    } else {
      this.setState({
        question: exerciseList[count + 1].question,
        chooseA: exerciseList[count + 1].choice_A,
        chooseB: exerciseList[count + 1].choice_B,
        chooseC: exerciseList[count + 1].choice_C,
        chooseD: exerciseList[count + 1].choice_D,
        count: count + 1,
        nowAns: ''
      })
    }
  }
  //选择答案
  onChoose(value) {
    this.setState({
      nowAns: value
    })
  }


  render() {
    const { nowAns, score, countDownNum,
      question, chooseA, chooseB, chooseC, chooseD
    } = this.state


    return (<View className='p-2' >
      <View className='page-house text-normal at-col-5 page-middile'>测试剩余时间：{countDownNum}s</View>
      <View className='mt-3 mx-2'>问题:{question}</View>
      <View className='at-row mt-5 mx-2' onClick={this.onChoose.bind(this, 'A')}>
        <View>A:</View >
        <View>{chooseA}</View>
      </View>

      <View className='at-row mt-5 mx-2' onClick={this.onChoose.bind(this, 'B')}>
        <View>B:</View>
        <View>{chooseB}</View>
      </View>
      <View className='at-row mt-5 mx-2' onClick={this.onChoose.bind(this, 'C')}>
        <View>C:</View>
        <View>{chooseC}</View>
      </View>
      <View className='at-row mt-5 mx-2' onClick={this.onChoose.bind(this, 'D')}>
        <View>D:</View>
        <View>{chooseD}</View>
      </View>



      <View className='at-row at-row__justify--around mt-5'>
        <AtButton type='primary' className='button-ex page-middile' onClick={this.onNext} >下一题</AtButton>

        <AtButton type='primary' className='button-ex page-middile ' >你的答案：<Text className='text-danger'>{nowAns}</Text></AtButton>

      </View>
      <View className='text-large  m-2 mt-3 p-1' style={{ backgroundColor: '#255BFF', color: '#FFFFFF', borderRadius: '2px' }}>
        <View>
          <View>当前得分：{score}</View>
          <View>注：答对加分，答错不减分</View>
        </View>
      </View>

    </View>)
  }
}

export default test
