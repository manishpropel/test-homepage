import React, { useCallback } from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image'
import Link from 'next/link';
import { DZAP, LAUNCH_APP, NAVIGATION_ITEMS } from '../../constants/AppConstants';

const Header = () => {
    const content = useCallback(() => (
        NAVIGATION_ITEMS.map(({ name, path }) => (
            <Link key={name} href={path}><a target="_blank" className='text-xs md:text-sm'>{name}</a></Link>
        ))
    ), [NAVIGATION_ITEMS]);
    return (
        <div className='md:w-full w-11/12 m-auto text-gray400 max-w-1080px text-xs md:text-sm pt-5 flex justify-between items-center'>
            <Link href="/"><a><Image src={logo} alt="logo" /></a></Link>
            <div className='hidden md:flex gap-x-8 items-center'>
                {content()}
            </div>
            <button
                type='button'
                onClick={() => window.open(DZAP, "_blank")}
                className='h-9 px-4 flex justify-center items-center bg-shade910 hover:bg-gray700 text-xs md:text-sm rounded-md'
            >
                {LAUNCH_APP}
            </button>
        </div>
    )
}
export default React.memo(Header);