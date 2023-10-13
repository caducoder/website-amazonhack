import { Inter } from 'next/font/google'
import { Box, Button, Typography } from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { HeroHeader } from '@/components/HeroHeader';
import Map from '@/components/Map/';
import Link from 'next/link'
import RatingPopup from '@/components/RatingPopup';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <HeroHeader />
      {/* <RatingPopup /> */}
      <div className='w-[95%] mx-auto lg:w-[80%]'>
        <Map />
      </div>
      <div className='flex flex-col items-center mt-4 mb-8'>
        <Typography variant="h3" className='mb-8 mt-10 font-semibold text-center text-goldenroad text-6xl'>Conheça o projeto</Typography>
        <Typography className='mx-8 text-lg max-w-[765px] text-center'>
          O AmazonHack foi desenvolvido com o objetivo de  aumentar a conectividade no estado do Amazonas. Aqui você terá acesso a todos os locais que possuem conexão de internet e poderá ver cadastrar sua empresa e todas as redes que forem instaladss ETCETCETC
        </Typography>
        <div className='mt-16 w-[80%] mx-auto'>
          <img src="/imagem-rio.png" alt="Imagem do Rio Amazonas" width={'100%'} />
        </div>

        <Box className="flex flex-row justify-between w-[80%] mt-[130px]">
          <Box>
            <Typography variant="h3" className='mb-2 text-goldenroad font-semibold text-6xl'>
              Objetivos
            </Typography>
            <Typography className='text-lg'>
              O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Typography>
            <div className='mt-14 flex flex-row gap-4 items-center'>
              <Box className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center rounded-xl p-2'>
                <CheckRoundedIcon fontSize='large' htmlColor='#fff' />
              </Box>
              <div className='flex flex-col gap-4'>
                <Typography variant='h5' className='text-2xl text-goldenroad font-bold'>
                  Aumentar a conexão
                </Typography>
                <Typography className='text-lg font-medium text-darkgrey'>
                  O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </Typography>
              </div>
            </div>
            <div className='mt-14 flex flex-row gap-4 items-center'>
              <Box className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center rounded-xl p-2'>
                <CheckRoundedIcon fontSize='large' htmlColor='#fff' />
              </Box>
              <div className='flex flex-col gap-4'>
                <Typography variant='h5' className='text-2xl text-goldenroad font-bold'>
                  Aumentar a conexão
                </Typography>
                <Typography className='text-lg font-medium text-darkgrey'>
                  O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </Typography>
              </div>
            </div>
            <div className='mt-14 flex flex-row gap-4 items-center'>
              <Box className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center rounded-xl p-2'>
                <CheckRoundedIcon fontSize='large' htmlColor='#fff' />
              </Box>
              <div className='flex flex-col gap-4'>
                <Typography variant='h5' className='text-2xl text-goldenroad font-bold'>
                  Aumentar a conexão
                </Typography>
                <Typography className='text-lg font-medium text-darkgrey'>
                  O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </Typography>
              </div>
            </div>
          </Box>
          <div>
            <img src="/casa-flutuante.png" alt="" />
          </div>
        </Box>
      </div>
      <Footer />
    </main>
  )
}
