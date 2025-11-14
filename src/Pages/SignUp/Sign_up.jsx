import React from 'react'
import "./Sign_up.css"
import { SignUp } from '@clerk/clerk-react'
const Sign_up = () => {
  return (
     <div className='sign_up'>
    <SignUp path="/sign-up" signInUrl='/sign-in'/>
    </div>
  )
}

export default Sign_up
