import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'

import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import BaseComponent from '@components/base'
import { HOME_SWIPER } from '@constants/home'
import * as roomActions from '@actions/member'
import Information from '../../assets/image/round-g.gif'

import Board from '../board'


@connect(state => state, {
  ...roomActions,
})
class SweiperHead extends BaseComponent {

  static defaultProps = {

  }

  render() {
    const { applySuccess, type } = this.props

    return (
      <View >
        {type === 'showHead' && <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {HOME_SWIPER.map(i =>
            <SwiperItem key={i.id} style=''>
              <Image src={i.src} style='width:100vw' ></Image>
            </SwiperItem>
          )}
        </Swiper>}

        {type === 'showSuccess' &&
          <Board className='m-2 p-2' >
            <View className='at-row at-row__align--center'>
              <Image className='' src={Information} style={{ width: '25px', height: '25px' }} className='at-row at-row__align--center at-col-1'></Image>
              <View className='at-col-8'>
                <Swiper
                  style={{ height: '30px' }}
                  circular
                  vertical
                  autoplay
                >
                  {applySuccess && applySuccess.map((i, index) =>
                    <SwiperItem key={i.id} className='at-row'>
                      <View className='at-row at-row__align--center text-normal'>{applySuccess[index].apply_name}成功申请{applySuccess[index].project_name}</View>
                    </SwiperItem>
                  )}
                </Swiper>
              </View>
            </View>
          </Board>}
      </View>
    )
  }
}

export default SweiperHead
