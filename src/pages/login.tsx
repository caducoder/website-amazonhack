import CommomHeader from '@/components/CommomHeader';
import router from 'next/router'
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

export interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log('Dados do formulário login:', data);

    router.push('/network-register')
  };

  return (
    <>
      <CommomHeader />
      <div className="w-full h-['00%] flex flex-col gap-8">
        <h2 className="text-[40px] text-goldenroad text-center flex flex-col justify-center items-center font-semibold ">
          Faça seu login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded px-8 pt-6 w-full sm:w-[650px] flex flex-col justify-center items-center mx-auto">

          <div className="mb-6 w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor={'email'}>
              Email
            </label>
            {/* <Input variant='outlined' /> */}
            <Controller
              name={'email'}
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder='Email'
                  type="text"
                  id="nome"
                  className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red' : ''}`}
                />
              )}
            />
            {errors.email && <p className="text-red text-xs italic">Campo obrigatório</p>}
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="password">
              Senha
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red' : ''}`}
                  placeholder="Sua senha"
                />
              )}
            />
          </div>
          <div className='w-full relative'>
            <button type='button' className='absolute right-0 font-light text-darkgrey'>Esqueceu a senha?</button>

          </div>
          <div className="flex items-center justify-between mt-16">
            <button
              className="bg-mainGreen text-white py-2 px-24 font-semibold rounded-xl hover:bg-darkGreen transition"
              type="submit"
            >
              Entrar
            </button>
          </div>

        </form>
        <div className=' text-center'>
          <p>
            Não possui cadastro? {' '}
            <button className='whitespace-nowrap font-semibold' onClick={() => router.push('/register')}>
              Cadastre-se aqui
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
