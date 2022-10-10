import React, { useCallback } from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image'
import Link from 'next/link';
import { DZAP, LAUNCH_APP, NAVIGATION_ITEMS } from '../../constants/AppConstants';

const Header = () => {
    const content = useCallback(() => (
        NAVIGATION_ITEMS.map(({ name, path }) => (
            <Link key={name} href={path}><a className='text-sm'>{name}</a></Link>
        ))
    ), [NAVIGATION_ITEMS]);
    return (
        <div className='w-full text-gray400 max-w-1080px m-auto text-sm pt-5 flex justify-between items-center'>
            <Link href="/"><a><Image src={logo} alt="logo" /></a></Link>
            <div className='flex gap-x-8 items-center'>
                {content()}
            </div>
            <button
                type='button'
                onClick={() => window.location.href = DZAP}
                className='h-9 px-4 flex justify-center items-center bg-shade910 text-sm rounded-md'
            >
                {LAUNCH_APP}
            </button>
        </div>
    )
}
export default React.memo(Header);