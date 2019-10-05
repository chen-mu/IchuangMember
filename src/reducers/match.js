import {
  TYPE_MATCH_LIST,
  MATCH_DEFAULT,
  SET_NEXT_PAGE_MATCH_LIST,
} from '@constants/match'

export default function user(state = MATCH_DEFAULT, action) {
  switch (action.type) {
    case TYPE_MATCH_LIST: {
      const { rows, total,  } = action.payload
      return { rows, total,  }
    }

    case SET_NEXT_PAGE_MATCH_LIST: {
      const { rows: oldList } = state
      const { rows, total } = action.payload
      return { rows: [...oldList, ...rows], total,}
    }


    default: {
      return state
    }
  }
}
