import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import * as projectActions from '@actions/project'
import { AtTextarea, AtImagePicker, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

import Board from '../../components/board';



@connect(state => state, {
  ...projectActions
})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '反馈',
    enablePullDownRefresh: true,
  }

  refpointList = (node) => this.pointList = node

  state = {
    value: ''
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }


  onChange(files) {
    this.setState({
      files
    })
  }
  onFail(mes) {
    console.log(mes)
  }
  onImageClick(index, file) {
    console.log(index, file)
  }
  async  componentDidMount() {

  }

  onConfire(){
    Taro.showToast({
      title:'反馈提交成功',
      icon:'none',
      duration:2000
    })
  }


  render() {


    return (<View>

      <AtTextarea
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        maxLength={200}
        height={200}
        placeholder='你的问题是...'
      />
      <View className='mt-2 ml-2'>添加图片</View>
      <AtImagePicker
        length={3}
        files={this.state.files}
        onChange={this.onChange.bind(this)}
      />

      <AtButton type='primary' circle style='width:100vw' className='m-2' onClick={this.onConfire} > 提交反馈   </AtButton>


    </View>)
  }
}

export default DashboardIndex
