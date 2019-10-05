import Taro from '@tarojs/taro'


import { View,Image } from '@tarojs/components'
import { PAGE_PROJECT_DETAIL } from '@constants/page'
import BaseComponent from '@components/base'

class studyItem extends BaseComponent {

  static defaultProps = {

  }

  //前往详情页面
  onNavDetail(value) {
    console.log(value)
    Taro.navigateTo({
      url: `${PAGE_PROJECT_DETAIL}?name=${value.name}`
    })
  }
  render() {
    const { item } = this.props

    return (
      <View className=' mx-3 mt-1 '  >
       <View className='at-row page-sublet' onClick={this.onNavDetail.bind(this,item)}>
          <View className='at-col-5'>
            <Image src={item.photo} className='page-sublet-image' mode='aspectFill'></Image>
          </View>

          <View className='at-col at-col-6 m-2' style='position:relative'>
            <View className='text-normal text-bold at-row at-row__justify--between'>
              <View  style=' overflow: hidden; text-overflow: ellipsis;white-space: nowrap;width:30vw' >
                {item.name}
              </View >
              <View  className='page-house page-middile at-col-3'>{item.rank}</View>
            </View>

            <View className='text-normal mt-2 ' style=' overflow: hidden; text-overflow: ellipsis;white-space: nowrap;width:50vw'>{item.introduction}</View>
            <View className='at-row at-row__justify--between' style='position:absolute;bottom:2% '>
              <View className='at-col-2 page-middile text-small '></View>
              <View className='at-col-8 at-row page-house page-middile'>
                <View className=' text-normal'>起始者：</View>
                <View className='text-normal'>{item.post_name}</View>
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

export default studyItem
