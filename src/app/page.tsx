// src/app/page.tsx
'use client'

import { Button, Typography, Container } from '@mui/material'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        欢迎来到 Next.js + MUI 项目！
      </Typography>
      <Link href="/secondPage?message=Hello+from+Home">
        <Button variant="contained" color="primary">
          跳转到第二个页面
        </Button>
      </Link>
    </Container>
  )
}
