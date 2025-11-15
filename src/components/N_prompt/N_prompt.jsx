import React from 'react'
import "./n_prompt.css"
import { useEffect, useRef } from 'react'
import model from '../../lib/Gemini'

import { useState } from 'react'
import Markdown from "react-markdown"


import Upload from '../upload/Upload'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { useNavigate } from 'react-router-dom'
const N_prompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const endRef = useRef(null)

  // const chat = model.startChat({
  //   history: [
  //     data?.history.map(({ role, parts }) => ({
  //       role,
  //       parts: [{ text: parts[0].text }],
  //     })),
  //   ],
  //   generationConfig: {
  //     // maxOutputTokens: 100,
  //   },
  // });

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [question, answer]);


  // const queryClient = useQueryClient();
  // const navigate = useNavigate();


  // const mutation = useMutation({
  //   mutationFn: async () => {
  //     const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat/${data._id}`, {
  //       method: "PUT",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ question: question.length ? question : undefined,
  //         answer
  //        }),
  //     });
  //     return await res.json();
  //   },
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["chat", data._id] }).then(()=>{
  //       setQuestion("")
  //       setAnswer("")

  //     });
      
  //   },
  // });









  const add = async (text) => {
    setQuestion(text)
    const result = await model.generateContent(text);
    const response = result.response;
    setAnswer(response.text());
    console.log(text);
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    add(text, false);
    // await fetch("http://localhost:3000/api/chat")
  };
  return (

    <>
      {question && <div className="message">{question}</div>}
      {answer && (
        <div className="q">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      {/* <button onClick={add}>TEST AI</button> */}
      <div className="end" ref={endRef}></div>
      <form className='newform' onSubmit={handleSubmit}>
        {/* <Upload/> */}
        {/* <button>
      <img src="/file_logo.jpg" alt="" />
     </button> */}
        <input id='file' type="file" multiple={false} hidden />
        <input type="text" name='text' placeholder='ask me....' />
        <button>
          <img src="/bg-forward.png" alt="" />
        </button>
      </form>
    </>

  )
}

export default N_prompt
