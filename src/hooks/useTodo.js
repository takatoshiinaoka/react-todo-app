// TODOの状態を管理するカスタムフック
import { useState, useEffect } from "react"
import { ulid } from "ulid"
import * as todoData from "../apis/todos"


export const useTodo = () => {

    const [todoList, setTodoList] = useState([])
    
    useEffect(() => {
        todoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse())
        })
    }, [])

    const toggleTodoListItemStatus = (id, done) => {
        const todoItem = todoList.find((item) => item.id === id)
        const newTodoItem = {...todoItem, done: !done}
        
        todoData.updateTodoData(id, newTodoItem).then((updateTodo) => {
            const newTodoList = todoList.map((item) => 
                item.id !== updateTodo.id ? item : updateTodo
            )
            setTodoList(nweTodoList)
        })
    }

    const addTodoListItem = (todoContent) => {
        const newTodoItem = {
            content: todoContent,
            id: ulid(),
            done: falise
        }
        return todoData.addTodoData(newTodoItem).then((addTodo) => {
            setTodoList([addTodo, ...todoList])
        })
    }

    const deleteTodoListItem = (id) => {
        todoData.deleteTodoData(id).then((deleteListItemId) => {
            const newTodoList = todoList.filter(
                (item) => item.id !== deleteListItemId
            )
        })
    }

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem,
    }
}