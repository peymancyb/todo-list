import {
  useState,
  useEffect
} from "react";
import {
  getTodosAction,
  deleteTodoAction,
  editTodoAction,
  createTodoAction
} from "../../../redux/Todo/actions";
import {
  useSelector,
  useDispatch
} from "react-redux";

const useTodos = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.Todo.todos);
  const loading = useSelector(store => store.Todo.pending);

  const [todos, setTodos] = useState(null);

  const deleteTodo = id => dispatch(deleteTodoAction(id));

  const editTodo = (id, item) => {
    dispatch(editTodoAction(id, item));
  };

  const createTodo = title =>
    dispatch(createTodoAction({
      title,
      userId: 1,
      completed: false
    }));

  const handleToggle = id =>
    setTodos(prevState =>
      prevState.map(e =>
        id === e.id ? {
          ...e,
          editable: !e.editable
        } : {
          ...e
        }
      )
    );
  const handleChange = (title, id) =>
    setTodos(prevState =>
      prevState.map(e => (id === e.id ? {
        ...e,
        title
      } : {
        ...e
      }))
    );

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setTodos(data.map(e => ({
        ...e,
        editable: false
      })));
    }
  }, [data]);

  return {
    todos,
    handleToggle,
    loading,
    editTodo,
    deleteTodo,
    createTodo,
    handleChange
  };
};

export default useTodos;