
import React from 'react'
import Button from '../../common/Button'
import "./styles.css"
import { motion } from 'framer-motion'

function MainComponent() {
  return (
    <>
  
     <div className='landingpage__main'>
        <div  className='landingpage__left'>
            <motion.h1 
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className='track_crypto'>Track Crypto</motion.h1>
            <motion.h1 
             initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5 , delay:0.5}}
            className='real_time' >Real Time.</motion.h1>
            <motion.p 
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5 , delay:1}}
            
            className='website__info'>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.div 
             initial={{opacity:0,x:50}}
             animate={{opacity:1,x:0}}
             transition={{duration:0.5 , delay:1.5}}
            
            className="btn_flex">
                <Button title={"DashBoard"} ></Button>
                <Button title={'Share'}  outline={true}></Button>
            </motion.div>
        </div>


        <div className='landingpage__right'>
           <motion.img 
           className='iphone'
           initial={{y:-10}}
           animate={{y:10}}
           transition={{
            type:"smooth",
            repeatType:"mirror",
            duration:2,
            repeat:Infinity
           }}
           
           
           src="https://crypto-dashboard-avi.netlify.app/static/media/iphone.080029ada53f0cd57453.png" alt=""  />
           <img src="https://crypto-dashboard-avi.netlify.app/static/media/gradient.12a666ed10b3b442b534.png" alt="" className='gradient' />
        </div>
     </div>
    </>
  )
}

export default MainComponent