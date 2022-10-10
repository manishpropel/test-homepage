import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import sliderMulti from '../public/slider-multi.svg';
import multi from '../public/multi.svg';
import { MULTI_TO_MULTI, OPACITY_RANGE } from '../constants/AppConstants';
import { useCallback } from 'react';
import SelectTokens from './SelectTokens';
import BatchTokens from './BatchTokens';

export default function MultiToMulti() {
  const parallaxOpaque = useParallax<HTMLDivElement>({
    opacity: OPACITY_RANGE,
  });
  const parallax = useParallax<HTMLDivElement>({
    opacity: OPACITY_RANGE,
    speed: 20,
  });
  const listContent = useCallback(() => (
    MULTI_TO_MULTI.points?.map((point, index) => <li key={index}> {index + 1}. {point} </li>)
  ), [MULTI_TO_MULTI.points]);

  return (
    <div className='max-w-1080px m-auto mt-14 mb-32'>
      <div style={{
        height: 450, background: 'linear-gradient(100deg, #185886,#1C6866,#222546 )'
      }} className='w-full overflow-hidden mb-0.5 bg-no-repeat justify-end pl-20 flex items-center gap-x-16 rounded-3xl'>
        <div ref={parallaxOpaque.ref}>
          <div className='max-w-md'>
            <div className='w-12 h-12 mb-3 rounded-md flex justify-center items-center' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) -135.28%, rgba(255, 255, 255, 0.04) 106.83%, rgba(255, 255, 255, 0.08) 144.75%)' }}>
              <Image src={multi} width={28} height={20} alt="multi" />
            </div>
            <p className='text-gray75 font-medium mb-2'> {MULTI_TO_MULTI.title} </p>
            <p className='text-shade930'>{MULTI_TO_MULTI.description}</p>
            <ul className="text-shade930 pt-4">
              {listContent()}
            </ul>
          </div>
        </div>
        <div ref={parallax.ref} className='-mt-10 -mr-5'>
          <Image src={sliderMulti} alt="multi-slider" />
        </div>
      </div>
      <div style={{ gridTemplateColumns: '1fr 2fr', gridAutoRows: '1fr' }} className='mt-4 grid items-center gap-x-6'>
        <SelectTokens />
        <BatchTokens />
      </div>
    </div>
  )
}