import { Inter } from 'next/font/google'
import { Button, Typography } from "@mui/material";
import { HeroHeader } from '@/components/HeroHeader';
import Map from '@/components/Map/';
import Link from 'next/link'
import RatingPopup from '@/components/RatingPopup';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <HeroHeader />
      <div className='flex flex-col gap-2 items-end p-8'>
        <Link href='/register'>
          <Button
            className="bg-goldenrod text-white"
            variant='contained'
            sx={{ ":hover": { bgcolor: "#234" } }}
            color='primary'
          >
            Cadastrar empresa
          </Button>
        </Link>
        <Link href='/login'>
          <Button
            className="bg-goldenrod text-white"
            variant='contained'
            sx={{ ":hover": { bgcolor: "#234" } }}
            color='primary'
          >
            Login
          </Button>
        </Link>
      </div>
      <RatingPopup />
      <Map />
      <div className='flex flex-col items-center mt-4 border-darkgrey border-2 mx-8 mb-8'>
        <Typography variant="h3" className='mb-2 text-center'>Como o projeto funciona</Typography>
        <Typography className='mx-8'>
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
        </Typography>
        <Typography variant="h3" className='mb-2'>Objetivos</Typography>
        <Typography variant="h3" className='mb-2'>Contatos</Typography>
      </div>
    </main>
  )
}
