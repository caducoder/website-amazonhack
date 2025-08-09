import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button } from "@mui/material";
import Link from 'next/link';
import InputComponent from '../InputComponent';
import { toast } from 'react-toastify';
import { collection, getDocs, addDoc, setDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '@/firebase-config';

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
  mun: string;
}

function CompanyRegisterForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<CompanyForm>();
  const companyCollectionRef = collection(db, "companies");

  const onSubmit: SubmitHandler<CompanyForm> = async (data) => {
    console.log(data);
    const { email, senha, ...rest } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, 'companies', user.uid), {
        ...rest,
        createdAt: new Date()
      });
      toast.success(`Empresa cadastrada!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Erro no registro:", error);
      toast.error("Ocorreu um erro inesperado. Por favor, tente mais tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded pb-8 ">
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <div>
          <InputComponent
            {...register('cnpj', { required: 'Campo obrigatório' })}
            label='CNPJ'
            name='cnpj'
            errors={errors.cnpj}
          />
          <InputComponent
            {...register('nomeFantasia')}
            label='Nome Fantasia'
            name='nomeFantasia'
            errors={errors.nomeFantasia}
          />
          <InputComponent
            {...register('razaoSocial')}
            label='Razão Social'
            name='razaoSocial'
            errors={errors.razaoSocial}
          />
          <div className='flex flex-row gap-2'>
            <InputComponent
              {...register('inscricaoEstadual', { required: 'Campo obrigatório' })}
              label='Inscrição Estadual'
              name='inscricaoEstadual'
              errors={errors.inscricaoEstadual}
            />
            <InputComponent
              {...register('inscricaoMunicipal')}
              label='Inscrição Municipal'
              name='inscricaoMunicipal'
              errors={errors.inscricaoMunicipal}
            />
          </div>
          <div className='flex flex-row gap-2'>
            <InputComponent
              {...register('celular', { required: 'Campo obrigatório' })}
              label='Celular'
              name='celular'
              errors={errors.celular}
            />
            <InputComponent
              {...register('telefone')}
              label='Telefone'
              name='telefone'
              errors={errors.telefone}
            />
          </div>

          <div className='flex flex-row gap-2'>
            <InputComponent
              {...register('email', { required: 'Campo obrigatório' })}
              label='Email'
              name='email'
              type='email'
              errors={errors.email}
            />
            <InputComponent
              {...register('senha', { required: 'Campo obrigatório' })}
              label='Senha'
              name='senha'
              type='password'
              errors={errors.senha}
            />
          </div>

        </div>
        <div >
          <div className='flex flex-row gap-2'>
            <InputComponent
              {...register('cep', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^\d{5}-\d{3}$/,
                  message: 'Formato inválido'
                }
              })}
              label='CEP'
              name='cep'
              errors={errors.cep}
            />
            <InputComponent
              {...register('logradouro')}
              label='Logradouro'
              name='logradouro'
              errors={errors.logradouro}
            />
          </div>
          <InputComponent
            {...register('bairro')}
            label='Bairro'
            name='bairro'
            errors={errors.bairro}
          />
          <InputComponent
            {...register('complemento')}
            label='Complemento'
            name='complemento'
            errors={errors.complemento}
          />
          <div className='flex flex-row gap-2'>
            <InputComponent
              {...register('uf')}
              label='UF'
              name='uf'
              errors={errors.uf}
            />
            <InputComponent
              {...register('mun')}
              label='Mun'
              name='mun'
              errors={errors.mun}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          type='submit'
          className='bg-mainGreen transition text-white hover:bg-darkGreen rounded-2xl px-20 py-2 mt-14'>
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default CompanyRegisterForm;
