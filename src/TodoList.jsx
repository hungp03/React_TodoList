import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { List, Grid } from "@mui/material";
import { useState, useEffect } from 'react';
const initData = () => {

    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) {
        return [];
    }
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(initData)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        console.log('Local storage saved!')
    }, [todos]);
    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter(e => e.id !== id)
        })
    }
    const handleToggle = (todoId) => {
        setTodos(prevTodo => (
            prevTodo.map(todo => {
                if (todo.id === todoId) {
                    return { ...todo, completed: !todo.completed }
                }
                else return todo
            })
        ))
    }
    const addTodo = (e) => {
        setTodos(prevTodo => {
            return [...prevTodo, { text: e, id: crypto.randomUUID(), completed: false }]
        }

        )
    }
    return (
        <List sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <TodoForm addTodo={addTodo} />
            {!todos.length && <p style={{ textAlign: 'center', opacity: 0.75 }}>Nothing here, add your first to-do here!</p>}
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    val={todo}
                    remove={() => removeTodo(todo.id)}
                    handleToggle={() => handleToggle(todo.id)}
                />
            ))}
        </List>
    )
}