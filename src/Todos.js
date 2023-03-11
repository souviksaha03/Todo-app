import React from 'react'
import TodosList from './TodosList' 

const Todos = (props) => {
  return (
    <>
    <h3 className=" mx-3 my-3" >Todos List</h3>  
    <div className="container">
        
       {props.todos.length===0? "No Todos To Display":
      props.todos.map((todo)=>{
        return <TodosList todo={todo} onDelete={props.onDelete}/>;
      })
    }
    </div>
    </>
  )
}

export default Todos
