import { Button } from "@mui/material";
import React, { useState } from "react";

export const Home = () => {
  const [data, setdata] = useState([]);
  const [text, settext] = useState("");
  const [copydata,setcopydata]=useState([])
  const [selectedindex,setselectedindex]=useState(null)
  const [edit,setedit]=useState(false)

  const handleadd = () => {
    if (edit){
      const edited = data.map((item,index)=>
        index === selectedindex ? text : item
      )
      setdata(edited)
      setcopydata(edit)
      settext('')
      setedit(false)
    } else {
    if (!text.trim()) return;
    setdata([...data, text]);
    setcopydata([...data,text])
    settext("");
    }
  };

  const handledelete=(item,index)=>{
    const deleting = data.filter((elem,id)=>id !==index)
    setdata(deleting)
  }

  const handlesearch= (value) =>{
    const searched=copydata.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase()))
    setdata(searched)
  }

  const handleedit = (item,index) =>{
    settext(item)
    setselectedindex(index)
    setedit(true)
  }
    return (
    <div>
      <h1>first project</h1>
      <input
        type="text"
        placeholder="Add here"
        value={text}
        onChange={(e) => settext(e.target.value)}
         />{" "}
      <input
        type="text"
        placeholder="search here"
        onChange={(e) => handlesearch(e.target.value)}
         />{" "}
      <Button variant="contained" onClick={() => handleadd()} >
        Add
      </Button>
      {data.map((item, index) => {
        return (
          <ul>
            <li key={index}>{item}
            <Button variant="outlined"
             onClick={()=>handledelete(item,index)}>Delete</Button>
             <Button variant="outlined"
              onClick={()=>handleedit(item,index)}>
                Edit
             </Button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
