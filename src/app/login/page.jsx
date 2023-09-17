'use client'
import Register from './register';
import styles from './login.module.scss';
import { useState } from 'react';
import PressedTile from '../Components/PressedTile/PressedTile';
import Login from './Login';

export default function login({ }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className={styles['center']}>
        <div className={styles['container']}>
          <div className='d-flex align-items-center'>
            <PressedTile active={showLogin} handleClick={()=>{setShowLogin(true)}}>Login</PressedTile>
            <PressedTile active={!showLogin} handleClick={()=>{setShowLogin(false)}}>Register</PressedTile>
          </div>
          <hr></hr>
          {showLogin ? <Login /> : <Register {...{setShowLogin}} />}
        </div>
      </div>
    </>
  );
}
