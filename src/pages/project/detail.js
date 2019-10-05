import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import * as projectActions from '@actions/project'
import { AtButton } from 'taro-ui'
import BaseComponent from '@components/base'
import Board from '@components/board'
import { PAGE_PROJECT_APPLICATION } from '@constants/page'

@connect(state => state, {
  ...projectActions,
})



class projectDetail extends BaseComponent {
  config = {
    navigationBarTitleText: '项目详情',
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
    postPeople:'',
  }



  async componentWillMount() {
    const { name } = this.$router.params
    const { data } = await this.props.dispatchProjectDetail({ name})

    this.setState({
      id:data.rows[0].id,
      postPeople:data.rows[0].post_name,
      post: data.rows[0].rank,
      end_time: data.rows[0].end_time,
      hold: data.rows[0].type,
      introduction: data.rows[0].introduction,
      name: data.rows[0].name,
      notification_file: data.rows[0].project_file,
      start_time: data.rows[0].start_time,
    })
  }
  //打卡文件
  onOpenDoucment(){
    const { notification_file } = this.state

    Taro.downloadFile({
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
    const { id,name } = this.state
      Taro.navigateTo({
        url:`${PAGE_PROJECT_APPLICATION}?id=${id}&name=${name}`
      })
  }
  render() {
    const { post, end_time, hold, introduction, start_time, name,postPeople } = this.state
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
          <View className='at-col-5 ml-2'>发布人</View>
          <View className='at-col-5'> {postPeople}</View>
        </View>
        <View className='line mt-2'></View>

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
          <View className='at-col-5 ml-2'>级别</View>
          <View className='at-col-5'> {post}</View>
        </View>
        <View className='line mt-2'></View>
        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>项目类型</View>
          <View className='at-col-5'> {hold}</View>
        </View>

      </Board>

      <View className='at-row at-row__justify--around mt-4'>
        <AtButton type='primary' circle className='button-ac' onClick={this.onOpenDoucment} >查看项目文件</AtButton>

        <AtButton type='primary' circle className='button-ac' onClick={this.onAppilcation}>项目申请</AtButton>

      </View>
    </View>)
  }
}

export default projectDetail
