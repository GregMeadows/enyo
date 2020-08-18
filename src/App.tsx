import React, { FunctionComponent } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Homepage } from './pages/Homepage';

export const App: FunctionComponent = () => {
    return (
        <>
            <CssBaseline />
            <Homepage />
        </>
    );
};
