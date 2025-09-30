import React from 'react'
import facebook from '../assets/Icon.png'
import linkedin from '../assets/Icon (1).png'
import twitter from '../assets/Icon (2).png'
import instagram from '../assets/Icon (3).png'
const Footer = () => {
  return (
    <div className='bg-[#ffffff] text-inter my-8 mx-4 md:m-10 xl:mt-30 xl:mb-[60px] xl:mx-30'>
        <div className='flex flex-wrap gap-8 md:gap-10 xl:gap-[120px] '>
            <div className='md:w-full xl:w-auto'>
                <h1 className="md:text-[32px] text-xl font-bold">Business Logo</h1>
               <div className='flex gap-4 mt-5'>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
               </div>
            </div>
            {/* footer middle */}
            <div className='flex xl:w-auto flex-wrap md:w-full gap-10  md:gap-20 mt-5'>
            <div className='xl:w-auto md:w-[35%] w-full '>
              <ul className='space-y-4 text-[#2A2F32]  '>
                
                 <li className='font-bold  '> Our Services </li>
               <li><a href="#">Plumbing</a></li>
              <li> <a href="#">Drainage</a></li>
               <li><a href="#">Bathrooms</a></li>
               <li><a href="#">Commercial</a></li>
              </ul>
            </div>
            {/* another div */}
            <div className='flex xl:w-auto md:w-[50%] w-full  gap-10'>
              <ul className='space-y-4 text-[#2A2F32]'>
                <li className='font-bold'> Useful Links </li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Updates</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Rates</a></li>
              </ul>
              <ul className='space-y-4 text-[#2A2F32]'>
                <li><br /></li>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Updates</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            </div>
            <div className='mt-5'>
              <ul className='space-y-4 font-semibold text-[#2A2F32]'>
                <li className='font-bold'>Contact Info</li>
                <li className='flex gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>1 Sail Street, London, SE11 6NQ</li>
                <li className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>enquiries@PlumbingPros.com</li>
<li className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>020 4527 6474</li>

              </ul>
            </div>
        </div>
        <div className='text-[#2a2f327d] mt-[120px]   flex justify-between'>
          <p>© Plumbing Pros. All Rights Reserved </p>
          <p>Website by IH Adventure And Creative</p>
        </div>
    </div>
  )
}

export default Footer