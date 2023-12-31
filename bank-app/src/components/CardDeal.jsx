import React from 'react';
import styles, {layout} from '../style';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find A Better Card Deal <br className='sm:block hidden'/> In Few Easy Steps</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}> Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
};

export default CardDeal;