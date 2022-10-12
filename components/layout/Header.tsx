import React, { useCallback, useState } from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image'
import Link from 'next/link';
import { DZAP, LAUNCH_APP, NAVIGATION_ITEMS } from '../../constants/AppConstants';
import hamburger from '../../public/hamburger.svg';
import HeaderSideBar from './HeaderSideBar';

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const content = useCallback(() => (
        NAVIGATION_ITEMS.map(({ name, path }) => (
            <Link key={name} href={path}><a target="_blank" className='text-xs md:text-sm'>{name}</a></Link>
        ))
    ), [NAVIGATION_ITEMS]);
    const handleSideBar = () => {
        setShowSideBar(!showSideBar);
    }
    return (
        <div className='md:w-full w-11/12 m-auto text-gray400 max-w-1080px text-xs md:text-sm pt-5 flex justify-between items-center'>
            <Link href="/"><a><Image src={logo} alt="logo" /></a></Link>
            <div className='hidden md:flex gap-x-8 items-center'>
                {content()}
            </div>
            <button
                type='button'
                onClick={() => window.open(DZAP, "_blank")}
                className='h-9 px-4 hidden md:flex justify-center items-center bg-shade910 hover:bg-gray700 text-xs md:text-sm rounded-md'
            >
                {LAUNCH_APP}
            </button>
            <div className='flex md:hidden'>
                <button
                    type='button'
                    className='flex md:hidden'
                    onClick={handleSideBar}
                    aria-label="menu"
                >
                    <Image src={hamburger} alt="hamburger" />
                </button>
                {showSideBar && <HeaderSideBar handleSideBar={handleSideBar} />}
            </div>
        </div>
    )
}
export default React.memo(Header);