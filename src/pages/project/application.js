import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import * as projectActions from '@actions/project'
import { AtButton } from 'taro-ui'
import BaseComponent from '@components/base'
import Board from '@components/board'

import { PAYLOAD_PROJECT_CREATE } from '@constants/api'

@connect(state => state, {
  ...projectActions,
})



class projectApply extends BaseComponent {
  config = {
    navigationBarTitleText: '项目申请',
    enablePullDownRefresh: false,
  }



  state = {
    id: 0,
    name: '',
    inputName: '',
    inputSno: '',
    inputQQ: '',
    inputTel: '',
    payload: PAYLOAD_PROJECT_CREATE,
  }




  async componentWillMount() {
    const { payload } = this.state
    const { id, name } = this.$router.params
    const { user } = this.props
    this.setState({
      id,
      name,
      inputName:user.Member.name,
      payload: { ...payload,apply_name:user.Member.name,project_name:name }
    })
  }
  //输入姓名
  onInputname({ currentTarget: { value } }) {
    const { payload } = this.state
    this.setState({
      inputName: value,
      payload: { ...payload, apply_name: value }
    })
  }

  //输入学号
  onInputSno({ currentTarget: { value } }) {

    this.setState({
      inputSno: value,

    })
  }
  //输入QQ
  onInputQQ({ currentTarget: { value } }) {

    this.setState({
      inputQQ: value,

    })
  }
  //输入电话号码
  onInputTel({ currentTarget: { value } }) {
    this.setState({
      inputTel: value,

    })
  }
  //检查数据
  onCheck() {
    const { inputTel, inputSno, inputQQ, inputName } = this.state
    if (inputTel === ''
      || inputSno === ''
      || inputQQ === ''
      || inputName === '') {
      Taro.showToast({
        title: '请检查数据是否填写完整',
        icon: 'none',
        duration: 2000,
      })
      return false
    }
    return true


  }
  //报名
  onAppilcation() {
    const { payload } = this.state
    this.onCheck() && this.props.dispatchProjectApplication(payload).then((res)=>{
      if(res.data.total!==0){
        Taro.showToast({
          title: '您已提交过申请，不要重复提交',
          icon: 'none',
          duration: 2000,
        })
      }else{
        Taro.showToast({
          title: '申请提交成功',
          icon: 'none',
          duration: 2000,
        })
      }
    })
  }
  render() {
    const { name, inputName, inputSno, inputQQ, inputTel } = this.state
    return (<View >
      <Board border='bottom'>
        <View className='at-row at-row__justify--between '>
          <View className='text-huge text-brand text-bold at-row at-row__align--center ml-3 my-3'>{name}</View>
        </View>

      </Board>

      <Board className='m-2 p-2'>
        <View className='at-row'>
          <View className='at-col-3 '>姓名：</View>
          <View className='text-normal'>
            <Input
              type='text'
              placeholder='输入姓名'
              value={inputName}
              onInput={this.onInputname.bind(this)}>
            </Input>
          </View>
        </View>

        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-3 '>学号</View>
          <View className='text-normal'>
            <Input
              type='text'
              placeholder='输入学号'
              value={inputSno}
              onInput={this.onInputSno.bind(this)}>
            </Input>
          </View>
        </View>

        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-3 '>  Q Q</View>
          <View className='text-normal'>
            <Input
              type='text'
              placeholder='输入QQ号'
              value={inputQQ}
              onInput={this.onInputQQ.bind(this)}>
            </Input>
          </View>
        </View>

        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-3 '>电话号码</View>
          <View className='text-normal'>
            <Input
              type='text'
              placeholder='输入电话号码'
              value={inputTel}
              onInput={this.onInputTel.bind(this)}>
            </Input>
          </View>
        </View>



      </Board>

      <View className='at-row at-row__justify--center mt-4'>

        <AtButton type='primary' circle style='width:100vw' className='m-2' onClick={this.onAppilcation}> 提交申请  </AtButton>

      </View>
    </View>)
  }
}

export default projectApply
