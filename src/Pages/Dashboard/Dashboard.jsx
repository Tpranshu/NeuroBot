import React from 'react'
import "./Dashboard.css"
// import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const queryClient = useQueryClient();
  const navigate = useNavigate();


  const mutation = useMutation({
    mutationFn: async (text) => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      return await res.json();
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user_chat"] });
      navigate(`/dashboard/chat/${id}`);
    },
  });





  // const { userId } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    mutation.mutate(text);
    // await fetch("http:localhost:3000/api/chat", {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userId, text }),
    // });
  };
  const handleClick = () => {
    navigate('/dashboard/chat/*'); 
  };
 

  return (

    <div className='dashboard'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>Neurobot</h1>
        </div>
        <div className="optionss">
          <div className="options"  onClick={handleClick}>
            <img src="/bg-logo.jpg" alt="" />
            <span>Click for New chat</span>
          </div>

          <div className="options" >
            <img src="/bg-analysis.jpg" alt="" />
            <span>Visual Analysis</span>
          </div>

          <div className="options">
            <img src="/bg-helpcode.png" alt="" />
            <span>Code Buddy</span>
          </div>
        </div>
      </div>
      <div className="f_Conatiner">
        <form onSubmit={handleSubmit}>
          <input type="text" name='text' placeholder='Ask me Query....' />
          <button>
            <img src="/bg-forward.png" alt="" className='forward_logo' onClick={handleClick} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
