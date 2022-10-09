import React from 'react';
import logo from '../assets/icons/logo.svg';
import Image from 'next/image'

const Header = () => {
    const navigationItems = [
        {
            name: 'Resources',
            path: ''
        },
        {
            name: 'Documentation',
            path: ''
        },
        {
            name: 'Blog',
            path: ''
        },
        {
            name: 'Support',
            path: ''
        },
    ];

    const content = navigationItems.map(({ name, path }) => (
        <a key={name} href={path} className='text-sm'> {name} </a>
    ));

    return (
        <div className='w-full text-gray400 max-w-1080px m-auto text-sm pt-5 flex justify-between items-center'>
            <a href="/">
                <Image src={logo} height={28} alt="logo" />
            </a>
            <div className='flex gap-x-8 items-center'>
                {content}
            </div>
            <button type='button' onClick={() => window.location.href = 'https://www.dzap.io/'} className='h-9 px-4 flex justify-center items-center bg-shade910 text-sm rounded-md'>Launch App</button>
        </div>
    )
}
export default React.memo(Header);