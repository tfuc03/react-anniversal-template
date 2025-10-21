import React from 'react'

function Header() {
  
  return (
    <div className='ml-5 pr-0 mt-0 mr-10 flex flex-col items-start gap-2 
                   md:items-start md:text-start md:mx-auto md:px-4 md:ml-10
                   lg:items-start lg:mb-10 lg:text-left lg:ml-20'>
      <h1 className='font-str font-bold text-4xl text-[#2F2A24] 
                     md:text-7xl 
                     lg:text-[150px]'>

                    A Year Ago, <br /> It All Began...
        </h1>

      <p className='font-des mb-3 text-[#7B6550] text-[14px] 
                     md:text-base md:mt-2 md:mb-4 md:text-[28px] md:pr-10
                     lg:text-lg lg:text-[48px] lg:pr-60'>

                    Chúng ta có một năm đầy ấm áp và kỉ niệm. Chúng ta có tất cả và có chúng ta!
        </p>

      <a href="#first-story" className='inline-flex items-center justify-center
                            no-underline 
                            text-[10px] text-[#453e38] w-auto h-8 bg-[#FFD180]/50 px-3 rounded-full
                            md:h-12 md:px-5 md:text-lg
                            lg:h-16 lg:mb-10 lg:px-6 lg:text-xl'>

                    HÀNH TRÌNH BẮT ĐẦU ↓
        </a>
    </div>
  )
}

export default Header
