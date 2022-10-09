import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'
import arrow from '../assets/icons/right-arrow.svg';
import sliderBg from '../assets/icons/slider-bg.svg';
import sliderMulti from '../assets/icons/slider-multi.svg';
import multi from '../assets/icons/multi.svg';
import multiFrom from '../assets/icons/multi-from.svg';
import cart from '../assets/icons/cart.svg';
import audited from '../assets/icons/audited.svg';
import blocksec from '../assets/icons/blocksec.svg';
import zokyo from '../assets/icons/zokyo.svg';
import { useParallax } from 'react-scroll-parallax';

const Home: NextPage = () => {
  const opacityRange:[number, number, (any)?] = [0, 1];
  const parallaxOpaque = useParallax<HTMLDivElement>({
    opacity: opacityRange,
  });
  const parallaxOpaqueFrom = useParallax<HTMLDivElement>({
    opacity: opacityRange,
  });
  const parallaxOpaqueWhatWeDo = useParallax<HTMLDivElement>({
    opacity: opacityRange,
  });
  const parallaxTotal = useParallax<HTMLDivElement>({
    opacity: opacityRange,
  });
  const parallaxTrxPerSec = useParallax<HTMLDivElement>({
    opacity: opacityRange,
  });
  const parallaxTrxCost = useParallax<HTMLDivElement>({
    opacity: opacityRange,
  });
  const parallax = useParallax<HTMLDivElement>({
    speed: 30,
  });
  const manish = {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) -135.28%, rgba(255, 255, 255, 0.04) 106.83%, rgba(255, 255, 255, 0.08) 144.75%)',
    backdropFilter: 'blur(5px)'
  }
  const kk = {
    background: 'linear-gradient(100deg, #FCF95C,#31D08F, #2DE370)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }
  const jj = {
    background: 'linear-gradient(103.62deg, #01A76C 11.55%, #71EDB5 107.01%)'
  }
  return (
    <AppLayout>
      <div>
        <div className='w-full mt-36 flex flex-col justify-center items-center text-white'>
          <p className='text-white text-xl mb-0.5 font-bold'>#DoLessAchieveMore</p>
          <h1 className='text-white max-w-1080px font-extrabold text-6xl my-7 text-center'>Trade two or more tokens in one go, efficiently.</h1>
          <p className='mt-0.5 text-gray400'>Dezap swaps your multiple tokens in one place. So now say no to trading hassle, and get more time to grow your crypto portfolio</p>
          <p className='mb-8 mt-60px text-white'>Get started in 2 easy steps: Connect Wallet Add Tokens</p>
          <div className='flex items-center justify-center gap-x-5'>
            <button type='button' className='flex bg-green300 h-60px rounded-md justify-center items-center gap-x-4 px-5'>
              <p className='text-gray900 text-sm font-bold uppercase'>Launch app</p>
              <Image src={arrow} alt="arrow" height={14} width={9} />
            </button>
            <button type='button' className='flex h-60px justify-center rounded-md items-center gap-x-4 px-5 border border-green300'>
              <p className='text-sm font-bold text-green300 uppercase'>view demo</p>
            </button>
          </div>
          <div style={manish} className='w-full px-14 text-white flex justify-center items-center mt-60px h-86px'>
            <div className='flex justify-between items-center max-w-1440px w-full'>
              <div className='flex justify-center items-center gap-x-6' >
                <p className='leading-5'>Total <br /> Transactions</p>
                <div ref={parallaxTotal.ref}>
                  <p className='text-4xl'>23,123,400</p>
                </div>
              </div>
              <div className='flex justify-center items-center gap-x-6' >
                <p className='leading-5'>Transactions <br /> per second</p>
                <div ref={parallaxTrxPerSec.ref}>
                  <p className='text-4xl'>2,340</p>
                </div>
              </div>
              <div className='flex justify-center items-center gap-x-6' >
                <p className='leading-5'>Avg. cost per <br /> transaction</p>
                <div ref={parallaxTrxCost.ref} >
                  <p className='text-4xl'>23,123,400</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-1080px m-auto mt-14 mb-32'>
          <div style={{
            height: 450, background: 'linear-gradient(100deg, #185886,#1C6866,#222546 )'
          }} className='w-full overflow-hidden mb-0.5 bg-no-repeat justify-end pl-20 flex items-center gap-x-16 rounded-3xl'>
            <div ref={parallaxOpaque.ref}>
              <div className='max-w-md'>
                <div className='w-12 h-12 mb-3 rounded-md flex justify-center items-center' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) -135.28%, rgba(255, 255, 255, 0.04) 106.83%, rgba(255, 255, 255, 0.08) 144.75%)' }}>
                  <Image src={multi} width={28} height={20} />
                </div>
                <p className='text-gray75 font-medium mb-2'>Multi-Multi Swap</p>
                <p className='text-shade930'>An interactive experience for you to Batch swap tokens. In a single transaction, either swap:</p>
                <ul className="text-shade930 pb-4">
                  <li>1. One token to multiple other tokens #one2many. </li>
                  <li>2. Multiple tokens to a single one #many2one.</li>
                  <li>3. Multiple tokens to other multiple tokens #many2many.</li>
                </ul>
              </div>
            </div>
            <div ref={parallax.ref} className='-mt-10 -mr-5'>
              <Image src={sliderMulti} />
            </div>
          </div>
          <div style={{ gridTemplateColumns: '1fr 2fr', gridAutoRows: '1fr' }} className='mt-4 grid items-center gap-x-6'>
            <div className='bg-gray900 rounded-2xl pt-8 pl-8 h-full'>
              <div className='w-12 h-12 rounded-lg bg-gray700 flex justify-center items-center'>
                <Image src={cart} height={22} width={20} />
              </div>
              <p className='mt-3 mb-2 text-gray75 font-medium'>Select Tokens</p>
              <p className='text-gray400 mb-16'>Select multiple tokens at once from the DEXs</p>
            </div>
            <div className='bg-gray900 overflow-hidden rounded-2xl p-8 flex justify-center items-center'>
              <div>
                <div ref={parallaxOpaqueFrom.ref}>
                  <Image width={570} src={multiFrom} />
                </div>
                <div className='w-12 bg-gray700 h-12 rounded-lg mt-10   flex justify-center items-center'>
                  <Image src={cart} height={22} width={20} />
                </div>
                <p className='mt-3 mb-2 text-gray75 font-medium'>Batch Tokens</p>
                <p className='text-gray400'>Add the tokens for batch swap</p>
              </div>
            </div>
          </div>
        </div>
        <div className='m-auto text-center'>
          <div ref={parallaxOpaqueWhatWeDo.ref}>
            <p className='text-gray400 font-black text-2xl'>What we do</p>
            <h1 className='text-3xl max-w-526px m-auto font-bold text-white'>Multiple tokens, <span style={kk}> single transaction & lowest fees</span></h1>
          </div>
          <div className=' mt-20 mb-28'></div>
        </div>
        <div className='grid gap-x-10 max-w-1080px m-auto mb-28' style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'minmax(100px, auto)' }}>
          <div className='grid gap-y-6'>
            <div style={jj} className='px-10 py-7 flex gap-x-10'>
              <Image src={audited} width={112} />
              <div>
                <p className='text-white mb-8'>Audited By</p>
                <div className='flex gap-x-8 items-center'>
                  <Image height={32} src={zokyo} />
                  <Image height={32} src={blocksec} />
                </div>
              </div>
            </div>
            <div className='bg-gray-600'>k</div>
          </div>
          <div className='bg-pink-300'>s</div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
