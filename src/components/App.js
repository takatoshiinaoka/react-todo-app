import React, { useRef } from "react"
import { useTodo } from "../hooks/useTodo"
import { TodoTitle } from "./TodoTitle"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"


function App() {
  const { 
    todoList,   // TODOの現在の状態
    addTodoListItem,    // 新規TODOを追加する関数
    toggleTodoListItemStatus,   // done(完了/未完了)を反転させて更新する関数
    deleteTodoListItem    // TODOを削除する関数
  } = useTodo()

  const inputEl = useRef(null)
  
  const handleAddTodoListItem = () => {
    if(inputEl.current.value === "") return
    addTodoListItem(inputEl.current.value)
    inputEl.current.value = ""
  }

  const inCompletedList = todoList.filter((todo) => !todo.done)
  const completedList = todoList.filter((todo) => todo.done)

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd 
        buttonText="+ TODOを追加"
        inputEl={inputEl} 
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoList 
        todoList={inCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
      />
      <TodoList 
        todoList={completedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
      />
    </>
  )
}

export default App