import React from 'react'

const GetInTouch = () => {
  return (
    <div>
        <div className='bg-[#0058FF] text-white rounded-[24px] md:p-10 md:m-10 my-8 mx-4 xl:m-[120px]  py-4 xl:py-20 px-3 text-center font-inter'>
            <h2 className='xl:text-5xl text-2xl font-bold mb-4 xl:mb-8'>Get In Touch</h2>
            <p className='xl:mb-8 mb-4 text-sm xl:text-lg xl:w-[80%] md:w-[90%] w-[95%] text-center  m-auto'>Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
            <button className='bg-white cursor-pointer hover:text-white hover:bg-transparent hover:border-white border flex gap-2 m-auto text-[#0058FF] py-[10px] px-6 rounded-lg'>Book a Professional Plumber <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
        </div>
    </div>
  )
}

export default GetInTouch