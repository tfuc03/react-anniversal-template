import { main } from 'framer-motion/client';
import InfiniteMenu from '../components/InfiniteMenu'
import { motion } from "motion/react"

import React from 'react'

function ReCap() {
    const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  }
];

  return (
    <main id='milestones' className=' flex flex-col-reverse items-center bg-[linear-gradient(120deg,#FFEACB_0%,#FFE0E0_40%,#E2E4F4_100%)]'>
            <div className='mt-5'>
               <motion.h1
               initial={{ opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.7}}
                viewport={{once:true}}
               className='text-3xl mt-20 mb-20 font-title font-bold items-center text-center text-[#2F2A24] md:text-5xl cursor-target'>Next Chapter...</motion.h1>
            </div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay:0.5}}
            viewport={{once:true}}
            className='relative w-[90%] h-[auto] border-3 border-radius rounded-2xl border-double shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] mt-5 overflow-hidden'>
                <div className='' style={{ height: 'auto', position: 'relative' }}>
                <InfiniteMenu items={items}/>
            </div>
            </motion.div>
            
    </main>
    
  )
}

export default ReCap



