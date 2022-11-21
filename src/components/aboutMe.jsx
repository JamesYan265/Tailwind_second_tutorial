import React from 'react'
import { ReactSVG } from 'react-svg'

const AboutMe = () => {
  return (
    <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-20'>
                <h1 className='text-2xl sm:text-3xl font-medium text-gray-900'>About Me</h1>
                <p className='pb-10'>
                    I have a Higher Diploma in Web Design and Development.
                    My profession is UI design and coding, including HTML, CSS, Javascript.
                </p>  
                <p>
                    My work is to develop font-end website applications and IT technology maintenance.<br />
                    Also, I am familiar with computer hardware and different software tools.
                    Build up website or web application.
                    I can build the clear interface and reponsive website. 
                    It can improve interface and User experience. 
                    It is make more easily to spread information in internet.
                </p>
            </div>
            {/* Card div*/}
            
            <div className='flex flex-wrap flex-grow'>
                <div className='md:w-1/3 p-4'>
                    <div className='bg-gray-100 rounded-lg p-8 md:h-96'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                                <ReactSVG src='./images/arrow.svg' />
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>Static HTML Website</h2>
                        </div>
                        <div>
                            <p>
                                Normal information Website. For a blog, information webiste, profile site. Use Static Site Generation.
                            </p>
                        </div>
                        <a href='https://nextjs-ssg-test-fwcwn6icn-jamesyan265.vercel.app/' className='flex mt-3 text-green-500 items-center'>
                            More Detail
                            <ReactSVG src='./images/moreDetail.svg' />
                        </a>
                    </div>
                </div>

                <div className='md:w-1/3 p-4'>
                    <div className='bg-gray-100 rounded-lg p-8 md:h-96'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                                <ReactSVG src='./images/arrow.svg' />
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Application</h2>
                        </div>
                        <div>
                            <p>
                                More interaction for client, just like a application. Such as Social Media site, Booking System. More case is using Server-side-Rendering.
                            </p>
                        </div>
                        <a href='https://public-message-application.web.app/' className='flex mt-3 text-green-500 items-center'>
                            More Detail
                            <ReactSVG src='./images/moreDetail.svg' />
                        </a>
                    </div>
                </div>

                <div className='md:w-1/3 p-4'>
                    <div className='bg-gray-100 rounded-lg p-8 md:h-96'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                                <ReactSVG src='./images/arrow.svg' />
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>REST API</h2>
                        </div>
                        <div>
                            <p>
                                Use axios plugin to connect Backend. Using method : GET, POST, UPDATE, DELETE
                            </p>
                        </div>
                        <a href='https://docs.oracle.com/en/cloud/saas/enterprise-performance-management-common/prest/rest_api_methods.html' className='flex mt-3 text-green-500 items-center'>
                            More Detail
                            <ReactSVG src='./images/moreDetail.svg' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe