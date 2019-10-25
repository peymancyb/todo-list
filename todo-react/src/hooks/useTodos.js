import {
  useState
} from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([{
    title: 'learn react',
    editable: false,
    checked: false,
    id: 1
  }]);

  const deleteTodo = (id) => {
    setTodos((prevState) =>
      prevState.filter((_, index) => (id !== index))
    );
  };

  const editTodo = (id) =>
    setTodos((prevState) =>
      prevState.map((todo, index) => id === index ? {
        ...todo,
        editable: !todo.editable
      } : {
        ...todo
      })
    );

  const createTodo = value => {
    setTodos((prevState) => [{
      title: value,
      editable: false,
      checked: false
    }, ...prevState])
  };

  const handleToggle = id => {
    return setTodos(prevState =>
      prevState.map((e, index) =>
        id === index ? {
          ...e,
          editable: !e.editable
        } : {
          ...e
        }
      )
    )
  };

  const handleChange = (title, id) =>
    setTodos(prevState =>
      prevState.map((e, index) => (id === index ? {
        ...e,
        title
      } : {
        ...e
      }))
    );

  return {
    todos,
    handleToggle,
    editTodo,
    deleteTodo,
    createTodo,
    handleChange
  };
};

export default useTodos;