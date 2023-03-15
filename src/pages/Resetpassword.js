import React from 'react';
import { Button } from 'antd';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';

const Resetpassword = () => {
  return (
    <div>
     <div className='py-5' style={{background:'#1d2132', minHeight:'100vh'}}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3 '>
        <h3 className='text-center'>Reset</h3>
        <p className='text-center'>Reset password and Confirm</p>
        <form style={{height:'15rem'}}>
        <CustomInput type='password' label='New Password' id='pass'/>
        <CustomInput type='password' label='Confirm Password' id='pass'/>
        <Link to='/'
        type='submit'
        className='border-0 px-3 py-2 fw-bold w-100 text-center text-white'
        style={{background:'#1d2132'}}>Reset</Link>
        </form>

      </div>
    </div>
    </div>
  );
}

export default Resetpassword;
