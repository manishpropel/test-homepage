import Image from 'next/image';
import React, { useCallback } from 'react';
import Link from 'next/link';
import { LINK_ITEMS, SOCIAL_ITEMS } from '../../constants/AppConstants';

const Footer = () => {
    const socialContent = useCallback(() => (
        SOCIAL_ITEMS?.map(({ socialImage }, index) => (
            <Link key={index} href='#'><a target="_blank" className='w-6 h-6 rounded-full bg-gray600 hover:bg-gray400 flex items-center justify-center'><Image src={socialImage} alt="icon" /></a></Link>
        ))
    ), [SOCIAL_ITEMS]);
    const linkContent = useCallback(() => (
        LINK_ITEMS.map(({ title, link }) => (
            <Link key={title} href={link}><a target="_blank">{title}</a></Link>
        ))
    ), [LINK_ITEMS]);
    const year = new Date().getFullYear();
    return (
        <div className='w-full lg:h-24 border-t border-gray700 text-gray100 flex items-center justify-center'>
            <div className='flex flex-wrap justify-between lg:justify-between items-center md:w-full w-11/12 m-auto max-w-1080px'>
                <p className='text-center mt-10 lg:mt-0 lg:text-left w-full lg:w-auto'> DZap &copy; {year} </p>
                <div className='flex items-center justify-center gap-x-9 mt-6 lg:mt-0 w-full lg:w-auto'>
                    {linkContent()}
                </div>
                <div className='flex items-center justify-center gap-x-5 mt-6 lg:mt-0 mb-10 lg:mb-0 w-full lg:w-auto'>
                    {socialContent()}
                </div>
            </div>
        </div>
    )
}
export default React.memo(Footer);