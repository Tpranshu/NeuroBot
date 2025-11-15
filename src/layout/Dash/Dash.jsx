import React, { useEffect } from 'react'
import "./dash.css"
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import Chatlist from '../../components/chatlist/Chatlist';

const Dash = () => {

  const { userID, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userID) {
      navigate('/dashboard');
    }
  }, [isLoaded, userID, navigate]);

  if (!isLoaded) return "Loading... please wait";
  

  return (
    <div className='Dashlayout'>
      <div className="menu"><Chatlist /></div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Dash;
