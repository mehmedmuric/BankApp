import React from 'react';
import {stats} from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`flex-row flex-wrap ${styles.flexCenter} sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div className={`flex flex-1 flex-row items-center justify-start m-3`} key={stat.id}>
          <h4 
          className='
          font-semibold 
          font-poppins 
          xs:text-[40px] 
          text-[30px] 
          xs:leading-[53px] leading-[43px] 
          text-white'>{stat.value}</h4>
          <p className='
          font-normal
          font-poppins 
          xs:text-[20px] 
          text-[15px] 
          xs:leading-[25px] leading-[20px] 
          text-gradient uppercase ml-3 '>{stat.title}</p>
        </div>
      ))}
    </section>
  )
};

export default Stats;