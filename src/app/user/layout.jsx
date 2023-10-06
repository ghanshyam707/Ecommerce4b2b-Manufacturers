'use client'

import { Avatar, Paper } from "@mui/material";
import Navbar from "../Components/NavBar/NavBar";
import styles from './user.module.scss'
import { getBasicDetails } from "@/app/_services/user.service";
import {  useEffect, useState } from "react";

export default function userlayout({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
      (async () => {
        let userData = await getBasicDetails();
        setUser(userData);
      })();
    }, []);
  return (
    <>
      <div className="d-flex ">
        <Paper
          elevation={2}
          className={`${styles["main-content"]}`}
        >
          <Paper
            elevation={2}
            className={`${styles["comapany-banner"]} p-3`}
          >
            <div className="d-flex align-items-center">
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                }}
              >
                {user &&
                  user.industryname
                    .split(" ")
                    .map((item) => item.charAt(0))
                    .join("")}
              </Avatar>
              <h4 className="m-0 ps-3">{user?.industryname}</h4>
            </div>
          </Paper>
          {children}
        </Paper>
        <div className={`${styles["navbar"]} `}>
          <Navbar />
        </div>
      </div>
    </>
  );
}
