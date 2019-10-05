import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import * as projectActions from '@actions/project'
import { AtTextarea, AtImagePicker, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

import Board from '../../components/board';



@connect(state => state, {
  ...projectActions
})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '关于我们',
    enablePullDownRefresh: true,
  }



  async  componentDidMount() {

  }



  render() {


    return (<View >
      <Board border='' className='p-2'>
        <View className='ml-2 mt-2 at-col-4 text-normal text-bold'>关于项目</View>
        <View className='mt-1 ml-2 text-normal text-muted '>2019年10月4日</View>
        <View className='line mt-2'></View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;此项目是作者大三工作室的项目，于2019年上半年以微信小程序原生语言进行开发。
          </Text>
        </View>

        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;很幸运，这个作品帮助我们拿到了‘小程序大赛’的‘华中赛区一等奖’。
          </Text>
        </View>
        <View className='line mt-2'></View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;现在，该作品小程序部分采用了Taro+Redux技术进行重构，性能以及代码的可读性都有了一个很大的提升；\n
            &nbsp;&nbsp;&nbsp;&nbsp;后台部分重构正在进行中
          </Text>
        </View>
      </Board>
      <Board border='' className='p-2 mt-2'>
        <View className='ml-2 mt-2 at-col-4 text-normal text-bold'>关于作者</View>
        <View className='mt-1 ml-2 text-normal text-muted '>2019年10月4日</View>
        <View className='line mt-2'></View>
        <View className='mt-2  text-normal'>
          <View className='ml-2 mt-2 at-col-4 text-normal text-bold'>袁阳</View>
          <View className='mt-1 ml-2 text-normal text-muted '>前端开发实习</View>
        </View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;刚步入职场的一位前端菜鸟，正在一步一步向前进.
          </Text>
        </View>

        <View className='mt-2  text-normal'>
          <View className='ml-2 mt-2 at-col-4 text-normal text-bold'>闵智超</View>
          <View className='mt-1 ml-2 text-normal text-muted '>预深圳大学硕士</View>
        </View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;后台部分的负责人，品学兼优的优秀学生，推免到深圳大学。
          </Text>
        </View>


      </Board>

      <Board border='' className='p-2 mt-2 mb-2'>
        <View className='ml-2 mt-2 page-middile text-bold'>总结</View>

        <View className='line mt-2'></View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;该项目是我们第一个完整的软件项目，这个项目对我而言，有这不一样的意义，
            我将尽我所能去完善和提升该项目的小程序部分。
          </Text>
        </View>
      </Board>

      <Board border='' className='p-2 mt-2 mb-2'>
        <View className='ml-2 mt-2 page-middile text-bold'>鸣谢</View>

        <View className='mt-2  text-normal'>
          <View className='ml-2 mt-2 at-col-4 text-normal text-bold'>黄鑫乘</View>
        </View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;感谢项目前期帮助该项目获取需求。
          </Text>
        </View>

        <View className='mt-2  text-normal'>
          <View className='ml-2 mt-2 at-col-4 text-normal text-bold'>胡启旺</View>
        </View>
        <View className='mt-2  text-normal'>
          <Text decode='true'>
            &nbsp;&nbsp;&nbsp;&nbsp;感谢帮助我们做演示视频。
          </Text>
        </View>
      </Board>





    </View>)
  }
}

export default DashboardIndex
