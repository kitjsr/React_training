import React from 'react'
import './App.css';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

export const Home = () => {
  const student={
    "name":"Esha Kumari",
    "roll":123,
    "student_id":249001001146,
    "college":"Chaibasa Engineering College",
    "branch":"Computer Science and Engineering",
    "year":"2nd"
  }

  const data=[
    {
    "name":"Esha Kumari",
    "roll":1,
    "student_id":249001001146,
    "college":"Chaibasa Engineering College",
    "branch":"Computer Science and Engineering",
    "year":"2nd"
    },
    {
    "name":"Anushruti Mahato",
    "roll":2,
    "student_id":249001001147,
    "college":"Chaibasa Engineering College",
    "branch":"Computer Science and Engineering",
    "year":"2nd"
    }
  ];
  var students = ["Esha","Anushruti","Minu","Diksha"]
      students.push("xyz");
      students.pop();
      students.unshift("abc");
      students.shift();
      students.sort(); //ascending
      students.reverse();
      students.sort().reverse();
  return (
    <div>
      <h1>Student details</h1>
      <p>Name : {student.name}</p>
      <p>Roll : {student.roll}</p>
      <p>Student_id : {student.student_id}</p>
      <p>College : {student.college}</p>
      <p>Branch : {student.branch}</p>
      <p>Year : {student.year}</p>
      <h2>First student</h2>
      <p>Name : {data[0].name}</p>
      <p>Name : {data[0]["name"]}</p>
      <p>Roll : {data[0].roll}</p>
      <p>Student_id : {data[0].student_id}</p>
      <p>College : {data[0].college}</p>
      <p>Branch : {data[0].branch}</p>
      <p>Year : {data[0].year}</p>
      <h2>Second student</h2>
      <p>Name : {data[1].name}</p>
      <p>Roll : {data[1].roll}</p>
      <p>Student_id : {data[1].student_id}</p>
      <p>College : {data[1].college}</p>
      <p>Branch : {data[1].branch}</p>
      <p>Year : {data[1].year}</p>
        <h1>Home</h1>
        <p>Student : {students[0]}</p>
        <p>Student : {students[4]}</p>
        <p>Student : {students[-1]}</p>
        <p>Student : {students}</p>
        <ul>
          {
            students.map((student) => {
              return(
              <li>{student}</li>
              
            )
            }
            )
          }
        </ul>
      <Table striped bordered hover>
        <thead>
          
          <tr>
            <th>Sl</th>
            <th>Name</th>
          </tr>
        </thead>
      <tbody>
          {
            students.map((student,index) => {
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{student}</td>
                </tr>
              
            )
            }
            )
          }
      </tbody>
    </Table>
    
      <Table striped bordered hover>
        <thead>
          
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Student_id</th>
            <th>College</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
      <tbody>
          {
            data.map((dat,index) => {
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{dat.name}</td>
                  <td>{dat.roll}</td>
                  <td>{dat.student_id}</td>
                  <td>{dat.college}</td>
                  <td>{dat.branch}</td>
                  <td>{dat.year}</td>
                </tr>
              
            )
            }
            )
          }
      </tbody>
    </Table>
        <Alert variant="success">
          This is a {} alert—check it out!
        </Alert>
    </div>
  )
}
