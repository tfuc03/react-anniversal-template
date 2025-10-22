import React from 'react'
import TiltedCard from '../components/TiltedCard';
import { motion } from 'motion/react';

function FirstAdventure() {
  return (
    <main className='flex flex-col-reverse items-center h-auto bg-[linear-gradient(120deg,#FFEACB_0%,#FFD6D6_40%,#DDE0F2_100%)]  lg:flex-row lg:pb-10 lg:items-center lg:justify-between'>
            
             <div className='flex flex-col items-center gap-y-2 md:items-center lg:w-1/2 lg:text-center '>
                <motion.h1
                initial={{ opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay:0.7}}
                viewport={{once:true}}          
                className='text-3xl  font-title font-bold text-[#2F2A24] md:text-5xl cursor-target'>Our First Adventure</motion.h1>
                <motion.p
                initial={{ opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay:0.8}}
                viewport={{once:true}}          
                className='ml-10 mr-10 text-center mb-10 text-[#7B6550] text-[13px] font-des md:text-[25px] md:text-center md:ml-25 md:pr-20 cursor-target'>Ngày hôm đấy có nắng, cũng có mưa. Anh biết em hay phàn nàn, nhưng vui vì vẫn có nhau trên chiếc xe cà tàn lúc ban trưa!</motion.p>
            </div>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay:0.5}}
            viewport={{once:true}}
            className='flex flex-col items-end mt-5 mb-5 w-[200px] h-[200px] border-3 rounded-2xl border-double shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] cursor-target md:w-[350px] md:h-[350px] md:mt-10 md:mb-10  lg:mt-20 lg:mb-10 lg:w-[600px] lg:h-[450px] lg:w-1/2 lg:mr-30'>
                 <TiltedCard
            
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                </p>
            
            }
            />
            </motion.div>
            
           
      
        </main>
  )
}

export default FirstAdventure
