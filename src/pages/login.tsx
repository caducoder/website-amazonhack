import CommomHeader from '@/components/CommomHeader';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Dados do formulário:', data);
  };

  return (
    <>
      <CommomHeader />
      <div className="w-full h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl text-center mb-4">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Seu email"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                  className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Sua senha"
                />
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <Link href='/'>
              <Button
                variant='text'
              >
                Voltar
              </Button>
            </Link>
            <Button
              className="bg-goldenrod text-white"
              variant='contained'
              sx={{ ":hover": { bgcolor: "#234" } }}
              color='primary'
              type="submit"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
