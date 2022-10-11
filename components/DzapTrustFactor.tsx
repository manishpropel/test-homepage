import AuditedBy from './AuditedBy'
import FastSwaps from './FastSwaps'
import SupportedChains from './SupportedChains'

export default function DzapTrustFactor() {
    return (
        <div className='lg:grid gap-x-10 max-w-1080px lg:w-full w-11/12 m-auto mb-28' style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'minmax(100px, auto)' }}>
            <div className='lg:grid flex flex-col gap-y-6 mb-6 lg:mb-0'>
                <AuditedBy />
                <FastSwaps />
            </div>
            <SupportedChains />
        </div>
    )
}