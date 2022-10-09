import Image from 'next/image';
import React from 'react';
import twitter from '../public/twitter.svg';
import telegram from '../public/telegram.svg';
import discord from '../public/discord.svg';
import medium from '../public/medium.svg';
import youtube from '../public/youtube.svg';
import instagram from '../public/instagram.svg';
import linkedin from '../public/linkedin.svg';
import reddit from '../public/reddit.svg';
import Link from 'next/link';

const Footer = () => {
    const socialItems = [
        {
            socialImage: twitter,
            profileLink: ''
        },
        {
            socialImage: telegram,
            profileLink: ''
        },
        {
            socialImage: discord,
            profileLink: ''
        },
        {
            socialImage: medium,
            profileLink: ''
        },
        {
            socialImage: youtube,
            profileLink: ''
        },
        {
            socialImage: instagram,
            profileLink: ''
        },
        {
            socialImage: linkedin,
            profileLink: ''
        },
        {
            socialImage: reddit,
            profileLink: ''
        },
    ]
    return (
        <div className='w-full h-24 border-t border-gray700 text-gray100 flex items-center justify-center'>
            <div className='flex justify-between items-center w-full max-w-1080px m-auto'>
                <p>DZap &copy; 2022</p>
                <div className='flex items-center gap-x-9'>
                    <Link href="#">Help</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Terms</Link>
                    <Link href="#">Privacy</Link>
                </div>
                <div className='flex items-center gap-x-5'>
                    {
                        socialItems?.map(({ socialImage }, index) => (
                            <Link key={index} href='#' className='w-6 h-6 rounded-full bg-gray600 hover:bg-gray400 flex items-center justify-center'>
                                <Image src={socialImage} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default React.memo(Footer);