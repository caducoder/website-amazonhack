import CompanyRegisterForm from '@/components/CompanyRegisterForm'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const Register = () => {
  const router = useRouter()
  return (
    <>
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
      <section className="w-[80%] mx-auto">
        <Box className='mb-10'>
          <Typography component={'h1'} gutterBottom className='text-center text-[40px] text-goldenroad font-semibold'>
            Cadastre sua empresa
          </Typography>
          <Typography className='text-center w-full sm:px-16 text-darkgrey'>
            Cadastrando sua empresa, você poderá realizar o registro de suas redes de transmissão que ficarão disponíveis no mapa AmazonHack.  Isso irá ajudar a filtrar os pontos de maior e menor conexão no estado do Amazonas.
          </Typography>
        </Box>
        <CompanyRegisterForm />
      </section>
    </>
  )
}

export default Register