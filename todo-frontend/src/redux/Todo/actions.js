import Http from "../../shared/Http";
import {
  GET_TODOS,
  DELETE_TODO,
  CREATE_TODO,
  EDIT_TODO
} from "./constants";

export const getTodosAction = () =>
  Http({
    method: "GET",
    path: "/todos",
    actionType: GET_TODOS,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
    }
  });

export const createTodoAction = data =>
  Http({
    method: "POST",
    path: `/todos`,
    actionType: CREATE_TODO,
    data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
    }
  });
export const editTodoAction = (id, data) => {
  return Http({
    method: "PUT",
    path: `/todos/${id}`,
    actionType: EDIT_TODO,
    data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
    }
  });
}

export const deleteTodoAction = id =>
  Http({
    method: "DELETE",
    path: `/todos/${id}`,
    actionType: DELETE_TODO,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
    }
  });