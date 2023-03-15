import React from 'react';
import { Button } from 'antd';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <div>
      <div className='py-5' style={{background:'#1d2132', minHeight:'100vh'}}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3 '>
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Enter registered email to reset password </p>
        <form style={{height:'20rem'}}>
        <CustomInput type='email' label='Email Address' id='Email'/>
        
        <Link to='/reset-password'
        type='submit'
        className='border-0 px-3 py-2 fw-bold w-100 text-center text-white'
        style={{background:'#1d2132'}}>Send link</Link>
        </form>

      </div>
    </div>
    </div>
  );
}

export default Forgotpassword;
