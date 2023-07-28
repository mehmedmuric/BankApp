import React from 'react';
import { features } from '../constants';
import styles, {layout} from '../style';
import Button from './Button';


const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row rounded-[20px] p-6 ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>   
    <div className={`w-[65px] h-[65px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex flex-col flex-1 ml-3'>
      <h4 className='font-semibold font-poppins mb-1 text-white text-[18px] leading-[23px]'>{title}</h4>
      <p className='font-normal font-poppins mb-1 text-dimWhite text-[16px] leading-[25px]'>{content}</p>
    </div>
  </div>
);


const Bussines = () => {
  return (
    <section className={layout.section} id='features'>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You Do The Business, <br className='sm:block hidden'/> We'll Handle The Money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
};

export default Bussines;