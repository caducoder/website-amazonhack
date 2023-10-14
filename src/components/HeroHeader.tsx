import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

export const HeroHeader = () => {
  return (
    <Box component={'header'} className='bg-mainGreen h-[220px] flex items-center justify-between'>
      <Box className='flex items-center justify-between w-full px-4 sm:px-16 gap-4 flex-col lg:flex-row'>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={'/logo-white.svg'} alt='' className='w-24 sm:w-40' />
          <h1 className='text-white text-2xl sm:text-4xl font-medium'>AmazonHack</h1>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Link href={'/register'}>
            <button className='bg-white text-mainGreen transition hover:bg-silver rounded-2xl px-6 py-2'>Cadastre a sua empresa</button>
          </Link>
          <Link href={'/login'}>
            <button className='bg-white text-mainGreen transition hover:bg-silver rounded-2xl px-6 py-2'>
              Faça Login
            </button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
