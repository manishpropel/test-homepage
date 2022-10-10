import React from 'react';
import AppIntro from './AppIntro';
import DzapTrustFactor from './DzapTrustFactor';
import DzapWorkingModel from './DzapWorkingModel';
import AppLayout from './layout/AppLayout';
import MultiToMulti from './MultiToMulti';

const Main = () => {
    return (
        <AppLayout>
            <>
                <AppIntro />
                <MultiToMulti />
                <DzapWorkingModel />
                <DzapTrustFactor />
            </>
        </AppLayout>
    )
}
export default React.memo(Main);