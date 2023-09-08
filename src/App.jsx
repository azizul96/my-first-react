import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'


function App() {
  
  const actors = [

    {id:1, name: "Nisho", age: 40},
    {id:2, name: "Apurbo", age: 42},
    {id:3, name: "Tawsif", age: 35},
    {id:4, name: "Shawon", age: 36}
  ]

  return (
    <>
      <h1 className='font-bold'>Vite + React</h1>
      {
        actors.map(actor => <Actor actor = {actor}></Actor>) 
      }
      {/* <Person></Person>
      <Person1 name="Alamin" age="27"></Person1>
    
      <Student name="Alamin" age="26"></Student>
      <Student name="Alif" age="25"></Student>


      <Todo task="Core Concept" isDone={true}></Todo>
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Learn JSX" isDone={true}></Todo> */}
    </>
  )
}

function Person (){
  const age = 25
  const person = {name:'Alif', age: 25}
  return (
  <h3>I am a person with name {person.name} and age is {age}</h3>
  )
}


function Student(props){
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>My Name is: {props.name}</p>
      <p>My Age: {props.age}</p>
    </div>
  )
}

function Person1 ({name,age}){
  return (
    <div className='person1'>
      <h3>I am a person </h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default App
