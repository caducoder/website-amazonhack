import React from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

interface ObjectiveCardProps {
  titulo: string,
  children: React.ReactNode,
  icon?: JSX.Element
}

function ObjectiveCard({ titulo, children, icon }: ObjectiveCardProps) {
  return (
    <div className='mt-14 flex flex-row gap-4 items-center'>
      <div className='bg-mainGreen w-[80px] h-[80px] flex justify-center items-center self-start rounded-xl p-4'>
        {icon}
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-2xl text-goldenroad font-bold'>
          {titulo}
        </p>
        <p className='text-lg font-medium text-darkgrey'>
          {children}
        </p>
      </div>
    </div>
  )
}

export default ObjectiveCard