import CommomHeader from '@/components/CommomHeader';
import InputComponent from '@/components/InputComponent';
import router from 'next/router'
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

export interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { handleSubmit, formState: { errors }, register } = useForm<LoginData>();

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

          <div className="mb-2 w-full">
            <InputComponent
              {...register('email', { required: 'Campo obrigatório' })}
              label='Email'
              name='email'
              errors={errors.email}
              emphasis
            />
          </div>

          <div className="w-full">
            <InputComponent
              {...register('password', { required: 'Campo obrigatório' })}
              label='Senha'
              name='password'
              errors={errors.password}
              emphasis
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
        <div className='text-center mb-4'>
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
