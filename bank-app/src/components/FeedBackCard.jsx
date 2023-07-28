import React from 'react';
import { quotes } from '../assets';

const FeedBackCard = ({name,content,title,img}) => {
  return (
    <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="testimonials_quotes" className='object-contain w-[45px] h-[25px]'/>
      <p className='text-[18px] leading-[32px] text-white font-poppins font-normal my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='rounded-full w-[50px] h-[50px]'/>
        <div className='flex flex-col ml-4'>
          <h4 className='text-[20px] leading-[32px] text-white font-poppins font-semibold'>{name}</h4>
          <p className='text-[16px] leading-[32px] text-dimWhite font-poppins font-normal'>{title}</p>
        </div>
      </div>
    </div>
  )
};

export default FeedBackCard;