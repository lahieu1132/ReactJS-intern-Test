import React from 'react'

function Button({children}) {
  return (
    <div className='w-[142px] h-10 bg-primary text-white font-xs font-normal hover:text-primary hover:bg-white
    border border-primary border-solid flex flex-row items-center justify-center gap-2 cursor-pointer transition duration-200 ease-in'>
      {children}
    </div>
  )
}

export default Button