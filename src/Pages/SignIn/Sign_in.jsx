import React from 'react'
import "./Sign_in.css"
import { SignIn } from '@clerk/clerk-react'

const Sign_in = () => {
  return (
    <div className='sign_in'>
      <SignIn
        path="/sign-in"
        signUpUrl='/sign-up'
        forceRedirectUrl="/dashboard"
      />
    </div>
  )
}

export default Sign_in
