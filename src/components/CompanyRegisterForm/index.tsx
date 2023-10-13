import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from "@material-tailwind/react";
import Link from 'next/link';

type FormData = {
  nome: string,
  cnpj: string,
  endereco: string,
  email: string,
  contato: string,
  senha: string
}

function CompanyRegisterForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: any) => {
    console.log(data);
    // Você pode adicionar o código para enviar os dados para o servidor aqui
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded border-x-2 pb-8">
      <h2 className="text-2xl text-center mb-4 py-6 bg-purple-300 text-white">
        Cadastro de Empresa de Telefonia
      </h2>

      <div className='px-8'>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
            Nome da Empresa
          </label>
          {/* <Input variant='outlined' /> */}
          <Controller
            name="nome"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="nome"
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nome ? 'border-red-500' : ''}`}
              />
            )}
          />
          {errors.nome && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnpj">
            CNPJ
          </label>
          <Controller
            name="cnpj"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="cnpj"
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cnpj ? 'border-red-500' : ''}`}
              />
            )}
          />
          {errors.cnpj && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endereco">
            Endereço da Sede
          </label>
          <Controller
            name="endereco"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="endereco"
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.endereco ? 'border-red-500' : ''}`}
              />
            )}
          />
          {errors.endereco && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="email"
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              />
            )}
          />
          {errors.email && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contato">
            Contato
          </label>
          <Controller
            name="contato"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="contato"
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contato ? 'border-red-500' : ''}`}
              />
            )}
          />
          {errors.contato && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
            Senha
          </label>
          <Controller
            name="senha"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                id="senha"
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.senha ? 'border-red-500' : ''}`}
              />
            )}
          />
          {errors.senha && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
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
            type="submit"
            className="bg-goldenrod"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </form>

  );
}

export default CompanyRegisterForm;
