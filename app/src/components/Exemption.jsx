import React, { Fragment, useState } from 'react';
import { CssBaseline, Container, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// material ui styles
const useStyles = makeStyles(theme => ({
    paper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(10),
    },
    next: {
        marginTop: theme.spacing(3),
    },
}));



export const Exemption = (props) => {
    const classes = useStyles();

    const [city, setCity] = useState("");
    const [rent, setRent] = useState("");
    const [basicSalary, setBasicSalary] = useState("");
    const [hraReceived, setHRAReceived] = useState("");

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.paper}>
                    <form className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="city"
                                    id="city"
                                    label="City of Residence"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="city"
                                    autoFocus
                                    value={city}
                                    onChange={(event) => setCity(event.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="basicSalary"
                                    id="basicSalary"
                                    label="Basic Salary"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="basicSalary"
                                    value={basicSalary}
                                    onChange={(event) => setBasicSalary(event.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="rent"
                                    id="rent"
                                    label="Rent Paid"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="rent"
                                    value={rent}
                                    onChange={(event) => setRent(event.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="hraReceived"
                                    id="hraReceived"
                                    label="HRA Received"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="hraReceived"
                                    value={hraReceived}
                                    onChange={(event) => setHRAReceived(event.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="flex-start" justify="flex-end">
                            <Grid item xs={12} sm={2}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    className={classes.next}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Fragment>
    )
}

