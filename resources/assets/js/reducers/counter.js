import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADDMORE_COUNTER } from '../actions/counter'

export default function counter(state = 0, action) {
  console.log('action: ', state, action);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + (action.value || 1)
    case DECREMENT_COUNTER:
      return state - (action.value || 1)
    case ADDMORE_COUNTER:
      return state + (action.value || 10);
    default:
      return state
  }
}
