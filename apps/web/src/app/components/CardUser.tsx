
import React, { FC } from 'react'

type UsersProps = {
  nombre?: string,
  apellido?: string,
  pais?: string,
  ciudad?: string,
  edad?: number,
  nie?: string,
}
type user ={
  users:UsersProps,
  numUser:number
}
const CardUser = ({ users,numUser }: user) => {

  return (
      <div key={users.nie} className='bg-[white] text-[black] w-[30%] rounded-md'>
        <p>Usuario {numUser}</p>
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