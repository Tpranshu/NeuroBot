import React from 'react'
import "./chatlist.css"
import { Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
const Chatlist = () => {
    // const { isPending,  data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch(`&{import.meta.env.VITE_API_URL}/api/user_chat`, {
    //             credentials: "include",
    //         }).then((res) =>
    //             res.json(),
    //         ),
    // })
    return (
        <div className='chatlist'>
            <span className='title'>DASHBOARD</span>
            <Link to="/dashboard">NEW CHAT</Link>
            {/* <Link to="/">EXPLORE MORE</Link> */}
            {/* <Link to="/">CONTACT</Link> */}
            <hr />
            {/* <span className='title'>HISTORY</span> */}
            <div className="list">

                {/* {isPending ? "loading..."  :
            

                
                data?.map((chat) => (


                    <Link to={`/dashboard/chat/${chat._id}`} key={chat._id}>
                        {chat.title}

                        </Link>
                ))} */}

            
                <Link to='/'>GO TO HOME</Link>
                <Link to='/dashboard'>RECENT CLICK</Link>
                <Link to='/'>PROFILE</Link>
                <Link to='/'>FEEDBACK</Link>
                <Link to='/'>HELP</Link>
                <Link to='/'>DOCS</Link>
                <Link to='/sign-in'>SIGN IN</Link>
                <Link to='/sign-out'>SIGN OUT</Link>

                <hr />
                <div className="upgrade">
                    <img src="/logo.png" alt="" />
                    <div className="texts">
                        <span>Upgrade to the Neurobot AI</span>

                        <span>To unlock all the features of Neurobot AI.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatlist
