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
  const { handleSubmit, control, formState: { errors } } = useForm<CompanyForm>();
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
          className='bg-mainGreen transition text-white hover:bg-darkGreen rounded-2xl px-20 py-2 mt-14'>
          Cadastrar
        </button>
      </div>
    </form>

  );
}

export default CompanyRegisterForm;
