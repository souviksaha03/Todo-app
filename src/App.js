import logo from './logo.svg';
import React, {  useState,useEffect } from 'react';
import './App.css';
import Header from "./Header" ;
import Todos from "./Todos";
import Endpart from './Endpart';
import Addtodo from './Addtodo'

function App() {
 let initTodo;
 if(localStorage.getItem("todos")===null){
  initTodo = [];
 }
 else{
  initTodo =JSON.parse(localStorage.getItem("todos"))
 }
  const onDelete=(todo)=>{
      console.log("i am ondelete of",todo.title)
     setTodos(todos.filter((e)=>{
      return e!=todo;
     }));
     localStorage.setItem("todos",JSON.stringify(todos))
  }
  const addTodo=(title,desc)=>{
    const myTodo={
     title:title,
     desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)}
    const [todos, setTodos] = useState(initTodo)
 
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    
   

  return (
    <>
    
   <Header title="welcome"/>
 <Addtodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
 <Endpart/>
  </>
  );
}

export default App;
// 1:48:19 --> Done