import React from 'react';
import {apple, bill, google} from '../assets';
import styles, {layout} from '../style';

const Billing = () => {
  return (
    <section className={layout.sectionReverse} id='product'>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='h-[100%] w-[100%] relative z-[5]' />
        <div className='white__gradient absolute -left-1/2 rounded-full h-[50%] w-[50%] top-0 z-[3]'/>
        <div className='pink__gradient absolute -left-1/2 rounded-full h-[50%] w-[50%] bottom-0 z-[0]'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily Control Your <br className='sm:block hidden'/> Billing & Invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="App_Store" className='w-[130px] h-[45px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="Google_Play" className='w-[130px] h-[45px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )
};

export default Billing;