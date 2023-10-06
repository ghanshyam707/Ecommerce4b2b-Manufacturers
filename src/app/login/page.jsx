'use client'
import Register from './register';
import styles from './login.module.scss';
import { useState } from 'react';
// import PressedTile from '../Components/PressedTile/PressedTile';
import Login from './Login';
import { Button } from '@mui/material';

export default function login({ }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className={styles["center"]}>
        <div className={styles["container"]}>
          <div className="d-flex align-items-center">
            <Button
              active={showLogin}
              handleClick={() => {
                setShowLogin(true);
              }}
            >
              Login
            </Button>
            <Button
              active={!showLogin}
              handleClick={() => {
                setShowLogin(false);
              }}
            >
              Register
            </Button >
          </div>
          <hr></hr>
          {showLogin ? (
            <Login {...{ setShowLogin }} />
          ) : (
            <Register {...{ setShowLogin }} />
          )}
        </div>
      </div>
    </>
  );
}
