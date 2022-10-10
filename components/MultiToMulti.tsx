import Image from 'next/image';
import { Parallax, useParallax } from 'react-scroll-parallax';
import sliderMulti from '../public/slider-multi.svg';
import multi from '../public/multi.svg';
import multiFrom from '../public/multi-from.svg';
import cart from '../public/cart.svg';
import { MULTI_TO_MULTI, OPACITY_RANGE } from '../constants/AppConstants';
import { useCallback } from 'react';

export default function MultiToMulti() {
  const parallaxOpaque = useParallax<HTMLDivElement>({
    opacity: OPACITY_RANGE,
  });
  const parallaxOpaqueFrom = useParallax<HTMLDivElement>({
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
        <div className='bg-gray900 rounded-2xl pt-8 pl-8 h-full'>
          <div className='w-12 h-12 rounded-lg bg-gray700 flex justify-center items-center'>
            <Image src={cart} height={22} width={20} alt="cart" />
          </div>
          <Parallax opacity={OPACITY_RANGE}>
            <p className='mt-3 mb-2 text-gray75 font-medium'>Select Tokens</p>
          </Parallax>
          <Parallax opacity={OPACITY_RANGE}>
            <p className='text-gray400 mb-16'>Select multiple tokens at once from the DEXs</p>
          </Parallax>
        </div>
        <div className='bg-gray900 overflow-hidden rounded-2xl p-8 flex justify-center items-center'>
          <div>
            <div ref={parallaxOpaqueFrom.ref}>
              <Image width={570} height={313} src={multiFrom} alt="multi-from" />
            </div>
            <div className='w-12 bg-gray700 h-12 rounded-lg mt-10   flex justify-center items-center'>
              <Image src={cart} height={22} width={20} alt="cart" />
            </div>
            <Parallax opacity={OPACITY_RANGE}>
              <p className='mt-3 mb-2 text-gray75 font-medium'>Batch Tokens</p>
            </Parallax>
            <Parallax opacity={OPACITY_RANGE}>
              <p className='text-gray400'>Add token(s) you have for token(s) you want</p>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  )
}