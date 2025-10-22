import React from 'react'
import {motion} from "motion/react"

function InTheFuture() {
  return (
    <main className='flex flex-col items-start justify-center h-auto py-10
        bg-[linear-gradient(120deg,#FFF0D5_0%,#FFE0E0_40%,#D5E0FF_100%)]
        lg:flex-row lg:items-center'>
            <div className='flex flex-col mt-5 items-center justify-center gap-y-2 md:mt-10 lg:w-1/2 lg:text-center'>
                <motion.h1
                initial={{ opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.7}}
                viewport={{once:true}}          
                className='text-3xl font-title font-bold text-[#2F2A24] md:text-5xl lg:mb-5 cursor-target'>Someday In The Future</motion.h1>
                <motion.p
                initial={{ opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay:0.8}}
                viewport={{once:true}}          
                className='ml-5 mr-5 text-center mb-10 text-[#7B6550] text-[13px] font-des md:text-[25px] cursor-target '>Chúng ta có một năm đầy rẫy những vấn đề. Anh chưa từng nghĩ nó dễ vượt qua. Em biết mà cả hai ta đều chẳng ai mong muốn thế, nhưng mà nhìn xem nào, cách giải quyết là cả hai cùng tạo ra! Vậy...Tương lai em dự định như thế nào? Kế hoạch sau này sẽ ra sao? Anh chắc chắn sẽ ủng hộ, anh tin mình cùng nhau!</motion.p>
                
                <motion.a
                initial={{ opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:1}}
                viewport={{once:true}}          
                href="#milestones" className='inline-flex items-center justify-center
                            no-underline 
                            text-[10px] text-[#453e38] w-auto h-8 bg-[#FFD180]/50 px-3 rounded-full
                            md:h-12 md:px-5 md:text-lg
                            lg:h-16 lg:px-6 lg:text-xl cursor-target'>

                    XEM LẠI KHOẢNH KHẮC ↓
        </motion.a>
            </div>
      
        </main>
  )
}

export default InTheFuture
