import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`} id='home'>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient mb-2 rounded-[10px]'>
          <img src={discount} alt="discount" className='h-[32px] w-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>  
            <span className='text-white'>20%</span> Discount for {" "}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full '>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]'>
            The Next <br className='sm:block hidden'/> {" "} 
            <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <div className='hidden mr-0 ss:flex md:mr-4'> 
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[72px] w-full'>
          Payment Method.
        </h1>
        <p className={`max-w-[420px] ${styles.paragraph} mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot_hand" className='h-[100%] w-[100%] z-[5] relative'/>
        <div className='w-[40%] h-[35%] absolute z-[0] top-0 pink__gradient'/>
        <div className='w-[80%] h-[80%] absolute z-[1] bottom-40 white__gradient rounded-full'/>
        <div className='w-[50%] h-[50%] absolute z-[0] right-20 bottom-20 blue__gradient'/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/> 
      </div>
    </section>
  )
};

export default Hero;