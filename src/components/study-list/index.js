import Taro from '@tarojs/taro'


import { View,} from '@tarojs/components'


import studyItem from '@components/study-item'
import BaseList from '@components/base-list'


class studyList extends BaseList {

  state = {


  }

  render() {
    const { items } = this.props

    return (
      <View >
        {items && items.map(i =>
          <studyItem
            key={i.id}
            item={i}
          />
        )
        }
      </View>
    )
  }
}

export default studyList
