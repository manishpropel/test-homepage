import Image from 'next/image';
import React, { useCallback } from 'react';
import Link from 'next/link';
import { LINK_ITEMS, SOCIAL_ITEMS } from '../../constants/AppConstants';

const Footer = () => {
    const socialContent = useCallback(() => (
        SOCIAL_ITEMS?.map(({ socialImage }, index) => (
            <Link key={index} href='#'><a className='w-6 h-6 rounded-full bg-gray600 hover:bg-gray400 flex items-center justify-center'><Image src={socialImage} alt="icon" /></a></Link>
        ))
    ), [SOCIAL_ITEMS]);
    const linkContent = useCallback(() => (
        LINK_ITEMS.map(({ title, link }) => (
            <Link key={title} href={link}><a>{title}</a></Link>
        ))
    ), [LINK_ITEMS]);
    const year = new Date().getFullYear();
    return (
        <div className='w-full h-24 border-t border-gray700 text-gray100 flex items-center justify-center'>
            <div className='flex justify-between items-center w-full max-w-1080px m-auto'>
                <p> DZap &copy; {year} </p>
                <div className='flex items-center gap-x-9'>
                    {linkContent()}
                </div>
                <div className='flex items-center gap-x-5'>
                    {socialContent()}
                </div>
            </div>
        </div>
    )
}
export default React.memo(Footer);