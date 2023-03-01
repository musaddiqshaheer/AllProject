import React, { useState } from 'react'

export const Todo = () => {
    const [data,setData]=useState([])
    const [text,setText]=useState('')
    const [copyData,setcopyData]=useState([])
    const [selectedindex,setselectedindex]=useState(null)
    const [edit,setedit]=useState(false)

    const handleadd=()=>{
        if (edit){
            const editing=data.map((elem,ind)=>ind===selectedindex ? text : elem)
            setData(editing)
            setcopyData(editing)
            setText('')
            setedit(false)
        }else{
        if (!text.trim()) return
        setData([...data,text])
        setcopyData([...data,text])
        setText('')
        }
    }

    const handleDelete=(item,index)=>{
        const Deleting=data.filter((elem)=>elem != item)
        setData(Deleting)
    }

    const handleSearch=(value)=>{
        const searching = copyData.filter((elem,ind)=>elem.toUpperCase().includes(value.toUpperCase()))
        setData(searching)
    }

    const handleEdit=(elem,ind)=>{
        setText(elem)
        setselectedindex(ind)
        setedit(true)
    }
  return (
    <div>
        <input type="text" placeholder='Add here' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type="text" placeholder='Search here' onChange={(e)=>handleSearch(e.target.value)}/>
        <button onClick={handleadd}>Add</button>
        {data.map((item,index)=>{
            return(
                <h1 key={index}>my name is {item}
                <button onClick={()=>handleDelete(item,index)}>Delete</button>
                <button onClick={()=>handleEdit(item,index)}>Edit</button>
                </h1>
            )
        })}
    </div>
  )
}
