
'use client'
import "bootstrap/dist/css/bootstrap.css"
import './globals.css'
// import { Inter } from 'next/font/google'
// import { ThemeProvider } from "@mui/material"
import theme from "./Components/helper/theme"
import { ThemeProvider } from "@mui/material/styles"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
