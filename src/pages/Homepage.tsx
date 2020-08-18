import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    root: {
        margin: 0,
    },
    title: {
        textAlign: 'center',
        fontSize: '12vw',
        marginTop: '20vh',
        marginBottom: 0,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '2vw',
        marginTop: 0,
        marginBottom: 0,
    },
}), {
    classNamePrefix: 'homepage',
});

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <h1 className={classes.title}>enyo.gg</h1>
            <h2 className={classes.subtitle}>Coming soon.</h2>
        </section>
    );
};
