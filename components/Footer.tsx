import Image from 'next/image';
import React from 'react';
import twitter from '../assets/icons/twitter.svg';
import telegram from '../assets/icons/telegram.svg';
import discord from '../assets/icons/discord.svg';
import medium from '../assets/icons/medium.svg';
import youtube from '../assets/icons/youtube.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import reddit from '../assets/icons/reddit.svg';

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
                    <a href="#">Help</a>
                    <a href="#">Blog</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
                <div className='flex items-center gap-x-5'>
                    {
                        socialItems?.map(({ socialImage }, index) => (
                            <a key={index} href='#' className='w-6 h-6 rounded-full bg-gray600 hover:bg-gray400 flex items-center justify-center'>
                                <Image src={socialImage} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default React.memo(Footer);