import React from 'react'

const Switch = () => {
    return (
        <div className='bg-gray-100 px-1 flex gap-1 py-1 rounded-full my-4'>
            <button className='bg-white text-gray-400 font-bold px-12 py-2 rounded-full w-full'>Debt</button>
            <button className='text-purple-100 font-bold px-12 py-2 rounded-full w-full'>Sellers</button>
        </div>
    )
}

export default Switch