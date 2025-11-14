import React from 'react'
import "./Home_p.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Home_p = () => {

   const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard'); 
  };
  return (
    <div className='homepage'>
  
      <div className="left">
        <h1>Welcome to the NeuroBot!</h1>
        <h2>"I’m here to assist you with anything you need."</h2>
        <h3>
          This is a cutting-edge AI chatbot designed to assist you with a wide range of tasks. Whether you need help with answering questions, generating content, or simply having a conversation, NeuroBot is here to help.
        </h3>
       
         <button className='button' onClick={handleClick}>Ask Now!</button>
     
      </div>
      <div className="right">
        <div className="imgcontainer">
          <div className="bgcontainer">
            <div className="bg"></div>

          </div>
          <img src="botgif1.gif" alt="" className='bg-gif' />
        </div>
      </div>

      <div className="bottom">
        <img src="/logo.png" alt="" className='bottom_logo'/>
        <div className="links">
          <Link>Terms and conditions</Link>
          <span>||</span>
          <Link>Privacy policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Home_p
