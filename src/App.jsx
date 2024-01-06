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
    <main>
        <Typography style={kalamHeadingStyle} align='center' component='h1'>
          ExpenseApp
        </Typography>

        <Stack
          direction='row'
          gap={2}
          justifyContent='space-between' // Cambiado de 'space-around' a 'space-between'
          style={{ width: '100%', marginTop: '2rem' }} // Añadido margen superior y ancho del 100%
        >
          <Menu />
          <Results />
        </Stack>
    </main>
  )
}

export default App