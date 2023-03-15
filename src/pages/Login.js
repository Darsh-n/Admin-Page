import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import './login.css';

const Login = () => {
  return (
<>
{/* <div class="login">
  <h1>Login to Web App</h1>
  <form method="post" action="">
    <p><input type="text" name="login" value="" lable="Username or Email"/></p>
    <p><input type="password" name="password" value="" lable="Password"/></p>
    <p class="remember_me">
      <label>
        <input type="checkbox" name="remember_me" id="remember_me"/>
        Remember me on this computer
      </label>
    </p>
    <p class="submit"><input type="submit" name="commit" value="Login"/></p>
  </form>
</div>

<div class="login-help">
  <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
</div> */}



<div className='py-5' style={{background:'#1d2132', minHeight:'100vh'}}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3 '>
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form style={{height:'15rem'}}>
        <CustomInput type='email' label='Email Address' id='Email'/>
        <CustomInput type='password' label='Password' id='pass'/>
        <Link to='/admin'
        type='submit'
        className='border-0 px-3 py-2 fw-bold w-100 text-center text-white'
        style={{background:'#1d2132'}}
        >Login</Link>
        </form>
        <p>forgot password <Link to='/forgot-password'>Click here</Link></p>
      </div>
    </div>
</>
    



  );
}

export default Login;
