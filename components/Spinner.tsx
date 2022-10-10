import React from 'react';

const Spinner = () => {
    return (
        <span className="h-screen w-full flex justify-center items-center">
            <span className="animate-ping relative flex h-10 w-10  rounded-full bg-green300 opacity-75"></span>
        </span>
    )
}
export default React.memo(Spinner);