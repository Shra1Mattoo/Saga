export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHANGE_BY_AMOUNT = 'CHANGE_BY_AMOUNT';
export const GET_IMAGES_FETCH = 'GET_IMAGES_FETCH';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const changeByAmount = val => ({
  type: CHANGE_BY_AMOUNT,
  payload: val,
});

export const getImagesFetch = () => ({
  type: GET_IMAGES_FETCH,
});
