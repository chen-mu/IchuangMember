import Taro from '@tarojs/taro'
import classNames from 'classnames'

import { View } from '@tarojs/components'
import BaseComponent from '@components/base'

class Board extends BaseComponent {

  static defaultProps = {
    border: 'all', // 可选值 all, top, bottom, none
    fixed: false,
    title: false,
    fixedTop: false,
    color: '',
  }

  render() {
    const { className, border, fixed, title, titleColor, fixedTop, color } = this.props
    const rootClassName = ['board', `board--${border}`, `board--${color}`]
    const classObject = {
      'board--fixed': fixed,
      'board--fixed-top': fixedTop,
    }

    return (
      <View className={classNames(rootClassName, classObject, className)}>
        {title &&
          <View className={classNames(
            'board-header',
            `board-header--${titleColor}`,
            'at-row at-row__justify--center py-2 text-small',
          )}
          >{title}</View>
        }
        {this.props.children}
      </View>
    )
  }
}

export default Board
