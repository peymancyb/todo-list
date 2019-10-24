import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import Todos from './helpers';
import uniqid from 'uniqid';

const serverConfiguration = {
    PORT: 8080
};

const {
    PORT
} = serverConfiguration;
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/todos', (req, res) => {
    const todos = Todos.getTodoList();
    res.send(todos);
});

server.post('/todos', (req, res) => {
    const {
        body
    } = req;
    const newTodo = {
        ...body,
        id: uniqid()
    };
    Todos.addTodo(newTodo);
    res.send(newTodo);
});


server.put('/todos/:id', (req, res) => {
    const todoId = req.url.split('/')[2];
    const changedTodo = req.body;
    Todos.editTodo(todoId, changedTodo);
    res.send(Todos.getTodoList());
});


server.delete('/todos/:id', (req, res) => {
    const todoId = req.url.split('/')[2];
    Todos.removeTodo(todoId);
    res.send(Todos.getTodoList());
});


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));