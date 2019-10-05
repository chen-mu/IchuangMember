import Taro from '@tarojs/taro'


import { View,} from '@tarojs/components'


import projectItem from '@components/project-item'
import BaseList from '@components/base-list'


class studyList extends BaseList {

  state = {


  }

  render() {
    const { items } = this.props

    return (
      <View >
        {items && items.map(i =>
          <projectItem
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
