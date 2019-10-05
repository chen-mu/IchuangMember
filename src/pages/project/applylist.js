import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { PAYLOAD_COURSE_LIST } from '@constants/api'



import projectApply from '@components/project-apply'

import * as courseActions from '@actions/project'



@connect(state => state, {
  ...courseActions,
})

class projectList extends Component {
  config = {
    navigationBarTitleText: '申请项目',
    enablePullDownRefresh: false,
  }

  refcourseList = (node) => this.courseList = node

  state = {
    payload: PAYLOAD_COURSE_LIST,
    apply_ing:[],
    apply_success:[],
    apply_fail:[],
  }



  async componentDidMount() {
    const { payload } = this.state
     const {data} = await this.props.dispatchProjectApplication(payload)

     let apply_ing=[]
     let apply_success=[]
     let apply_fail = []
      for (var i= 0;i<data.rows.length;i++){

        if(data.rows[i].status===1){
          apply_ing.push(data.rows[i])
        }
        if(data.rows[i].status===2){
          apply_success.push(data.rows[i])
        }
        if(data.rows[i].status===2){
          apply_fail.push(data.rows[i])
        }
      }


    this.setState({
      apply_ing,
      apply_success,
      apply_fail
    })
  }




  render() {


    const {  apply_ing,apply_success,apply_fail } = this.state
    return (<View className=' mb-2'>

      <projectApply
        itemall={apply_ing}
        itemsuccess={apply_success}
        itemfail={apply_fail}
      />


    </View>)
  }
}

export default projectList
