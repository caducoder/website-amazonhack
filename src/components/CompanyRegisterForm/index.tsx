import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@mui/material";
import Link from 'next/link';
import InputComponent from '../InputComponent';

export interface CompanyForm {
  nomeFantasia: string,
  cnpj: string,
  endereco: string,
  email: string,
  senha: string,
  razaoSocial: string,
  inscricaoEstadual: string,
  inscricaoMunicipal: string,
  celular: string,
  telefone: string,
  cep: string,
  logradouro: string,
  bairro: string,
  complemento: string,
  uf: string,
  mun: string
}

function CompanyRegisterForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<CompanyForm>();

  const onSubmit = (data: any) => {
    console.log(data);
    // Você pode adicionar o código para enviar os dados para o servidor aqui
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded pb-8 ">
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <div>
          <InputComponent
            control={control}
            error={errors.cnpj}
            label='CNPJ'
            name='cnpj'
            required
          />
          <InputComponent
            control={control}
            error={errors.nomeFantasia}
            label='Nome Fantasia'
            name='nomeFantasia'
          />
          <InputComponent
            control={control}
            error={errors.razaoSocial}
            label='Razão Social'
            name='razaoSocial'
          />
          <div className='flex flex-row gap-2'>
            <InputComponent
              control={control}
              error={errors.inscricaoEstadual}
              label='Inscrição Estadual'
              name='inscricaoEstadual'
              required
            />
            <InputComponent
              control={control}
              error={errors.inscricaoMunicipal}
              label='Inscrição Municipal'
              name='inscricaoMunicipal'
            />
          </div>
          <div className='flex flex-row gap-2'>
            <InputComponent
              control={control}
              error={errors.celular}
              label='Celular'
              name='celular'
              required
            />
            <InputComponent
              control={control}
              error={errors.telefone}
              label='Telefone'
              name='telefone'
            />
          </div>

          <div className='flex flex-row gap-2'>
            <InputComponent
              control={control}
              error={errors.email}
              label='Email'
              name='email'
              required
            />
            <InputComponent
              control={control}
              error={errors.senha}
              label='Senha'
              name='senha'
              required
            />
          </div>

        </div>
        <div >
          <div className='flex flex-row gap-2'>
            <InputComponent
              control={control}
              label='CEP'
              name='cep'
              error={errors.cep}
              required
            />
            <InputComponent
              control={control}
              label='Logradouro'
              name='logradouro'
              error={errors.logradouro}
            />
          </div>
          <InputComponent
            control={control}
            label='Bairro'
            name='bairro'
            error={errors.bairro}
          />
          <InputComponent
            control={control}
            label='Complemento'
            name='complemento'
            error={errors.complemento}
          />
          <div className='flex flex-row gap-2'>
            <InputComponent
              control={control}
              label='UF'
              name='uf'
              error={errors.uf}
            />
            <InputComponent
              control={control}
              label='Mun'
              name='mun'
              error={errors.mun}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">

        <button
          type='submit'
          className='bg-mainGreen transition text-white hover:bg-lightGreen rounded-2xl px-20 py-2 mt-14'>
          Cadastrar
        </button>
      </div>
    </form>

  );
}

export default CompanyRegisterForm;
