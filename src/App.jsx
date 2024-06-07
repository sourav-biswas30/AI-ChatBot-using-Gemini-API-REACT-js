import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer]= useState("");

  async function genAns(){
    setAnswer("...Your answer is being generated. Please bear with me.");
    const response= await axios({
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key= USE YOUR OWN GEMINI API HERE, I WITHDREW MINE AS IT'S CONFIDENTIAL",
    method:"post",
    data: {
      contents:[
        {parts:[{text:question}]},
      ],
    },
  });
  setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
      <h1>AI Chat App</h1>
      <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" row="10"></textarea>
      <button onClick={genAns}>Generate Response</button>
      <p>{answer}</p>
    </>
  )
}

export default App
