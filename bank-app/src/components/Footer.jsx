import React from 'react';
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';

const Footer = () => {
  return (
    <section className={`flex-col ${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`flex-col md:flex-row w-full mb-8 ${styles.flexStart}`}>
        <div className='justify-start mr-10 flex flex-1 flex-col'>
          <img src={logo} alt="footer_logo" className='w-[265px] h-[75px] object-contain'/>
          <p className={`mt-4 max-w-[310px] ${styles.paragraph}`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='w-full justify-between mt-10 md:mt-0 flex flex-row flex-wrap flex-[1.5]'>
          {footerLinks.map((flink) => (
            <div className='flex-col flex ss:my-0 my-4 min-w-[150px]' key={flink.key}>
              <h4 className='font-medium text-[18px] font-poppins text-white leading-[35px]'>{flink.title}</h4>
              <ul className='mt-4 list-none'>
                {flink.links.map((link, index) => (
                  <li className={`
                  font-normal 
                  text-[16px] leading-[20px] 
                  font-poppins text-dimWhite 
                  hover:text-secondary cursor-pointer ${index !== flink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] w-full justify-between items-center'>
        <p className='
          font-normal text-[18px] text-center
          font-poppins text-white 
          leading-[27px]'
          >
          Copyright Ⓒ 2023 Mehmed Muric. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index) => (
            <img key={social.id} src={social.icon} alt={social.id}
              className={`${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
};

export default Footer;