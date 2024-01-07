import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { Menu } from './components/Menu'
import { Results } from './components/Results'

function App() {
  const kalamHeadingStyle = {
    fontFamily: 'Kalam, sans-serif',
    fontWeight: 700,
    fontSize: '4.5rem',
    backgroundImage: `linear-gradient(135deg, #FFFF00 39%, oklch(59.53% 0.274 327.6 / 85.04%) 5%)`,
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <main style={{ overflowX: 'hidden', overflowY: 'auto' }}>
        <Typography style={kalamHeadingStyle} align='center' component='h1' sx={{ height: '6rem' }}>
          ExpenseApp
        </Typography>

        <div className='bodyContainer'>
          <Menu />
          <Results />
        </div>
    </main>
  )
}

export default App