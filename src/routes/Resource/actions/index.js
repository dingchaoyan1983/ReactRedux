import {REQUEST_STARTED, REQUEST_COMPELTED, REQUEST_FAILED} from '../modules/students';
import {CALL_API} from 'middlewares/api-call-middleware';
export function fetchStudents() {
  return {
    [CALL_API]: {
      types: {
        REQUEST_STARTED,
        REQUEST_COMPELTED,
        REQUEST_FAILED
      },
      url: '/api/friendships/resource/students'
    }
  }
}
