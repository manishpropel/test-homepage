import React, { useCallback } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE, STATS } from '../constants/AppConstants';

const Stats = () =>{
    const statsContent = useCallback(() => (
        STATS.map(({ title, value }) => (
          <div key={title} className='flex justify-center items-center gap-x-6' >
            <p className='leading-5'>{title}</p>
            <Parallax opacity={OPACITY_RANGE}>
              <p className='text-4xl'>{value}</p>
            </Parallax>
          </div>
        ))
      ), [STATS]);
    return (
        <div className={`w-full stats px-14 text-white flex justify-center items-center mt-60px h-86px`}>
        <div className='flex justify-between items-center max-w-1440px w-full'>
          {statsContent()}
        </div>
      </div>
    )
}
export default React.memo(Stats);