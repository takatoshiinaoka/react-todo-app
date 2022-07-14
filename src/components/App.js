import React, { useState, useEffect } from "react"
import axios from "axios" // モックサーバーとの通信のため axios を import

const todoDataUrl = "http://localhost:3100/todos"

const TodoTitile = ({ titile, as }) => {
  if(as === "h1") return <h1>{titile}</h1>
  if(as === "h2") return <h2>{titile}</h2>
  return <p>{titile}</p>
}

const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.content}
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  )
}

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl)
      setTodoList(response.data)
    }
    fetchData();
  }, [])

  console.log("TODOリスト：", todoList)

  const inCompletedList = todoList.filter((todo) => !todo.done)
  // console.log("未完了TODOリスト：",inCompletedList)

  const completedList = todoList.filter((todo) => todo.done)
  // console.log("完了TODOリスト：",completedList)

  return (
    <>
      <TodoTitile titile="TODO進捗管理" as="h1" />
      <textarea />
      <button>+ TODOを追加</button>
      <TodoTitile titile="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />
      <TodoTitile titile="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  )
}

export default App