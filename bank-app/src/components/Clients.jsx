import React from 'react';
import styles from '../style';
import { clients } from '../constants';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}>
            <img src={client.logo} alt="logo" className='sm:w-[192px] object-contain w-[100px]'/>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Clients;