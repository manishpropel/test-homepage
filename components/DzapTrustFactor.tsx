import Image from 'next/image';
import { AUDITED_BY } from '../constants/AppConstants';
import audited from '../public/audited.svg';
import blocksec from '../public/blocksec.svg';
import zokyo from '../public/zokyo.svg';

export default function DzapTrustFactor() {
    const auditedStyle = {
        background: 'linear-gradient(103.62deg, #01A76C 11.55%, #71EDB5 107.01%)'
    };
    return (
        <div className='grid gap-x-10 max-w-1080px m-auto mb-28' style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'minmax(100px, auto)' }}>
            <div className='grid gap-y-6'>
                <div style={auditedStyle} className='px-10 py-7 flex gap-x-10'>
                    <Image src={audited} width={112} height={140} alt="audited" />
                    <div>
                        <p className='text-white mb-8'>{AUDITED_BY}</p>
                        <div className='flex gap-x-8 items-center'>
                            <Image height={32} width={86} src={zokyo} alt="zokyo" />
                            <Image height={32} width={145} src={blocksec} alt="blocksec" />
                        </div>
                    </div>
                </div>
                <div className='bg-gray-600'>k</div>
            </div>
            <div className='bg-pink-300'>s</div>
        </div>
    )
}