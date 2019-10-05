import {
  TYPE_MEMBER_LIST,
  MEMBER_DEFAULT,
  SET_NEXT_PAGE_MEMBER_LIST,
} from '@constants/member'

export default function user(state = MEMBER_DEFAULT, action) {
  switch (action.type) {
    case TYPE_MEMBER_LIST: {
      const { rows, total,  } = action.payload
      return { rows, total,  }
    }

    case SET_NEXT_PAGE_MEMBER_LIST: {
      const { rows: oldList } = state
      const { rows, total } = action.payload
      return { rows: [...oldList, ...rows], total,}
    }


    default: {
      return state
    }
  }
}
