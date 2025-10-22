import { main } from 'framer-motion/client';
import InfiniteMenu from '../components/InfiniteMenu'
import { motion } from "motion/react"

import React from 'react'

function ReCap() {

    const allImageModules = import.meta.glob('../assets/images/*.{JPG,jpg,png,jpeg}', { eager: true });
    const imageMap = {};
    for (const path in allImageModules) {
    const fileName = path.split('/').pop(); // Lấy "photo.JPG"
    imageMap[fileName] = allImageModules[path].default; // Lấy URL tối ưu
    }


//     const items = [
//   {
//     image: '/images/photo.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo1.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo3.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo4.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo5.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo6.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo7.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo8.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo9.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo10.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo11.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo12.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo13.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo14.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo15.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo16.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo17.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo18.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo19.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo20.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo21.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo22.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo23.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo24.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo25.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo26.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo27.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo28.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo29.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo30.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo31.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo32.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo35.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo36.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo37.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo38.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo39.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo40.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo43.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo44.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo46.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
//   {
//     image: '/images/photo47.JPG',
//     link: '',
//     title: '',
//     description: ''
//   },
// ];

    const items = [
  {
    image: imageMap['photo.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo1.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo3.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo4.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo5.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo6.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo7.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo8.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo9.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo10.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo11.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo12.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo13.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo14.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo15.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo16.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo17.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo18.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo19.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo20.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo21.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo22.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo23.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo24.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo25.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo26.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo27.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo28.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo29.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo30.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo31.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo32.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo35.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo36.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo37.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo38.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo39.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo40.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo43.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo44.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo46.JPG'],
    link: '',
    title: '',
    description: ''
  },
  {
    image: imageMap['photo47.JPG'],
    link: '',
    title: '',
    description: ''
  },
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



