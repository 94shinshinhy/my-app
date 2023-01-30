import { configureStore } from '@reduxjs/toolkit';

// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

// 상태
const initstate = {
  number: 1,
  username: '',
};

// reducer
// 액션의 결과를 걸러냄
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; // return 되면 호출한 쪽에서 받는 게 아니라 return 되는 순간 ui변경
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default configureStore({
  reducer: reducer,
});
