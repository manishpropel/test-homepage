import React, { ReactNode } from 'react';
import AppIntro from '../AppIntro';
import DzapTrustFactor from '../DzapTrustFactor';
import DzapWorkingModel from '../DzapWorkingModel';
import MultiToMulti from '../MultiToMulti';
import Footer from './Footer';
import Header from './Header';

const AppLayout = () => {
    const rootStyle = {
        backgroundImage: "url('/bg-waves.svg')",
        backgroundSize: "100% 948px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
    }
    return (
        <div style={rootStyle}>
            <Header />
            <AppIntro />
            <MultiToMulti />
            <DzapWorkingModel />
            <DzapTrustFactor />
            <Footer />
        </div>
    )
}
export default React.memo(AppLayout);