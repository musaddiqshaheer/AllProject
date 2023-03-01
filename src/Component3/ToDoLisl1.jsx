import React, { useState } from "react";



export const ToDoList1 = () => {
    const [todo, setTodo] = useState([])
    const [copytodo, setCopyTodo] = useState([])
    const [text, setText] = useState("")
    const handleAdd = () => {
        if (!text.trim()) return
        setTodo([...todo, text])
        setCopyTodo([...todo, text])
        setText("")
    }
    const handleDelete = (index, id) => {
        const deleteText = todo.filter((item, ind) => !ind == id)
        setTodo(deleteText)
    }
    const handleSearch = (value) => {
        const searchText = copytodo.filter((elem) => elem.toUpperCase().includes(value.toUpperCase()))
        setTodo(searchText)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text" placeholder="Search Text" onChange={(e) => handleSearch(e.target.value)} />
            <input type="text" placeholder="Add Text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => handleAdd()}>AddText</button>
            <ul>
                {todo.map((item, index) => {
                    return (
                        <li key={index}>{item}
                            <button onClick={() => handleDelete(item, index)}>Delete</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}