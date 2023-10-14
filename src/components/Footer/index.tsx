import { Box, Typography } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import React from 'react'

function Footer() {
  return (
    <Box component={'footer'} className='min-h-[400px] bg-mainGreen mt-[160px] text-white flex flex-row items-center'>
      <div className='flex flex-col pt-4 sm:flex-row justify-between items-center w-full px-[100px]'>
        <div className='flex flex-col gap-4'>
          <img src="/logo-white.svg" alt="" />
          <p className='text-[28px] font-medium'>AmazonHack</p>
          <p className='w-[210px] text-center text-sm'>
            Amazônia Conectada: <br />O futuro é agora
          </p>
        </div>
        <div>
          <p className='font-semibold text-xl mb-6'>Fale conosco</p>
          <div className='flex gap-2 font-medium mb-4'>
            <EmailRoundedIcon htmlColor='#fff' />
            <p>
              amazonhack@gmail.com
            </p>
          </div>

        </div>
      </div>
    </Box>
  )
}

export default Footer