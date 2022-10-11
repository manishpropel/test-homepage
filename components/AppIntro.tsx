import React from 'react';
import Image from 'next/image';
import { DEMO_APP, DZAP, DZAP_HASHTAG, GET_STARTED_STEPS, LAUNCH_APP, MAIN_APP_DESCRIPTION, MAIN_APP_TITLE, OPACITY_RANGE, STATS } from '../constants/AppConstants';
import arrow from '../public/right-arrow.svg';
import Stats from './Stats';

function AppIntro() {
  return (
    <div className='md:w-full w-11/12 m-auto mt-16 md:mt-36 flex flex-col justify-center items-center text-white'>
      <p className='text-white text-lg md:text-xl mb-0.5 font-bold'> {DZAP_HASHTAG} </p>
      <h1 className='text-white max-w-1080px font-extrabold text-5xl md:text-6xl my-7 text-center'> {MAIN_APP_TITLE} </h1>
      <p className='mt-0.5 text-gray400 text-center'>{MAIN_APP_DESCRIPTION}</p>
      <p className='mb-8 mt-8 md:mt-60px text-white text-center'>{GET_STARTED_STEPS}</p>
      <div className='flex items-center justify-center gap-x-5'>
        <button onClick={() => window.open(DZAP, "_blank")} type='button' className='flex bg-green300 hover:bg-green400 md:h-60px h-12 rounded-md justify-center items-center gap-x-4 px-5'>
          <p className='text-gray900 text-xs md:text-sm font-bold uppercase'>{LAUNCH_APP}</p>
          <Image src={arrow} alt="arrow" height={14} width={9} />
        </button>
        <button type='button' className='flex md:h-60px h-12 justify-center rounded-md items-center gap-x-4 px-5 border border-green300 hover:border-green400'>
          <p className='text-xs md:text-sm font-bold text-green300 hover:text-green400 uppercase'>{DEMO_APP}</p>
        </button>
      </div>
      <Stats />
    </div>
  );
}
export default React.memo(AppIntro);
