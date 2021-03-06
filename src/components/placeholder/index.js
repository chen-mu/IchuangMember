import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

class Placeholder extends Component {

  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    className: '',
    quantity: 1,
    show: false,
    type: ''
  }

  render() {
    const classValue = classNames(
      'ui placeholder',
      this.props.className
    )
    const { show, quantity, type } = this.props
    const length = parseInt(quantity)
    const items = Array.from({ length })
    console.log(show)
    console.log(quantity)

    return (
      <View>
        {
          show &&
          items.map(i =>
            <View key={i}>
              <View className={classValue}>
                <View className='image rectangular'></View>
                <View className='line'></View>
                <View className='very short line'></View>
              </View>
            </View>
          )
        }
      </View>

       //* 骨架屏引入 */
    //    <Placeholder
    //    className='mt-2'
    //    show={loading && !mini}
    //    quantity={5}
    //  />

    )
  }
}

export default Placeholder
