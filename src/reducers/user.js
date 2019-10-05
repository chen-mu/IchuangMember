import {
  SET_USER,
  DELETE_USER,
  USER_DEFAULT
} from '@constants/user'

export default function user(state = USER_DEFAULT, action) {
  switch (action.type) {
    case SET_USER: {
      return { state, ...action.payload }
    }

    case DELETE_USER: {
      return { ...action.payload }
    }

    default: {
      return state
    }
  }
}
