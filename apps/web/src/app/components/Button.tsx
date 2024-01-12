import Link from 'next/link'
import React, { FC } from 'react'

type PropsButton = {
    text: string,
    containClass?: string,
}

const Button: FC<PropsButton> = ({ text, containClass }) => {
    const defaultClass = `hover:text-black hover:bg-white p-2 rounded-md border-solid border-[1px] border-white ${containClass} `;
    return (
       
            <button className={defaultClass} >
                {text}
            </button>

    )
}

export default Button