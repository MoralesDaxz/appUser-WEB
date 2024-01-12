import React from 'react'
import CreateForm from '../components/CreateForm'
import Link from 'next/link'
import Button from '../components/Button'

const page = () => {
  return (

    <div className=' min-h-screen flex flex-col items-center justify-center text-center gap-2'>
      <Link href={'/'} className='absolute top-2 left-2'>
        <Button text='Volver'/>
        </Link>
      <h1 className='text-lg font-bold'>Crear usuario</h1>
      <CreateForm />
    </div>
  )
}

export default page