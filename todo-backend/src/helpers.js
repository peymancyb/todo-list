class Todos {
    static todos = [];

    static getTodoList() {
        return Todos.todos;
    }

    static setTodoList(newTodoList) {
        Todos.todos = newTodoList;
    }

    static addTodo(todo) {
        Todos.todos.unshift(todo);
    }

    static removeTodo(todoId) {
        const todoIndex = Todos.todos.findIndex(item => item.id === todoId);
        Todos.todos.splice(todoIndex, 1);
    }

    static editTodo(id, todo) {
        const newTodoList = Todos.todos.map(item => {
            if (item.id === id) {
                return todo;
            }
            return item;
        });

        Todos.todos = newTodoList;
    }
}

export default Todos;