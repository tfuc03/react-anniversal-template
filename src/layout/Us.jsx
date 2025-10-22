import React from 'react'
import CircularGallery from '../components/CircularGallery'
import { motion } from "motion/react"

function Us() {
  return (
    <main className='flex flex-col items-start justify-center h-auto bg-[linear-gradient(120deg,#FFEACB_0%,#FFE0E0_40%,#E2E4F4_100%)]
 lg:flex-row lg:pb-10 lg:items-center'>
        <div className='ml-10 mt-5 mb-5 w-[200px] h-[200px] md:w-[350px] md:h-[350px] md:ml-15 md:pt-10 md:mb-10 lg:pt-20 lg:mb-10 lg:w-[400px] lg:h-[400px] lg:w-1/2 lg:mr-20'>
         
          <motion.div
          initial={{ opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6, delay:0.3}}
          viewport={{once:true}}
          className='border-3 rounded-2xl border-double  shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] cursor-target ' style={{ height: '100%', position: 'relative' }}>
              <CircularGallery bend={0} textColor="#2F2A24" borderRadius={0.05} scrollEase={0.02}/>
          </motion.div>

        </div>
        <div className='flex flex-col gap-y-2 ml-10 md:ml-15 lg:w-1/2 lg:text-center'>
            <motion.h1
            initial={{ opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay:0.7}}
            viewport={{once:true}}
            className='text-3xl font-title font-bold text-[#2F2A24] md:text-5xl lg:mr-25 cursor-target'>Us...</motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay:0.7}}
            viewport={{once:true}}
            className='mr-10 mb-10 text-[#7B6550] text-[13px] font-des md:text-[25px] md:pr-20 cursor-target'>Chúng ta bên nhau bao lâu rồi nhỉ? Anh chả nhớ nỗi ngày. Chứng kiến điều vui ta trông thấy, anh muốn mình mãi như thế này, vào cả những lần sau!</motion.p>
        </div>

        <div>
          
        </div>
    </main>
  )
}

export default Us
