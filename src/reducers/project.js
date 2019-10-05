import {
  TYPE_PROJECT_LIST,
  SET_NEXT_PAGE_PROJECT_LIST,
  PROJECT_DEFAULT,

} from '@constants/project'

export default function user(state = PROJECT_DEFAULT, action) {
  switch (action.type) {
    case TYPE_PROJECT_LIST: {
      const { rows, total,  } = action.payload
      return { rows, total,  }
    }

    case SET_NEXT_PAGE_PROJECT_LIST: {
      const { rows: oldList } = state
      const { rows, total } = action.payload
      return { rows: [...oldList, ...rows], total,}
    }


    default: {
      return state
    }
  }
}
