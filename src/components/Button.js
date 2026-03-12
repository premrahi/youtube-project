import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex m-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap'>
        {name}
    </div>
  )
}

export default Button;