import React, { useState } from 'react'

export const Header = () => {
    let a=10, name="Esha Kumari", college="Chaibasa Engineering College",
    student_id=249001001146 ,year="2nd",branch="Computer Science and Engineering";
    const[count,setCount]=useState(23);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        Header
        <p>Roll : {a}</p>
        <p>Name: {name}</p>
        <p>College: {college}</p>
        <p>Student_Id: {student_id}</p>
        <p>Year: {year}</p>
        <p>Branch: {branch}</p>
        <p>Count: {count}</p>
        <button onClick={increment}>Test_increment</button>
        <button onClick={decrement}>Test_decrement</button>
    </div>
  )
}
