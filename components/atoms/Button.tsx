import React from 'react'
import { ButtonSC } from '../../styles/styled'
import { ButtonProps } from '../../typings/components'

const Button = ({ text }: ButtonProps) => {
    // be able to change color of the button to green
    return (
        <button className='px-4 py-1 bg-red-600 text-white rounded-md uppercase'>
            {text}
        </button>
    )
}

export default Button