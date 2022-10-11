import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import sliderMulti from '../public/slider-multi.svg';
import multi from '../public/multi.svg';
import { MULTI_TO_MULTI, OPACITY_RANGE } from '../constants/AppConstants';
import { useCallback, useEffect, useState } from 'react';
import SelectTokens from './SelectTokens';
import BatchTokens from './BatchTokens';

export default function MultiToMulti() {
  const [width, setWidth] = useState<number>();
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
  const mobileBanner = useCallback(() => {
    if (width && width < 768) {
      return (<div className='absolute right-0 -bottom-28'>
        <Image src={sliderMulti} alt="multi-slider" width={200} height={200} />
      </div>)
    }
    return false
  }, [width]);
  const mainContent = useCallback(() => (
    width && width < 768 ?
      <div className='mt-28 flex-col flex gap-y-6'>
        <SelectTokens />
        <BatchTokens />
      </div>
      :
      <div style={{ gridTemplateColumns: '1fr 2fr', gridAutoRows: '1fr' }} className='mt-4 grid items-center gap-x-6'>
        <SelectTokens />
        <BatchTokens />
      </div>
  ), [width]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  })
  return (
    <div className='max-w-1080px md:w-full w-11/12 m-auto mt-14 mb-14 md:mb-32'>
      <div style={{
        background: 'linear-gradient(100deg, #185886,#1C6866,#222546 )'
      }} className='w-full relative md:h-450px py-9 md:py-0 md:overflow-hidden mb-0.5 bg-no-repeat justify-end pl-5 pr-5 md:pr-0 md:pl-20 flex items-center gap-x-16 rounded-3xl'>
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
        {mobileBanner()}
        <div ref={parallax.ref} className='-mt-10 -mr-5 hidden md:block'>
          <Image src={sliderMulti} alt="multi-slider" />
        </div>
      </div>
      {mainContent()}
    </div>
  )
}