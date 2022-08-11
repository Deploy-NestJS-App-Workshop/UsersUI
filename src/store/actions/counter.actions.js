export const ACTION_INCREMENT = '[Counter] increment';
export const ACTION_DECREMENT = '[Counter] decrement';
export const ACTION_SET = '[Counter] set';

export function increment() {
  return {
    type: ACTION_INCREMENT
  }
}

export function decrement() {
  return {
    type: ACTION_DECREMENT
  }
}

export function setValue(payload) {
  return {
    type: ACTION_SET,
    payload
  }
}