import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE } from '../constants/AppConstants';
import cart from '../public/cart.svg';
import addTokens from '../public/add-token.svg';
import addTokensMobile from '../public/add-token-mobile.svg';

const SelectTokens = () => {
    const [width, setWidth] = useState<number>();

    const addTokenImage = useCallback(() => (
        width && width < 768 ?
            <Image src={addTokensMobile} alt="add-tokens" />
            :
            <Image src={addTokens} alt="add-tokens" />
    ), [width]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth);
        }
    })
    return (
        <div className='bg-gray900 overflow-hidden rounded-2xl md:pt-8 md:pl-8 pl-4 pt-4 pr-4 md:pr-0 h-full flex flex-col items-center justify-between'>
            <div>
                <Parallax opacity={OPACITY_RANGE}>
                    <div className='w-12 h-12 rounded-lg bg-gray700 flex justify-center items-center'>
                        <Image src={cart} height={22} width={20} alt="cart" />
                    </div>
                </Parallax>
                <Parallax opacity={OPACITY_RANGE}>
                    <p className='mt-3 mb-2 text-gray75 font-medium'>Select Tokens</p>
                </Parallax>
                <Parallax opacity={OPACITY_RANGE}>
                    <p className='text-gray400 mb-16'>Select multiple tokens at once from the DEXs</p>
                </Parallax>
            </div>
            <Parallax opacity={OPACITY_RANGE}>
                <div>
                    {addTokenImage()}
                </div>
            </Parallax>
        </div>
    )
}
export default React.memo(SelectTokens);