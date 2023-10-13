import { Inter } from 'next/font/google'
import { Button, Typography } from "@material-tailwind/react";
import { HeroHeader } from '@/components/HeroHeader';
import Map from '@/components/Map/';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <HeroHeader />
      <div className='flex flex-col gap-2 items-end p-8'>
        <Link href='/register'>
          <Button className='' color='purple'>Cadastrar empresa</Button>
        </Link>
        <Link href='/login'>
          <Button color='purple'>Login</Button>

        </Link>
      </div>
      <Map />
      <div className='flex flex-col items-center mt-4 border-purple-400 border-2 mx-8 mb-8'>
        <Typography variant="h3" className='mb-2'>Como o projeto funciona</Typography>
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
