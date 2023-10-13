import React from 'react'
import { Typography } from '@material-tailwind/react'

export const HeroHeader = () => {
  return (
    <div className='bg-purple-400 flex items-center justify-center h-48'>
      <Typography variant='h1' color='white'>AmazonHack</Typography>
    </div>
  )
}