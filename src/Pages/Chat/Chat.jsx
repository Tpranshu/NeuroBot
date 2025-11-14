import React from 'react'
import "./Chat.css"
import Chatlist from '../../components/chatlist/chatlist'
import N_prompt from '../../components/N_prompt/N_prompt'
import { data } from 'react-router-dom'

const Chat = () => {

 

  return (

    <div className='chatpage'>
      <div> <Chatlist /></div>
      <div className="wraper">
        <div className="chat">
          <div className="msg">welcome ! i am Neurobot </div>
          {/* <div className="msg user">Ask query</div> */}
          <div className="msg">Ask anything....</div>
          {/* <div className="msg user">Test msg from user</div> */}
          {/* <div className="msg user">Test msg from user</div>
          <div className="msg">Test msg from ai</div>
          <div className="msg user">Test msg from user</div>
          <div className="msg">Test msg from ai</div>
          <div className="msg user">Test msg from user</div>
          <div className="msg">Test msg from ai</div>
          <div className="msg user">Test msg from user</div>
          <div className="msg">Test msg from ai</div>
          <div className="msg user">Test msg from user</div>
          <div className="msg">Test msg from ai</div>
          <div className="msg user">Test msg from user</div> */}
          
          <N_prompt data={data}/>
          {/* <N_prompt /> */}

        </div>
      </div>
      
    </div>
  )
}

export default Chat
