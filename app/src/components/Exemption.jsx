import React, { Fragment, useState } from 'react'
import { CssBaseline, Container, Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
}))



export const Exemption = (props) => {
    const classes = useStyles()

    const [city, setCity] = useState("Mumbai")
    const [rent, setRent] = useState("")
    const [basicSalary, setBasicSalary] = useState("")
    const [da, setDA] = useState("")
    const [hraReceived, setHRAReceived] = useState("")

    const cities = [
        {
            value: 'Chennai',
            label: 'Chennai'
        },
        {
            value: 'Delhi',
            label: 'Delhi'
        },
        {
            value: 'Kolkata',
            label: 'Kolkata'
        },
        {
            value: 'Mumbai',
            label: 'Mumbai'
        },
        {
            value: 'other',
            label: 'Other Non-metropolitian Cities'
        }
    ]

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className={classes.paper}>
                    <form className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    name="city"
                                    id="city"
                                    label="City of Residence"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="city"
                                    autoFocus
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                    value={city}
                                    helperText="Calculation of income tax will differ for metro and non-metro cities."
                                    onChange={(event) => setCity(event.target.value)}>
                                    {cities.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                                <TextField
                                    name="da"
                                    id="da"
                                    label="Dearness Allowances"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="da"
                                    value={da}
                                    helperText="Dearness Allowance (DA) is a calculation on inflation and allowance paid to government employees, public sector employees (PSE) and pensioners."
                                    onChange={(event) => setDA(event.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="rent"
                                    id="rent"
                                    label="Rent Paid"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="rent"
                                    value={rent}
                                    helperText="Annual rent paid by you."
                                    onChange={(event) => setRent(event.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="hraReceived"
                                    id="hraReceived"
                                    label="HRA Received"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="hraReceived"
                                    value={hraReceived}
                                    helperText="House Rent Allowance is a part of the salary provided by an employer to his employee for his rented accommodation."
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

