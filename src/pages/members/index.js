import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { PAYLOAD_MEMBER_LIST } from '@constants/api'

import memberList from '@components/member-list'

import * as memberActions from '@actions/member'
import { AtIcon } from 'taro-ui'
import BaseComponent from '@components/base'
import Board from '@components/board'


@connect(state => state, {
  ...memberActions,
})

class MemberIndex extends BaseComponent {
  config = {
    navigationBarTitleText: '社员',
    enablePullDownRefresh: false,
  }



  state = {
    payloadMeber: PAYLOAD_MEMBER_LIST,
    InputValue:''
  }

  refmemberList = (node) => this.memberList = node

  async componentDidMount() {
    const { payloadMeber } = this.state
    const { user } = this.props
    this.props.dispatchMemberList({...payloadMeber,school_name:user.Member.school_name,club_name:user.Member.club_name})
  }

  onReachBottom() {

    this.memberList.onNextPage()
  }

  onInputName({currentTarget:{value}}){
    this.setState({
      InputValue:value
    })

  }
  onSearch(){
    const { payloadMeber,InputValue } = this.state
    this.props.dispatchMemberList({...payloadMeber,name:InputValue})
  }


  render() {
    const { member } = this.props

    const { payloadMeber } = this.state


    return (<View className=' mb-2'>
      <Board border='none' className='p-2' >

        <View className='page-middile at-row'>
          <View className='at-row at-row__align--center page-member-search text-normal'  >
            <AtIcon value='search' size='15' color='#0A0A0A' className='ml-2'></AtIcon>
            <Input
              className='ml-2'
              placeholder='请输入社员姓名或学号'
              onInput={this.onInputName}
            />
          </View>
          <View className='ml-2 page-middile page-member-button text-normal' onClick={this.onSearch} >
            搜索</View>
        </View>
      </Board>
      <View className='mt-3'>
        <memberList
          items={member.rows}
          ref={this.memberList}
          defaultPayload={payloadMeber}
          dispatchList={this.props.dispatchMemberList}
          dispatchNextPageList={this.props.dispatchNextPageMemberList}
        />
      </View>
    </View>)
  }
}

export default MemberIndex
