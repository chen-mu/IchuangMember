import BaseComponent from '@components/base'
import { PAGE_SIZE } from '@constants/api'

class BaseList extends BaseComponent {
  static defaultPayload = {
    items: [],
    message: '暂无数据',
    defaultPayload: {},
    dispatchList: null,
    row: 6,
    dispatchNextPageList: null,
  }

  state = {
    page: 1,
    loading: false,
    hasMore: true,
    payload: {},
  }

  componentDidShow() {
  // console.log(1111);
  // console.log(this.props.dispatchNextPageList)
    this.onReset()

  }

  onReset(payload) {
    // console.log(2222)
    // console.log(this.state.payload)
    payload = payload || this.props.defaultPayload

    this.setState({
      page: 1,
      payload,
      loading: false,
      hasMore: true,
    }, () => this.onNextPage())
  }

  onNextPage() {
    // console.log(3333)
    let { page, payload, loading, hasMore } = this.state
    console.log(payload)
    let { row } = this.props

    if (!hasMore || loading || !this.props.dispatchList || !this.props.dispatchNextPageList) return;

    this.setState({ loading: true })

    payload = { ...payload, page: page }

    const onSuccess = res => this.setState({
      page: page + 1,
      loading: false,
      hasMore: res.data.data.total > row * page,
    })

    const onFail = () => this.setState({
      loading: false,
      hasMore: false,
    })

    page === 1
      ? this.props.dispatchList(payload).then(onSuccess).catch(onFail)
      : this.props.dispatchNextPageList(payload).then(onSuccess).catch(onFail)
  }
}

export default BaseList
