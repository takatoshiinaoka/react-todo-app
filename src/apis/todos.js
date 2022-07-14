// "./apis" <= モックサーバーと通信するファイルを格納するディレクトリ
// "todos.js" <= サーバーとの通信用ファイル
// 作成したモックサーバーとの通信に axios を利用する
import axios from "axios"

const todoDataUrl = "http://localhost:3100/todos"

export const getAllTodosData = async () => {
    const response =  await axios.get(todoDataUrl)
    return response.data
}

export const addTodoData = async (todo) => {
    const response = await axios.post(todoDataUrl, todo)
    return response.data
}

export const deleteTodoData = async (id) => {
    await axios.delete(`${todoDataUrl}/${id}`)
    return id
}

export const updateTodoData = async (id, todo) => {
    const response = await axios.put(`${todoDataUrl}/${id}`, todo)
    return response.data
}