import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import * as memberActions from '@actions/member'
import { AtAvatar } from 'taro-ui'
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
    id: 0,
    name: '',
    headImage: '',
    school: '',
    sex: '',
    grade: '',
    soc: '',
    apartment: '',
    interest: '',
  }


  async componentWillMount() {
    const { id } = this.$router.params
    const { data: { Member } } = await this.props.dispatchMemberListInformation({ id })
    console.log(Member)
    this.setState({
      id: Member.id,
      name: Member.name,
      headImage: Member.photo,
      school: Member.school_name,
      sex: Member.sex,
      grade: Member.grade,
      soc: Member.club_name,
      apartment: Member.department_name,
      interest: Member.interest,
      major:Member.major
    })
  }

  render() {
    const { id, name, headImage, school, sex, grade, soc, apartment, interest,major } = this.state
    return (<View >
      <Board border='bottom'>
        <View className='at-row at-row__justify--between '>
          <View className='at-col-5 text-huge at-row at-row__align--center ml-3'>{name}</View>
          <View className='at-col-5 my-3'>
            <AtAvatar  image={headImage} size='large' />
          </View>
        </View>
      </Board>

      <Board className='m-2 p-2'>
        <View className='at-row'>
          <View className='at-col-5 ml-2'>学号</View>
          <View className='at-col-5'> {id}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>学校</View>
          <View className='at-col-5'> {school}</View>
        </View>
        <View className='line mt-2'></View>
        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>年级</View>
          <View className='at-col-5'> {grade}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>学院</View>
          <View className='at-col-5'> {major}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>性别</View>
          <View className='at-col-5'> {sex}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>社团</View>
          <View className='at-col-5'> {soc}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>部门</View>
          <View className='at-col-5'> {apartment}</View>
        </View>
        <View className='line mt-2'></View>

        <View className='at-row mt-2'>
          <View className='at-col-5 ml-2'>兴趣</View>
          <View className='at-col-5'> {interest}</View>
        </View>


      </Board>
    </View>)
  }
}

export default MemberIndex
