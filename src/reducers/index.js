import { combineReducers } from 'redux'

import user from '@reducers/user'
import member from '@reducers/member'
import activity from '@reducers/activity'
import match from '@reducers/match'
import course from '@reducers/course'
import project from '@reducers/project'

export default combineReducers({
  user,
  member,
  activity,
  match,
  course,
  project,
})
