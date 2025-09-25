import { useState } from "react"
import "./App.css"
import TaskInput from './components/TaskInput'
import Table from './components/Table'


export default function App() {
  const [list, setList] = useState([])
  const [newList, setNewList] = useState("")
  const [edit, setEdit] = useState(null)

  const handleAddorUpdate = () => {
    if (newList.trim() === "") return;
    if (edit !== null) {
      const updatedList = list.map((item) =>
        item.id === edit ? { ...item, text: newList } : item
      )
      setList(updatedList)
      setEdit(null)
    } else {
      setList([...list, { id: list.length + 1, text: newList }])
    }
    setNewList("")
  }

  const handleDelete = (removeid) => {
    const temparr = list.filter(item => item.id !== removeid)
    setList(temparr)
    if (edit === removeid) {
      setEdit(null)
      setNewList("")
    }
  }

  const handleEdit = (id) => {
    const taskToEdit = list.find((item) => item.id === id)
    setNewList(taskToEdit.text)
    setEdit(id)
  }

  const handleToggle = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } :
        item)
    setList(updatedList)
  }
  return (
    <>
      <div className="container">
        {/* Header */}
        <h2 className="title">Things To Do.</h2>

        {/* Input Bar */}
        <TaskInput newList={newList}
          setNewList={setNewList}
          edit={edit}
          handleAddorUpdate={handleAddorUpdate} />

        {/* Data Store Table */}
        <Table list={list}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleToggle={handleToggle} />
      </div >
    </>
  )
}
