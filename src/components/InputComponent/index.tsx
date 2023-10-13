import React from 'react'
import { Control, FieldErrors, Controller, FieldError } from 'react-hook-form'
import { CompanyForm } from '../CompanyRegisterForm'

interface InputComponentProps {
  control: Control<CompanyForm, any>,
  label: string,
  name: "nomeFantasia" | "cnpj" | "endereco" | "email" | "senha" | "razaoSocial" | "inscricaoEstadual" | "inscricaoMunicipal" | "celular" | "telefone" | "cep" | "logradouro" | "bairro" | "complemento" | "uf" | "mun",
  error: FieldError | undefined,
  required?: boolean
}

function InputComponent({ control, label, name, error, required = false }: InputComponentProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor={name}>
        {label}
      </label>
      {/* <Input variant='outlined' /> */}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required }}
        render={({ field }) => (
          <input
            {...field}
            placeholder={label}
            type="text"
            id="nome"
            className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red' : ''}`}
          />
        )}
      />
      {error && <p className="text-red text-xs italic">Campo obrigatório</p>}
    </div>
  )
}

export default InputComponent