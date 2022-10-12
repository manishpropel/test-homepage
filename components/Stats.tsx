import React, { useCallback } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE, OPACITY_RANGE_REVERSE } from '../constants/AppConstants';
import { statsDataType } from '../pages';

const Stats = ({ data }: { data: statsDataType }) => {
  const statsContent = useCallback(() => (
    data.map(({ title, value }) => (
      <div key={title} className='flex lg:justify-center justify-between w-full items-center gap-x-6' >
        <Parallax opacity={OPACITY_RANGE_REVERSE}>
          <p className='leading-5 text-sm md:text-base'>{title}</p>
        </Parallax>
        <Parallax opacity={OPACITY_RANGE}>
          <p className='text-2xl md:text-4xl'>{value}</p>
        </Parallax>
      </div>
    ))
  ), [data]);

  return (
    <div className={`w-full stats md:px-14 text-white flex justify-center items-center mt-8 lg:mt-60px lg:h-86px`}>
      <div className='flex gap-y-5 my-5 lg:my-0 lg:gap-y-0 flex-wrap lg:flex-nowrap justify-between items-center max-w-1440px md:w-full w-11/12 m-auto'>
        {statsContent()}
      </div>
    </div>
  )
}

export default React.memo(Stats);