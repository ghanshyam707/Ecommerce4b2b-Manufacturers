'use client'

import { useRouter } from "next/navigation";
import { login } from "../_services/login.service";
import { useForm, Controller } from "react-hook-form"
import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";

export default function Login({ setShowLogin }) {
  const {
    control,
    handleSubmit,
  } = useForm()
  const [isLogining, setIsLogining] = useState(false)
  const handleLoginClick = () => {
    setShowLogin(false);
  };

  const router = useRouter()
  const onFinish = async (values) => {
    setIsLogining(true)
    await login(values, router)
    setIsLogining(false)
  };
  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <form onSubmit={handleSubmit(onFinish)} className="d-flex align-items-center flex-column w-100">
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return <TextField
                id="email"
                label="Email"
                fullWidth
                size="small"
                margin="normal"
                {...field} />
            }}
          />



          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return <TextField
                id="email"
                label="Password"
                type='password'
                fullWidth
                size="small"
                margin="normal"
   

                {...field} />
            }}
          />


          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{width:'30%'}}
          >
            {isLogining ? <CircularProgress /> : 'Login'}
          </Button>
        </form>
        <hr></hr>
        <div>
          Not Registered ?
          <Button
            type="text"
            onClick={handleLoginClick}>
            {" "}
            Register here{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
