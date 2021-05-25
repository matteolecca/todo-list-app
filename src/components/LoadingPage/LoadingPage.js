import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Spinner from '../Spinner/Spinner';

const LoadingPage = props => {
    return (
        <Backdrop noopacity opened>
            <Spinner big message="Loading..."/>
        </Backdrop>
    );
};

export default LoadingPage;