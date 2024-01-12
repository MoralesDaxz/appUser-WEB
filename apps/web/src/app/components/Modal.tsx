'use client'


import React from 'react'
import { deleteUser } from '../services/axios'

type ModalProps = {
    text: string,
    id: string,
    setModal: (prev: boolean) => void,
}


const Modal = ({ text, id, setModal }: ModalProps) => {

    return (

        <div className='bg-[black] w-[200px] h-[110px] absolute z-10 top-10 flex flex-col items-center justify-center gap-4  rounded-md'>
            <h3 >{text}</h3>
            <div className='flex justify-center gap-6'>
                <p className='p-1 border border-solid border-white cursor-pointer w-8 text-center rounded hover:bg-white hover:text-black' onClick={() => {deleteUser(id);window.location.reload()}}>Si</p>
                <p className='p-1 border border-solid border-white cursor-pointer w-8 text-center rounded hover:bg-white hover:text-black' onClick={() => setModal(false)}>No</p>
            </div>
        </div>
    )
}

export { Modal }