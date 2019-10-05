import Taro from '@tarojs/taro'


import { View,} from '@tarojs/components'


import matchItem from '@components/match-item'
import BaseList from '@components/base-list'


class matchList extends BaseList {

  state = {


  }

  render() {
    const { items } = this.props

    return (
      <View >
        {items && items.map(i =>
          <matchItem
            key={i.id}
            item={i}
          />
        )
        }
      </View>
    )
  }
}

export default matchList
