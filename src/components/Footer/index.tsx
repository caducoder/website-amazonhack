import { Box, Typography } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import React from 'react'

function Footer() {
  return (
    <Box component={'footer'} className='h-[400px] bg-mainGreen mt-[160px] text-white flex flex-row items-center'>
      <div className='flex flex-row justify-between items-center w-full px-[100px]'>
        <div className='flex flex-col gap-4'>
          <img src="/logo-white.svg" alt="" />
          <p className='text-[28px] font-medium'>AmazonHack</p>
          <p className='w-[210px]'>
            Juntos tornamos Amazonas mais conectado
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
          <div className='flex gap-2 font-medium mb-4'>
            <PlaceRoundedIcon htmlColor='#fff' />
            <p>
              Rua xxx, Manaus - AM <br /> cep: 123.123-000
            </p>
          </div>
          <div className='flex gap-2 font-medium'>
            <LocalPhoneRoundedIcon htmlColor='#fff' />
            <p>
              92 12345-1234
            </p>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Footer