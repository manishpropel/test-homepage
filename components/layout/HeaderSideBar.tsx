import Link from 'next/link';
import React, { useCallback } from 'react';
import { DZAP, LAUNCH_APP, NAVIGATION_ITEMS } from '../../constants/AppConstants';

const HeaderSideBar = ({ handleSideBar }: { handleSideBar: () => void }) => {
    const navigationListToRender = useCallback(() => (
        NAVIGATION_ITEMS.map(({ name, path }) => (
            <Link key={name} href={path}><a target="_blank" className='text-center text-sm'>{name}</a></Link>
        ))
    ), [NAVIGATION_ITEMS])
    return (
        <div className='fixed z-10 bg-primary top-0 left-0 right-0 bottom-0 w-full h-screen flex flex-col justify-center items-center gap-y-8 p-8'>
            <button type='button' onClick={handleSideBar} className='fixed top-4 right-4 text-white font-base text-4xl'> &times; </button>
            {navigationListToRender()}
            <button
                type='button'
                onClick={() => window.open(DZAP, "_blank")}
                className='h-9 px-4 flex justify-center items-center bg-shade910 hover:bg-gray700 text-sm rounded-md'
            >
                {LAUNCH_APP}
            </button>
        </div>
    )
}
export default React.memo(HeaderSideBar);