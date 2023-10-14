import { Montserrat } from 'next/font/google'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { HeroHeader } from '@/components/HeroHeader';
import Map from '@/components/Map/';
import RatingPopup from '@/components/RatingPopup';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${montserrat.className}`}
    >
      <HeroHeader />
      <div className='w-[95%] mx-auto lg:w-[80%] relative'>
        <RatingPopup />
        <Map />
      </div>
      <div className='flex flex-col items-center mt-4 mb-8'>
        <h1 className='mb-8 mt-10 font-semibold text-center text-goldenroad text-6xl'>
          Conheça o projeto
        </h1>
        <p className='mx-8 text-lg max-w-[765px] text-center'>
          O AmazonHack foi desenvolvido com o objetivo de  aumentar a conectividade no estado do Amazonas. Aqui você terá acesso a todos os locais que possuem conexão de internet e poderá ver cadastrar sua empresa e todas as redes que forem instaladss ETCETCETC
        </p>
        <div className='mt-16 w-[80%] mx-auto'>
          <img src="/imagem-rio.png" alt="Imagem do Rio Amazonas" width={'100%'} />
        </div>

        <article className="w-[95%] flex flex-col lg:flex-row justify-between sm:w-[80%] mt-[130px]">
          <section >
            <h2 className='mb-2 text-goldenroad font-semibold text-6xl'>
              Objetivos
            </h2>
            <p className='text-lg text-center lg:text-left'>
              O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div className='mt-14 flex flex-row gap-4 items-center'>
              <div className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center rounded-xl p-4'>
                <CheckRoundedIcon fontSize='large' htmlColor='#fff' />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-2xl text-goldenroad font-bold'>
                  Aumentar a conexão
                </p>
                <p className='text-lg font-medium text-darkgrey'>
                  O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
            <div className='mt-14 flex flex-row gap-4 items-center'>
              <div className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center rounded-xl p-4'>
                <CheckRoundedIcon fontSize='large' htmlColor='#fff' />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-2xl text-goldenroad font-bold'>
                  Aumentar a conexão
                </p>
                <p className='text-lg font-medium text-darkgrey'>
                  O Amazonhack tem como objetivo principal xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
            <div className='mt-14 flex flex-row gap-4 items-center'>
              <div className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center rounded-xl p-4'>
                <CheckRoundedIcon fontSize='large' htmlColor='#fff' />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-2xl text-goldenroad font-bold'>
                  Aumentar a conexão
                </p>
                <p className='text-sm sm:text-lg font-medium text-darkgrey'>
                  O Amazonhack tem como objetivo principal xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </div>
          </section>
          <div className='mt-10 lg:mt-0'>
            <img src="/casa-flutuante.png" alt="" />
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
