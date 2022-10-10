import AuditedBy from './AuditedBy'
import FastSwaps from './FastSwaps'
import SupportedChains from './SupportedChains'

export default function DzapTrustFactor() {
    return (
        <div className='grid gap-x-10 max-w-1080px m-auto mb-28' style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'minmax(100px, auto)' }}>
            <div className='grid gap-y-6'>
                <AuditedBy />
                <FastSwaps />
            </div>
            <SupportedChains />
        </div>
    )
}