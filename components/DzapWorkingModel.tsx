import Image from 'next/image';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { OPACITY_RANGE, WORKING_MODAL } from '../constants/AppConstants';
import hero from '../public/graph.png';

export default function DzapWorkingModel() {
  const parallaxOpaqueWhatWeDo = useParallax<HTMLDivElement>({
    opacity: OPACITY_RANGE,
  });
  const workingModalStyle = {
    background: 'linear-gradient(100deg, #FCF95C,#31D08F, #2DE370)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }
  return (
    <div className='m-auto text-center'>
      <div ref={parallaxOpaqueWhatWeDo.ref}>
        <p className='text-gray400 font-black text-2xl'> {WORKING_MODAL.title} </p>
        <h1 className='text-3xl max-w-526px m-auto font-bold text-white'> {WORKING_MODAL.textWhite} <span style={workingModalStyle}> {WORKING_MODAL.textGradient} </span></h1>
      </div>
      <Parallax opacity={OPACITY_RANGE}>
        <div className='mt-20 mb-28'>
          <Image src={hero} alt="hero" />
        </div>
      </Parallax>
    </div>
  )
}