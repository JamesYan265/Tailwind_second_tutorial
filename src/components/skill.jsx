import React from 'react'

const Skill = () => {
  
  return (
    <section className='skill text-gray-700 border-t border-gray-200 mb-96'> 
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* left */}
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 justify-center'>
          <img src="./images/PCbg.jpg" alt="" className="rounded h-96" />
        </div>
        {/* right */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
        <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
          <div>
            <h2>HTML5</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='animate-bar1 bg-green-600 text-xs leading-none py-1 text-center text-white'>
                80%
              </div>
            </div>

            <h2>CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='animate-bar2 bg-green-600 text-xs leading-none py-1 text-center text-white'>
                85%
              </div>
            </div>

            <h2>Javascript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='animate-bar3 bg-green-600 text-xs leading-none py-1 text-center text-white'>
                60%
              </div>
            </div>

            <h2>React</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='animate-bar4 bg-green-600 text-xs leading-none py-1 text-center text-white'>
                50%
              </div>
            </div>

            <h2>Next Js</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='animate-bar5 bg-green-600 text-xs leading-none py-1 text-center text-white'>
                25%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill