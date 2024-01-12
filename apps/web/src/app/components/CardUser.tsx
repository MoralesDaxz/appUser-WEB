'use client'


import React, { useState } from 'react'
import { UsersProps } from '../types/type'
import Image from 'next/image'
import deleteIcon from '../assets/bin.svg'
import configIcon from '../assets/config.svg'
import { Modal } from './Modal'

type user = {
  users: UsersProps,
  numUser: number

}

const CardUser = ({ users, numUser }: user) => {
const [modal, setModal] = useState(false)
  return (
    <div key={users.id} className='bg-[#2e2d2d] relative text-[white] min-w-[240px] rounded-md p-4 '>
     {modal && <Modal  setModal={setModal} text={`Eliminar a ${users.nombre}`} id={users.id}/>}
      <div className='absolute flex gap-4 bottom-1 right-2'>
        <Image 
        onClick={()=> setModal(!modal)}
        title='Eliminar'
        className='cursor-pointer opacity-80'   
        width={20} height={20} 
        src={deleteIcon} 
        alt='Borrar'/>

        <Image 
        title='Modificar'
        className='cursor-pointer opacity-80' 
        width={20} 
        height={20} 
        src={configIcon} 
        alt='Modificar'/>
        
      </div>

      <p>Usuario {numUser + 1}</p>
      <p>Nombre: {users.nombre}</p>
      <p>Apellido: {users.apellido}</p>
      <p>Pais: {users.pais}</p>
      <p>Ciudad: {users.ciudad}</p>
      <p>Identificacion: {users.nie}</p>
      <p>Edad: {users.edad}</p>
    </div>
  )
}

export default CardUser