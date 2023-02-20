import React, { useState } from "react";




export const TodoList =() =>{
    const [todo,setTodo] =useState([])
    const [copytodo,setCopyTodo] =useState([])
    const [text,setText] =useState ('')
    const handleAdd=()=>{
        if(!text.trim()) return
        setTodo([...todo,text])
        setCopyTodo([...todo,text])
        setText('')
    
     }
             const handleDelete =(index,id) =>{
            const deletetask=todo.filter((item,ind)=>!ind== id)
             setTodo(deletetask) 
    }
                const handleSearch=(value) =>{
                    const searchTask=copytodo.filter((item)=>
                    item.toUpperCase().includes(value.toUpperCase()))
                    setTodo(searchTask)
                }
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Search..." onChange={(e)=>handleSearch(e.target.value)}/>
            <input type="text"  placeholder="AddTask..." value={text} 
            onChange={(e)=>setText(e.target.value)}/> {' '}
            <button onClick={()=>handleAdd()} >Add</button>
            <ol>
                {todo.map((item,index)=>{
                    return(
                        <li key={index}>{item}
                        <button onClick={()=>handleDelete(item,index)}>Delete</button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}