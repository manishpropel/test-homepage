import React from 'react';
import { statsDataType } from '../pages';
import AppLayout from './layout/AppLayout';

const Main = ({ data }: { data: statsDataType }) => {
    return (
        <AppLayout data={data} />
    )
}
export default React.memo(Main);