import React, { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  errors: FieldError | undefined
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type = 'text', errors, ...rest }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-2" htmlFor={name}>
          {label}
        </label>
        <input
          placeholder={label}
          type={type}
          name={name}
          ref={ref}
          className={`w-full appearance-none border border-darkgrey rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors ? 'border-red' : ''}`}
          {...rest}
        />
        {errors && <p className="text-red text-xs italic">{errors.message}</p>}
      </div>
    )
  }
)


export default InputComponent