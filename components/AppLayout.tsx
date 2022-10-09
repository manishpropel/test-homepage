import dynamic from 'next/dynamic';
import React, { ReactNode, Suspense } from 'react';
import Footer from './Footer';
// import Header from './Header';
const Header = dynamic(() => import('./Header'), {
    suspense: true,
})
const AppLayout = ({ children }: { children: ReactNode }) => {
    const rootStyle = { backgroundImage: "url('/bg-waves.svg')", backgroundSize: "100% 948px", backgroundRepeat: "no-repeat", backgroundAttachment: 'fixed' }
    return (
        <div style={rootStyle}>
            <Suspense fallback={`Loading...`}>
                <Header />
            </Suspense>
            {children} 
            <Footer />
        </div>
    )
}
export default React.memo(AppLayout);