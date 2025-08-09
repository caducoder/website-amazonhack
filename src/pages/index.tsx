import { useContext, useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { HeroHeader } from '@/components/HeroHeader';
import Map from '@/components/Map/';
import RatingPopup from '@/components/RatingPopup';
import Footer from '@/components/Footer';
import ObjectiveCard from '@/components/ObjectiveCard';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const [towers, setTowers] = useState<NetworkTower[]>([]);
  const towersCollectionRef = collection(db, "towers");

  const getTowersInfo = async () => {
    const data = await getDocs(towersCollectionRef);
    const fetchedTowers: NetworkTower[] = data.docs.map(doc => ({ ...doc.data(), key: doc.id }));

    setTowers(fetchedTowers);
  };

  useEffect(() => {
    getTowersInfo();
  }, []);


  return (
    <main
      className={`${montserrat.className}`}
    >
      <HeroHeader />
      <div className='w-[95%] mx-auto lg:w-[80%] relative'>
        <RatingPopup />
        <Map towerLocations={towers} />
      </div>
      <div className='flex flex-col items-center mt-4 mb-8'>
        <h1 className='mb-8 mt-10 font-semibold text-center text-goldenroad text-6xl'>
          Conheça o projeto
        </h1>
        <p className='mx-8 text-lg max-w-[1100px] text-center'>
          Nos dias de hoje, a internet e os dispositivos tecnológicos se tornaram uma parte essencial da vida em todo o mundo. Entretanto, é preocupante notar que a região da Amazônia ainda enfrenta um grande desafio quando se trata de acesso à internet e conectividade eficiente. Estudos recentes revelam que a conectividade na Amazônia está muito aquém da média nacional, o que gera sérios obstáculos em áreas cruciais como saúde, educação e progresso profissional. Segundo dados acessados pela Anatel no ano atual (2023), a média de cobertura móvel no Brasil é de 92,44%, sendo o Amazonas o 7° pior estado com quase 20% dos moradores sem cobertura.
        </p>
        <div className='mt-16 w-[80%] mx-auto'>
          <img src="/imagem-rio.png" alt="Imagem do Rio Amazonas" width={'100%'} />
        </div>

        <section className='flex flex-col items-center mt-4 mb-8'>
          <h1 className='mb-8 mt-10 font-semibold text-center text-goldenroad text-6xl'>
            Solução
          </h1>
          <p className='mx-8 text-lg max-w-[1100px] text-center'>
            Com base na nossa problemática foi desenvolvido um sistema de mapeamento abrangente que detecta as áreas com problemas de conectividade na região.  Esse sistema oferece uma visão clara e atualizada do status de implementação de antenas em todo o estado do Amazonas, o que, por sua vez, fornece informações valiosas para atrair investimentos direcionados às áreas que mais necessitam. Nosso objetivo é impulsionar o desenvolvimento regional, com impacto positivo em setores vitais como saúde, educação, preservação ambiental e empreendedorismo.
          </p>
          <div className='mt-16 w-[80%] mx-auto'>
            <img src="/floresta_floor-pov.png" alt="Visão de baixo pra cima da floresta" width={'100%'} />
          </div>
        </section>

        <article className="w-[95%] flex flex-col items-center lg:flex-row justify-between sm:w-[80%] mt-[130px]">
          <section className='flex-1'>
            <h2 className='mb-2 text-goldenroad font-semibold text-6xl'>
              Objetivos
            </h2>

            <ObjectiveCard
              titulo='Mapear a localização'
              icon={<CheckRoundedIcon fontSize='large' htmlColor='#fff' />}
            >
              Mapear a localização precisa de todas as antenas de comunicação na região do Amazonas, além de avaliar a eficácia da cobertura de sinal em toda a região, identificando áreas com problemas de conectividade.
            </ObjectiveCard>
            <ObjectiveCard
              titulo='Aprimorar a conectividade'
              icon={<CheckRoundedIcon fontSize='large' htmlColor='#fff' />}
            >
              Propor soluções para aprimorar a conectividade em áreas carentes, contribuindo para o desenvolvimento socioeconômico da região, permitindo melhor acesso à comunicação, serviços de emergência, educação e oportunidades de negócios.
            </ObjectiveCard>
            <ObjectiveCard
              titulo='Parceria com órgãos governamentais'
              icon={<CheckRoundedIcon fontSize='large' htmlColor='#fff' />}
            >
              Trabalhar em parceria com órgãos governamentais, provedores de serviços de internet, comunidades locais e organizações sem fins lucrativos para garantir a aceitação e o alinhamento com as necessidades locais.
            </ObjectiveCard>
            <ObjectiveCard
              titulo='Sistema de monitoramento'
              icon={<CheckRoundedIcon fontSize='large' htmlColor='#fff' />}
            >
              Implementar um sistema de monitoramento para acompanhar a eficácia das melhorias ao longo do tempo e realizar ajustes conforme necessário e comunicar de forma transparente os resultados do mapeamento.
            </ObjectiveCard>
          </section>
          <div className='mt-10 lg:mt-0'>
            <img src="/casa-flutuante.png" alt="" />
          </div>
        </article>

        <article className='w-[95%] flex flex-col items-start lg:flex-col justify-between sm:w-[80%] mt-[130px]'>
          <h2 className='mb-2 text-left text-goldenroad font-semibold text-6xl'>
            Seja nosso parceiro
          </h2>
          <section className='w-[95%] flex flex-col items-center lg:flex-row justify-between sm:w-full mt-[100px] gap-14'>
            <ObjectiveCard
              titulo='Junte-se a nós'
              icon={<img src="/service-24-hour.png" className='max-w-none' />}
            >
              Estamos à procura de parceiros e investidores que estejam comprometidos com nossa visão e partilhem de nossa dedicação em promover o acesso à rede na região amazônica. Se você compartilha da crença no potencial da conectividade como um meio para impulsionar impactos positivos, convidamos cordialmente sua participação nessa nobre missão.
            </ObjectiveCard>
            <ObjectiveCard titulo='Uso dos recursos' icon={<img src="/garden-sprinkler.png" className='max-w-none' />}>
              Os recursos captados serão direcionados para o aprimoramento contínuo de nosso sistema de mapeamento, bem como para investimentos em infraestrutura de conectividade, capacitação local e programas de conscientização comunitária. Nós garantimos a máxima transparência e eficiência na alocação desses recursos para maximizar o impacto de cada investimento.
            </ObjectiveCard>
          </section>

        </article>
      </div>
      <Footer />
    </main>
  );
}
