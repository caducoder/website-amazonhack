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
          <Typography className='text-[28px]'>AmazonHack</Typography>
          <Typography width={207}>
            Juntos tornamos Amazonas mais conectado
          </Typography>
        </div>
        <div>
          <Typography>Fale conosco</Typography>
          <div>
            <EmailRoundedIcon htmlColor='#fff' />
            <Typography>
              amazonhack@gmail.com
            </Typography>
          </div>
          <div>
            <PlaceRoundedIcon htmlColor='#fff' />
            <Typography>
              Rua xxx, Manaus - AM cep: 123.123-000
            </Typography>
          </div>
          <div>
            <LocalPhoneRoundedIcon htmlColor='#fff' />
            <Typography>
              92 12345-1234
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Footer