import React from 'react'
import Button from '../atoms/Button'

const Transaction = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className='flex justify-between'>
                <h3 className='text-gray-400'>Mama Nkechi</h3>
                <span className='font-bold text-gray-400'>N2,500</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-gray-200'>25 Jan 2023</span>
                <Button text='Not Paid' onClick={() => { }} />
            </div>
        </section>
    )
}

export default Transaction