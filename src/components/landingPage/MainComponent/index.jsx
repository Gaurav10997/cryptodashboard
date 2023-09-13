
import React from 'react'
import Button from '../../common/Button'
import "./styles.css"

function MainComponent() {
  return (
    <>
  
     <div className='landingpage__main'>
        <div  className='landingpage__left'>
            <h1 className='track_crypto'>Track Crypto</h1>
            <h1 className='real_time' >Real Time.</h1>
            <p className='website__info'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <div className="btn_flex">
                <Button title={"DashBoard"} ></Button>
                <Button title={'Share'}  outline={true}></Button>
            </div>
        </div>


        <div className='landingpage__right'>
           <img src="https://crypto-dashboard-avi.netlify.app/static/media/iphone.080029ada53f0cd57453.png" alt="" className='iphone' />
           <img src="https://crypto-dashboard-avi.netlify.app/static/media/gradient.12a666ed10b3b442b534.png" alt="" className='gradient' />
        </div>
     </div>
    </>
  )
}

export default MainComponent