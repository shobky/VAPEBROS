import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = ({login}) => {
  return (
    <div>
        <button className='login-with-google' onClick={() => login()}> <FcGoogle className='login-with-google__ico'/> Continue with google</button>
    </div>
  )
}

export default Login