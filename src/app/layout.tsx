// src/app/layout.tsx
'use client'
import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
