import {
  handleActions
} from "redux-actions";
import {
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  GET_TODOS
} from "./constants";

const initialState = {
  success: false,
  pending: false,
  redirect: false,
  error: null,
  todos: []
};

const Todo = handleActions({
    [GET_TODOS.PENDING]: (state = initialState) => ({
      ...state,
      pending: true
    }),
    [GET_TODOS.SUCCESS]: (state = initialState, {
      payload
    }) => {
      console.log('payload -> ', payload);
      return {
        ...state,
        pending: false,
        success: true,
        todos: payload
      }
    },
    [GET_TODOS.ERROR]: (state = initialState, {
      error
    }) => ({
      ...state,
      pending: false,
      success: false,
      error
    }),
    [CREATE_TODO.PENDING]: (state = initialState) => ({
      ...state,
      pending: true
    }),
    [CREATE_TODO.SUCCESS]: (state = initialState, {
      payload
    }) => {
      console.log('payload -> ', payload);
      return {
        ...state,
        pending: false,
        success: true,
        todos: [payload, ...state.todos]
      }
    },
    [CREATE_TODO.ERROR]: (state = initialState, {
      error
    }) => ({
      ...state,
      pending: false,
      success: false,
      error
    }),
    [DELETE_TODO.PENDING]: (state = initialState) => ({
      ...state,
      pending: true
    }),
    [DELETE_TODO.SUCCESS]: (state = initialState, {
      payload
    }) => {
      console.log('payload -> ', payload);
      return {
        ...state,
        pending: false,
        success: true,
        todos: payload
      }
    },
    [DELETE_TODO.ERROR]: (state = initialState, {
      error
    }) => ({
      ...state,
      pending: false,
      success: false,
      error
    }),
    [EDIT_TODO.PENDING]: (state = initialState) => ({
      ...state,
      pending: true
    }),
    [EDIT_TODO.SUCCESS]: (state = initialState, {
      payload
    }) => {
      return {
        ...state,
        pending: false,
        success: true,
        todos: payload
      }
    },
    [EDIT_TODO.ERROR]: (state = initialState, {
      error
    }) => ({
      ...state,
      pending: false,
      success: false,
      error
    }),
  },
  initialState
);

export default Todo;