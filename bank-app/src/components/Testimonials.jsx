import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedBackCard from './FeedBackCard';


const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}> 
      <div className='absolute w-[60%] h-[60%] -right-[50%] rounded-full z-[0] blue__gradient'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What People Are <br className='sm:block hidden'/> Saying About Us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-[450px] text-left`}> 
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center sm:justify-start w-full relative z-[1] feedback-container'>
        {feedback.map((card) =>(
          <FeedBackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
};

export default Testimonials;