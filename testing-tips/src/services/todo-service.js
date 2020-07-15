import axios from "axios";

const ROOT_API_URL = "https://jsonplaceholder.typicode.com";
const TODO_API = "todos";

export function fetchTodoById(id) {
  return axios.get(`${ROOT_API_URL}/${TODO_API}/${id}`);
}
