import React from 'react';
import { statsDataType } from '../../pages';
import AppIntro from '../AppIntro';
import DzapTrustFactor from '../DzapTrustFactor';
import DzapWorkingModel from '../DzapWorkingModel';
import MultiToMulti from '../MultiToMulti';
import Footer from './Footer';
import Header from './Header';

const AppLayout = ({ data }: { data: statsDataType }) => {
    const rootStyle = {
        backgroundImage: "url('/bg-waves.svg')",
        backgroundSize: "100% 948px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
    }
    return (
        <div style={rootStyle}>
            <Header />
            <AppIntro data={data} />
            <MultiToMulti />
            <DzapWorkingModel />
            <DzapTrustFactor />
            <Footer />
        </div>
    )
}
export default React.memo(AppLayout);