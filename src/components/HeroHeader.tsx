import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

export const HeroHeader = () => {
  return (
    <Box component={'header'} className='bg-mainGreen h-[220px] flex items-center justify-between'>
      <Box className='flex items-center justify-between w-full px-16 gap-4 flex-col lg:flex-row'>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={'/logo-white.svg'} alt='' />
          <Typography variant='h3' color='white'>AmazonHack</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Link href={'/register'}>
            <Button className='bg-white text-mainGreen hover:bg-silver rounded-2xl px-6'>Cadastre a sua empresa</Button>
          </Link>
          <Link href={'/login'}>
            <Button className='bg-white text-mainGreen hover:bg-silver rounded-2xl px-6'>
              Faça Login
            </Button>
          </Link>
        </Box>

      </Box>
    </Box >
  )
}
