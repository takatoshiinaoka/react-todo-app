import React, { useRef } from "react"
import { useTodo } from "../hooks/useTodo"

// TodoTitleコンポーネント
const TodoTitile = ({ titile, as }) => {
  if(as === "h1") return <h1>{titile}</h1>
  if(as === "h2") return <h2>{titile}</h2>
  return <p>{titile}</p>
}

// TodoItemコンポーネント
const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done)
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id)
  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  )
}

// TodoListコンポーネント
const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem 
          todo={todo} 
          key={todo.id}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem} 
        />
      ))}
    </ul>
  )
}

// TodoAddコンポーネント
const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  )
}


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

  console.log("TODOリスト：", todoList)

  const inCompletedList = todoList.filter((todo) => !todo.done)
  const completedList = todoList.filter((todo) => todo.done)

  return (
    <>
      <TodoTitile titile="TODO進捗管理" as="h1" />
      <TodoAdd inputEl={inputEl} handleAddTodoItem={handleAddTodoListItem}/>
      <TodoTitile titile="未完了TODOリスト" as="h2" />
      <TodoList 
        todoList={inCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
      <TodoTitile titile="完了TODOリスト" as="h2" />
      <TodoList 
        todoList={completedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  )
}

export default App