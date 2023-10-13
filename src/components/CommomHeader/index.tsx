import { Box, Typography } from '@mui/material'
import router from 'next/router'
import React from 'react'

function CommomHeader() {
  return (
    <Box component={'header'} className='bg-white h-[170px] flex items-center justify-between'>
      <Box className='flex items-center justify-between w-full px-4 sm:px-16 gap-4 flex-col lg:flex-row'>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }} onClick={() => router.push('/')}>
          <img src={'/logo-green.png'} alt='' />
          <Typography className='text-mainGreen text-3xl sm:text-5xl'>
            AmazonHack
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CommomHeader