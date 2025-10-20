import React from 'react'
import TextType from './components/TextType'
import Header from './layout/Header'
import FirstStory from './layout/FirstStory'

function App() {
  return (
    <>
    <section>
      <div className='flex flex-col bg-[linear-gradient(120deg,#FFF2E1_0%,#FFE3E3_40%,#E8EAF6_100%)] w-full p-10 md:gap-y-10 lg:gap-y-20'>
        <Header/>
        
      </div>
      <div>
        <FirstStory/>
      </div>
    </section>
      

    </>
    
  )
}

export default App
