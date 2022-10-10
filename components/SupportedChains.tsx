import Image from 'next/image';
import React, { useCallback } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE, SUPPORTED_CHAINS_LIST, SUPPORTED_CHAINS_TITLE } from '../constants/AppConstants';

const SupportedChains = () => {
    const textStyle = {
        background: 'linear-gradient(100deg, #FCF95C,#31D08F, #2DE370)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontSize: '40px',
    }
    const chainItems = useCallback(() => (
        SUPPORTED_CHAINS_LIST?.map(({ name, img }) => (
            <Image key={name} src={img} alt={name} height={59} />
        ))
    ), [SUPPORTED_CHAINS_LIST]);
    return (
        <div className='bg-gray900 rounded-2xl pt-60px pb-5 flex justify-between items-center flex-col'>
            <Parallax opacity={OPACITY_RANGE}>
                <p style={textStyle} className='font-bold w-72 text-center'> {SUPPORTED_CHAINS_TITLE} </p>
            </Parallax>
            <div className='flex flex-wrap gap-x-3 gap-y-6 items-center justify-between'>
                {chainItems()}
            </div>
        </div>
    )
}
export default React.memo(SupportedChains);