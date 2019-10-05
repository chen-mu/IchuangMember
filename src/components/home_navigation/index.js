import Taro from '@tarojs/taro'


import { View, Image, Form } from '@tarojs/components'
import BaseComponent from '@components/base'
import { HOME_NAVS } from '@constants/home'
import { PAGE_MEMBER_INDEX,PAGE_ACTICITY_INDEX ,PAGE_MATCH_INDEX} from '@constants/page'
import Board from '../board'


class Navigation extends BaseComponent {

  static defaultProps = {

  }

  onClick(value){

  switch(value){
    case 0:{
      Taro.navigateTo({
        url:PAGE_MEMBER_INDEX
      })
      break;
    }
    case 1:{
      Taro.navigateTo({
        url:PAGE_ACTICITY_INDEX
      })
      break;
    }
    case 2:{
      Taro.navigateTo({
        url:PAGE_MATCH_INDEX
      })
      break;
    }
  }

  }
  render() {


    return (
      <Board className='m-2'>
        <View className='py-3 at-row at-row__justify--around ' >
          { HOME_NAVS &&HOME_NAVS.map((i) =>
            <View key={i.id} onClick={this.onClick.bind(this,i.id)}>
              <View className='at-col'>
                <Image src={i.src} style='width:80px;height:80px' className='at-row at-row__justify--center' ></Image>
                <View className='at-row at-row__justify--center'>{i.message}</View>

              </View>

            </View>
          )}
        </View>
      </Board>
    )
  }
}

export default Navigation
