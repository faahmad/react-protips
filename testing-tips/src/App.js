import React from "react";
import { fetchTodoById } from "./services/todo-service";

export default class App extends React.Component {
  state = { isLoading: true, todo: null };

  componentDidMount() {
    // using a random id...
    this.handleLoadTodo(1);
  }

  handleLoadTodo = async (id) => {
    const { data } = await fetchTodoById(id);
    this.setState({ todo: data, isLoading: false })
  };

  render() {
    const { isLoading, todo } = this.state;
    return <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && todo !== null && <TodoDetails todo={todo} />}
    </div>;
  }
}

function TodoDetails({ todo }) {
  return <div>
    <h1>{todo.title}</h1>
    <p>{todo.completed ? "completed" : "incomplete"}</p>
  </div>
}
