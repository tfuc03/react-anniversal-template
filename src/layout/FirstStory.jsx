import React from 'react';
import TiltedCard from '../components/TiltedCard';

function FirstStory() {
  return (
    <main className='flex flex-col items-center justify-center h-auto bg-[linear-gradient(120deg,#FFEACB_0%,#FFD6D6_40%,#DDE0F2_100%)] lg:flex-row'>
        <div className='ml-10 pt-5 mb-5 w-[200px] h-[200px] md:w-[350px] md:h-[350px] md:ml-15 md:pt-10 md:mb-10 lg:ml-10 lg:pt-20 lg:mb-10 lg:w-[400px] lg:h-[400px] lg:w-1/2 lg:mr-20'>
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
        </div>
        <div className='flex flex-col gap-y-2 ml-10 md:ml-15 lg:w-1/2'>
            <h1 className='text-3xl font-title font-bold text-[#2F2A24] md:text-5xl'>When We First Met</h1>
            <p className='mr-10 mb-10 text-[#7B6550] text-[13px] font-des md:text-[25px] md:pr-20'>Ngày đó chúng ta chẳng hẹn, chẳng có kế hoạch. Lần đầu chúng ta gặp nhau và đơn giản là hai chiếc áo cùng màu!</p>
        </div>
  
    </main>
  )
}

export default FirstStory
