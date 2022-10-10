import Image from 'next/image';
import React from 'react';
import { FAST_SWAPS } from '../constants/AppConstants';
import swap from '../public/swap-light.svg';

const FastSwaps = () => {
    const fastSwapText = {
        background: 'linear-gradient(103.62deg, #01A76C 11.55%, #71EDB5 107.01%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
    }
    return (
        <div className='bg-gray900 px-10 py-7 rounded-2xl'>
            <p style={fastSwapText} className='mb-6 font-bold text-2xl italic'> {FAST_SWAPS} </p>
            <div className='flex justify-center items-center w-full'>
                <Image src={swap} alt="swap" />
            </div>
        </div>
    )
}
export default React.memo(FastSwaps);