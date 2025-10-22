import React, {useRef} from 'react'
import TextType from './components/TextType'
import Header from './layout/Header'
import FirstStory from './layout/FirstStory'
import FirstAdventure from './layout/FirstAdventure'
import Us from './layout/Us'
import InTheFuture from './layout/InTheFuture'
import ReCap from './layout/ReCap'
import TargetCursor from './components/TargetCursor'

function App() {

  

  return (
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      
      <section>
      <div className='flex flex-col bg-[linear-gradient(120deg,#FFF2E1_0%,#FFE3E3_40%,#E8EAF6_100%)] w-full p-10 lg:h-screen md:gap-y-10 lg:gap-y-20'>
        <Header/>
        
      </div>
      <div>
        <FirstStory />
      </div>
      <div>
        <FirstAdventure />
      </div>
      <div>
        <Us />
      </div>
      <div>
        <InTheFuture />
      </div>
      <div>
        <ReCap />
      </div>
    </section>
      
    </div>
    
  )
}

export default App
