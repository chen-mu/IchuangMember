import Taro from '@tarojs/taro'


import { View,} from '@tarojs/components'


import pointItem from '@components/point-item'
import BaseList from '@components/base-list'


class pointList extends BaseList {

  state = {


  }

  render() {
    const { items } = this.props

    return (
      <View >
        {items && items.map(i =>
          <pointItem
            key={i.id}
            item={i}
          />
        )
        }
      </View>
    )
  }
}

export default pointList
