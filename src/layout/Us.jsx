import React from 'react'
import CircularGallery from '../components/CircularGallery'

function Us() {
  return (
    <main className='flex flex-col items-start justify-center h-auto bg-[linear-gradient(120deg,#FFEACB_0%,#FFE0E0_40%,#E2E4F4_100%)]
 lg:flex-row lg:pb-10 lg:items-center'>
        <div className='ml-10 mt-5 mb-5 w-[200px] h-[200px] md:w-[350px] md:h-[350px] md:ml-15 md:pt-10 md:mb-10 lg:pt-20 lg:mb-10 lg:w-[400px] lg:h-[400px] lg:w-1/2 lg:mr-20'>
         
          <div className='border-3 rounded-2xl border-double  shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] ' style={{ height: '100%', position: 'relative' }}>
              <CircularGallery bend={0} textColor="#2F2A24" borderRadius={0.05} scrollEase={0.02}/>
          </div>

        </div>
        <div className='flex flex-col gap-y-2 ml-10 md:ml-15 lg:w-1/2 lg:text-center'>
            <h1 className='text-3xl font-title font-bold text-[#2F2A24] md:text-5xl lg:mr-25'>Us...</h1>
            <p className='mr-10 mb-10 text-[#7B6550] text-[13px] font-des md:text-[25px] md:pr-20'>Chúng ta bên nhau bao lâu rồi nhỉ? Anh chả nhớ nỗi ngày. Chứng kiến điều vui ta trông thấy, anh muốn mình mãi như thế này, vào cả những lần sau!</p>
        </div>

        <div>
          
        </div>
    </main>
  )
}

export default Us
