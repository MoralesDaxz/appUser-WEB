'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from '../services/axios'
const CreateForm = () => {
    const { register, handleSubmit, resetField, reset, formState: { errors } } = useForm({
        defaultValues: {
            nombre: '',
            apellido: '',
            pais: '',
            ciudad: '',
            edad: 0,
            nie: '',
        }
    })
    return (
        <form className='flex flex-col items-start gap-2' onSubmit={
            handleSubmit(
                (data) => {
                    createUser(data)
                    reset()
                }
            )
        }>
            <label>Nombre</label>
            <input {...register('nombre')} placeholder='Nombre'></input>
            <label>Apellido</label>
            <input {...register('apellido')} placeholder='Apellido'></input>
            <label>Pais</label>
            <input {...register('pais')} placeholder='Pais'></input>
            <label>Ciudad</label>
            <input {...register('ciudad')} placeholder='Ciudad'></input>
            <label>Edad</label>
            <input {...register('edad', { valueAsNumber: true })} type='number' placeholder='Edad' ></input>
            <label>NIE</label>
            <input {...register('nie')} placeholder='Identificacion'></input>
            <button className='bg-white text-black p-1' onSubmit={() => handleSubmit}> Enviar</button>
            {/* <input className='bg-[white] text-[black]' type='submit' value={'Enviar'}></input> */}
        </form>
    )
}

export default CreateForm