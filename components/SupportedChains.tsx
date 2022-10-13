import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE, SUPPORTED_CHAINS_LIST, SUPPORTED_CHAINS_LIST_LOWER, SUPPORTED_CHAINS_TITLE } from '../constants/AppConstants';
import Marquee from "react-fast-marquee";

const SupportedChains = () => {
    const textStyle = {
        background: 'linear-gradient(100deg, #FCF95C,#31D08F, #2DE370)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
    }
    const chainItemsUpper = useCallback(() => (
        SUPPORTED_CHAINS_LIST?.map(({ name, img }) => (
            <div className='pr-3' key={name}>
                <Image src={img} alt={name} height={59} />
            </div>
        ))
    ), [SUPPORTED_CHAINS_LIST]);
    const chainItemsLower = useCallback(() => (
        SUPPORTED_CHAINS_LIST_LOWER?.map(({ name, img }) => (
            <div className='pr-3' key={name}>
                <Image src={img} alt={name} height={59} />
            </div>
        ))
    ), [SUPPORTED_CHAINS_LIST]);
    return (
        <div className='bg-gray900 rounded-2xl pt-60px pb-5 flex justify-between items-center flex-col'>
            <Parallax opacity={OPACITY_RANGE}>
                <p style={textStyle} className='font-bold md:text-4xl text-3xl w-72 text-center'> {SUPPORTED_CHAINS_TITLE} </p>
            </Parallax>
            <div className='flex mt-10 flex-wrap gap-x-3 gap-y-6 items-center justify-center md:justify-evenly'>
                <Marquee gradient={false}>
                    {chainItemsUpper()}
                </Marquee>
                <Marquee gradient={false}>
                    {chainItemsLower()}
                </Marquee>
            </div>
        </div>
    )
}
export default React.memo(SupportedChains);