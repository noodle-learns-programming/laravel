export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const ADDMORE_COUNTER = 'ADDMORE_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

/**
 |--------------------------------------------------------------
 | Cho nay return ra mot funciton voi hai input la:
 | dispatch va getState, vay co nghia la khi redux goi cai 
 | action nay no se truyent theo hai params la dispatch + getState
 | getState cung la mot function
 |--------------------------------------------------------------
 */
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
    //Cho nay hoan toan co the return increment khong ta?
  }
}

export function addMore(value) {
  return {
    type  : ADDMORE_COUNTER,
    value : value
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
