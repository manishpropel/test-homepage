import React from 'react';
import logo from '../public/logo.svg';
import Image from 'next/image'
import Link from 'next/link';

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
        <Link key={name} href={path}><a className='text-sm'>{name}</a></Link>
    ));

    return (
        <div className='w-full text-gray400 max-w-1080px m-auto text-sm pt-5 flex justify-between items-center'>
            <Link href="/"><a><Image src={logo} height={28} alt="logo" /></a></Link>
            <div className='flex gap-x-8 items-center'>
                {content}
            </div>
            <button type='button' onClick={() => window.location.href = 'https://www.dzap.io/'} className='h-9 px-4 flex justify-center items-center bg-shade910 text-sm rounded-md'>Launch App</button>
        </div>
    )
}
export default React.memo(Header);