import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`
    ${styles.flexCenter} ${styles.padding} ${styles.marginY} 
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex flex-col flex-1 '>
        <h2 className={styles.heading2}>Let's Try Our Service Now!</h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`ml-0 mt-10 sm:ml-10 sm:mt-0`}>
        <Button />
      </div>
    </section>
  )
};

export default CTA;