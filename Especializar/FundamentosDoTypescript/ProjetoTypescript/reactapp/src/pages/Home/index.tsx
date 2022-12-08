import React, { useState, useEffect } from "react";
import "./styles.css";
import "../../components/Card";
import Card from "../../components/Card";
import {CardProps} from "../../components/Card";

type ProfileResponse = {
  name: string;
  avatar_url: string;
}
type User ={
  name: string;
  avatar: string;
}

const Home = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User)

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }
    
useEffect(() => {
  async function fetchData(){
    const response = await fetch("https://api.github.com/users/felipeleitesobral")
    const data = await response.json() as ProfileResponse;
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
  }

  fetchData();
  
}, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>Felipe</strong>
          <img src="https://github.com/felipeleitesobral.png" alt="Foto do Felipe" />
        </div>
      </header>
      <input type="text" placeholder="Digite o nome..." onChange={(e) => setStudentName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {
        students.map((student) => (<Card name={student.name} time={student.time} key={student.time}/>))
      }
    </div>
  );
}

export default Home