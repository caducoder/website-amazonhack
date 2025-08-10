import IntMap from '@/components/InteractiveMap';
import CommomHeader from '@/components/CommomHeader';
import { LatLng } from 'leaflet';
import React, { useState, useContext } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { useAuth } from '@/context/AuthContext';
import router from 'next/router';

interface NetworkData {
  numeroIdentificacao: number | undefined,
  cep: string,
  logradouro: string;
  bairro: string,
  municipio: string;
}

function Networkegister() {
  const { user } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm<NetworkData>();
  const [position, setPosition] = useState<LatLng | null>(null);
  const towerCollectionRef = collection(db, "towers");

  const onSubmit: SubmitHandler<NetworkData> = async (data) => {
    console.log(data);
    const dataWithLatLng = { ...data, userId: user?.uid, id: data.numeroIdentificacao!, ...position };
    if (position) {
      addDoc(towerCollectionRef, dataWithLatLng)
        .then(resp => {
          toast.success(`Torre cadastrada! ${position}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          router.push("/towers");
        });

    } else {
      toast.warning('Marque a localização no mapa!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  if (!user) {
    router.push("/login");
  }

  return (
    <>
      <CommomHeader />
      <section>
        <h1 className='text-center text-[40px] mb-[14px] text-goldenroad font-semibold'>
          Cadastro de rede
        </h1>
        <p className='text-center w-full sm:px-28 text-darkgrey mb-16'>
          Vai instalar uma nova rede? Cadastre ela no nosso sistema para aumentarmos a visibilidade da conexão no estado do Amazonas. Você pode preencheer manualmente os dados do endereço ou selecionar no nosso mapa
        </p>
        <div className='mb-8'>
          <p className='text-goldenroad font-bold text-lg mb-6 text-center'>Você pode preencheer manualmente os dados do endereço ou selecionar ele no nosso mapa</p>
          <form
            className='flex flex-col lg:flex-row justify-center gap-16 px-4 lg:p-0'
            id='network-form'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-6 w-full">
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor={'email'}>
                  N° de identificação da rede
                </label>
                <Controller
                  name={'numeroIdentificacao'}
                  control={control}
                  defaultValue={undefined}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder='N° de identificação da rede'
                      style={{ appearance: 'textfield' }}
                      type="number"
                      className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.numeroIdentificacao ? 'border-red' : ''}`}
                    />
                  )}
                />
                {errors.numeroIdentificacao && <p className="text-red text-xs italic">Campo obrigatório</p>}
              </div>

              <div className='flex flex-row gap-2'>
                <div className="mb-6 w-full">
                  <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor={'email'}>
                    CEP
                  </label>
                  <Controller
                    name={'cep'}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder='CEP'
                        type="text"
                        id="cep"
                        className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cep ? 'border-red' : ''}`}
                      />
                    )}
                  />
                  {errors.cep && <p className="text-red text-xs italic">Campo obrigatório</p>}
                </div>

                <div className="mb-6 w-full">
                  <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor={'logradouro'}>
                    Logradouro
                  </label>
                  <Controller
                    name={'logradouro'}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder='Logradouro'
                        type="text"
                        className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.logradouro ? 'border-red' : ''}`}
                      />
                    )}
                  />
                  {errors.logradouro && <p className="text-red text-xs italic">Campo obrigatório</p>}
                </div>
              </div>

              <div className="mb-6 w-full">
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor={'bairro'}>
                  Bairro
                </label>
                <Controller
                  name={'bairro'}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder='Bairro'
                      type="text"
                      className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.bairro ? 'border-red' : ''}`}
                    />
                  )}
                />
                {errors.bairro && <p className="text-red text-xs italic">Campo obrigatório</p>}
              </div>

              <div className="mb-6 w-full">
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor={'municipio'}>
                  Município
                </label>
                <Controller
                  name={'municipio'}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder='Município'
                      type="text"
                      className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.municipio ? 'border-red' : ''}`}
                    />
                  )}
                />
                {errors.municipio && <p className="text-red text-xs italic">Campo obrigatório</p>}
              </div>
            </div>
            <div className='w-[400px] h-[400px]' >

              <IntMap position={position} setPosition={setPosition} />
            </div>
          </form>
          <div className='flex justify-center mt-10'>
            <button
              form='network-form'
              className="bg-mainGreen text-white py-2 px-24 font-semibold rounded-xl hover:bg-darkGreen transition"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Networkegister;