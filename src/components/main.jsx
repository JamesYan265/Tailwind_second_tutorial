import React from 'react'

const Main = () => {
  return (
    <section className='text-gray-700' id='home'>
        <div className='container flex flex-col md:flex-row mx-auto py-20 px-5 items-center'>
            <div className='md:w-1/2 flex-grow mb-16 md:pr-16 lg:pr-24 text-center md:text-left'>
                <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
                    Hello !
                    <br />
                    I'm James Yan
                    <br />
                    Web developer
                </h1>
                <p className='mb-8 leading-relaxed'>
                    My name is Yan Man Yiu. I grew up in Hong Kong.<br />
                    This is detail for my work : <a href='https://github.com/JamesYan265' className='text-green-600'>github</a>
                </p>
                <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-700 duration-300'>Contact me</button>
            </div>
            <div className='w-5/6 md:w-1/2 lg:max-w-lg'>
                <img src='./images/myphoto.jpeg' alt='Myphoto' />
            </div>
        </div>
    </section>
  )
}

export default Main