import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import * as activityActions from '@actions/activity'
import { AtButton } from 'taro-ui'
import BaseComponent from '@components/base'
import Board from '@components/board'
import { PAGE_PROJECT_APPLICATION } from '@constants/page'

@connect(state => state, {
  ...activityActions,
})



class activityDetail extends BaseComponent {
  config = {
    navigationBarTitleText: '活动',
    enablePullDownRefresh: false,
  }



  state = {
    id:0,
    post: '',
    end_time: '',
    hold: '',
    introduction: '',
    name: '',
    notification_file: '',
    start_time: '',
  }



  async componentWillMount() {
    const { id } = this.$router.params
    const { data } = await this.props.dispatchActivityDetail({ id })

    this.setState({
      id:data.rows[0].id,
      post: data.rows[0].post,
      end_time: data.rows[0].end_time,
      hold: data.rows[0].hold,
      introduction: data.rows[0].introduction,
      name: data.rows[0].name,
      notification_file: data.rows[0].notification_file,
      start_time: data.rows[0].start_time,
    })
  }
  //打卡文件
  onOpenDoucment(){
    const { notification_file } = this.state

    Taro.downloadFile({
      // 示例 url，并非真实存在
      url:`${notification_file}`,
      success: function (res) {
        const filePath = res.tempFilePath
        Taro.openDocument({
          filePath: filePath,
          success: function () {

          },
          fail:function(){
            Taro.showToast({
              title:'文档打开失败，请联系管理员',
              icon:'none',
              duration:2000,
            })
          }
        })
      }
    })
  }

  //报名
  onAppilcation(){
    const { name } = this.state
      Taro.navigateTo({
        url:`${PAGE_PROJECT_APPLICATION}?project_name=${name}`
      })
  }
  render() {
    const { post, end_time, hold, introduction, start_time, name } = this.state
    return (<View >
      <Board border='bottom'>
        <View className='at-row at-row__justify--between '>
          <View className='text-huge text-brand text-bold at-row at-row__align--center ml-3 my-3'>{name}</View>
        </View>
        <View className='at-row mt-2 ml-2'>
          <View className='at-col-2 ml-2 text-normal'>简介:</View>
          <View className='at-col-9 text-normal mb-2'> {introduction}</View>
        </View>
      </Board>

      <Board className='m-2 p-2'>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>开始时间</View>
          <View className='at-col-5'> {start_time}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>结束时间</View>
          <View className='at-col-5'> {end_time}</View>
        </View>

        <View className='line mt-2'></View>
        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>发布方</View>
          <View className='at-col-5'> {post}</View>
        </View>
        <View className='line mt-2'></View>
        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>举办方</View>
          <View className='at-col-5'> {hold}</View>
        </View>

      </Board>

      <View className='at-row at-row__justify--around mt-4'>
        <AtButton type='primary' circle className='button-ac' onClick={this.onOpenDoucment} >查看活动详情</AtButton>

        <AtButton type='primary' circle className='button-ac' onClick={this.onAppilcation}> 报名   </AtButton>

      </View>
    </View>)
  }
}

export default activityDetail
