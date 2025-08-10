import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import router, { useRouter } from 'next/router';

export const HeroHeader = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  // console.log('User', user);
  return (
    <Box component={'header'} className='bg-mainGreen  flex items-center justify-between'>
      <Box className='flex items-center justify-between w-full px-4 py-4 sm:px-16 sm:py-8 gap-4 flex-col lg:flex-row'>
        <Box onClick={() => router.push('/')} sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
          <img src={'/logo-white.svg'} alt='' className='w-24 sm:w-40' />
          <h1 className='text-white text-2xl sm:text-4xl font-medium'>AmazonHack</h1>
        </Box>
        {!user ? (
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
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            <Link href={'/towers'}>
              <button className='bg-white text-mainGreen transition hover:bg-silver rounded-2xl px-6 py-2'>
                Antenas
              </button>
            </Link>
            <button onClick={() => logout()} className='bg-white text-mainGreen transition hover:bg-silver rounded-2xl px-6 py-2'>
              Sair
            </button>

          </Box>
        )}

      </Box>
    </Box>
  );
};
