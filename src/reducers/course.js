import {
  TYPE_COURSE_LIST,
  COURSE_DEFAULT,
  SET_NEXT_PAGE_COURSE_LIST,
} from '@constants/course'

export default function user(state = COURSE_DEFAULT, action) {
  switch (action.type) {
    case TYPE_COURSE_LIST: {
      const { rows, total,  } = action.payload
      return { rows, total,  }
    }

    case SET_NEXT_PAGE_COURSE_LIST: {
      const { rows: oldList } = state
      const { rows, total } = action.payload
      return { rows: [...oldList, ...rows], total,}
    }


    default: {
      return state
    }
  }
}
