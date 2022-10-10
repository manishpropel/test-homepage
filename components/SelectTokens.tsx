import Image from 'next/image';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { OPACITY_RANGE } from '../constants/AppConstants';
import cart from '../public/cart.svg';
import addTokens from '../public/add-token.svg';

const SelectTokens = () => {
    return (
        <div className='bg-gray900 overflow-hidden rounded-2xl pt-8 pl-8 h-full flex flex-col justify-between'>
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
                    <Image src={addTokens} alt="add-tokens" />
                </div>
            </Parallax>
        </div>
    )
}
export default React.memo(SelectTokens);