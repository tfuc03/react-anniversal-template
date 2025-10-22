import React from 'react'
import TextType from '../components/TextType'
import {motion} from "motion/react"

function Header() {
  
  return (
    <div className='relative ml-5 pr-0 mt-0 mr-10 flex flex-col items-start gap-2 
                   md:items-start md:text-start md:mx-auto md:px-4 md:ml-10
                   lg:items-start lg:mb-10 lg:text-left lg:ml-15'>
      <motion.h1
      initial={{ opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay:0.7}}
      viewport={{once:true}}
      className='font-str font-bold text-4xl text-[#2F2A24] 
                     md:text-7xl 
                     lg:text-[150px]'>


                    <TextType 
                      text={[" A Year Ago, \n It All Began...", " A Year Ago, \n It All Began..."]}
                      typingSpeed={75}
                      pauseDuration={100000}
                      showCursor={true}
                      cursorCharacter="|"
                    />
                   
        </motion.h1>

      <motion.p
      initial={{ opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay:0.8}}
      viewport={{once:true}}
      className='font-des mb-3 text-[#7B6550] text-[14px] 
                     md:text-base md:mt-2 md:mb-4 md:text-[28px] md:pr-10
                     lg:text-lg lg:text-[48px] lg:pr-60'>

                    Chúng ta có một năm đầy ấm áp và kỉ niệm. Chúng ta có tất cả và có chúng ta!
        </motion.p>

      <motion.a
      initial={{ opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay:1}}
      viewport={{once:true}}
      href="#first-story" className='inline-flex items-center justify-center
                            no-underline 
                            text-[10px] text-[#453e38] w-auto h-8 bg-[#FFD180]/50 px-3 rounded-full
                            md:h-12 md:px-5 md:text-lg
                            lg:h-16 lg:mb-10 lg:px-6 lg:text-xl cursor-target'>

                    HÀNH TRÌNH BẮT ĐẦU ↓
        </motion.a>
    </div>
  )
}

export default Header
