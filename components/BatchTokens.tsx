import Image from 'next/image';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE } from '../constants/AppConstants';
import multiFrom from '../public/multi-from.svg';
import cart from '../public/cart.svg';

const BatchTokens = () => {
    return (
        <div className='bg-gray900 overflow-hidden rounded-2xl p-4 md:p-8 flex justify-center items-center'>
            <div>
                <Parallax opacity={OPACITY_RANGE}>
                    <Image width={570} height={313} src={multiFrom} alt="multi-from" />
                </Parallax>
                <div className='w-12 bg-gray700 h-12 rounded-lg md:mt-10 mt-5 flex justify-center items-center'>
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
    )
}
export default React.memo(BatchTokens);