import { main } from 'framer-motion/client';
import InfiniteMenu from '../components/InfiniteMenu'

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
               <h1 className='text-3xl mt-20 mb-20 font-title font-bold items-center text-center text-[#2F2A24] md:text-5xl'>Next Chapter...</h1>
            </div>

            <div className='relative w-[90%] h-[auto] border-3 border-radius rounded-2xl border-double shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] mt-5 overflow-hidden'>
                <div className='' style={{ height: 'auto', position: 'relative' }}>
                <InfiniteMenu items={items}/>
            </div>
            </div>
            
    </main>
    
  )
}

export default ReCap



