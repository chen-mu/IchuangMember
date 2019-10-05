import {
  TYPE_ACTIVITY_LIST,
  ACTIVITY_DEFAULT,
  SET_NEXT_PAGE_ACTIVITY_LIST,
} from '@constants/activity'

export default function user(state = ACTIVITY_DEFAULT, action) {
  switch (action.type) {
    case TYPE_ACTIVITY_LIST: {
      const { rows, total,  } = action.payload
      return { rows, total,  }
    }

    case SET_NEXT_PAGE_ACTIVITY_LIST: {
      const { rows: oldList } = state
      const { rows, total } = action.payload
      return { rows: [...oldList, ...rows], total,}
    }


    default: {
      return state
    }
  }
}
