import React from 'react'
import  { useState } from 'react';
const Addtodo = ({addTodo}) => {
const[title,setTitle]= useState("");
const[desc,setDesc]= useState("");
const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Description cannot be empty");
    }
  else{
  addTodo(title,desc);
  setTitle(" ");
  setDesc(" ");
  }
}
  return (
   <>
     
      <form className="container ">
      <h3 className=" mx-3 my-3 " >Add a Todo</h3>  
  <div className="mb-3 ">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Todo Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}}id="desctiption"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Submit</button>
</form>
</>
  )
}

export default Addtodo
