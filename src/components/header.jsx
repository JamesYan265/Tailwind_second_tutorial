import React from 'react'

const Header = () => {
  return (
    <header className='text-gray-700 border-b border-gray-200'>
        <div className=' container flex flex-col md:flex-row mx-auto p-5 justify-between items-center'>
        <a href='#' className='font-bold text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>JamesYan</span>
        </a>
        <nav className='md:ml-auto text-base'>
            <a href='#' className='mr-5 hover:text-blue-500 duration-300'>Home</a>
            <a href='#' className='mr-5 hover:text-blue-500 duration-300'>About</a>
            <a href='#' className='mr-5 hover:text-blue-500 duration-300'>Skills</a>
            <a href='#' className='hover:text-blue-500 duration-300'>Blog</a>
        </nav>
        </div>
    </header>
  )
}

export default Header