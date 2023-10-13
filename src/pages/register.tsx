import CompanyRegisterForm from '@/components/CompanyRegisterForm'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <section className="max-w-md mx-auto">
      <CompanyRegisterForm />

    </section>
  )
}

export default Register