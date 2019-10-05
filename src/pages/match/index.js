import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { PAYLOAD_MATCH_LIST } from '@constants/api'

import matchLists from '@components/match-list'

import * as matchActions from '@actions/match'



@connect(state => state, {
  ...matchActions,
})

class matchIndex extends Component {
  config = {
    navigationBarTitleText: '创业大赛',
    enablePullDownRefresh: false,
  }

  refmatchLists = (node) => this.matchList = node

  state = {
    payload: PAYLOAD_MATCH_LIST,
  }



  async componentDidMount() {
    const { payload } = this.state
    this.props.dispatchMatchList(payload)
  }



  render() {

    const { match } = this.props
    const { payload } = this.state

    return (<View className=' mb-2'>

      <matchLists
        items={match.rows}
        refs={this.matchList}
        defaultPayload={payload}
        dispatchList={this.props.dispatchMatchList}
        dispatchNextPageList={this.props.dispatchNextMatchList}
      />
    </View>)
  }
}

export default matchIndex
