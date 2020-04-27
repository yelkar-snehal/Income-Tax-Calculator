import React, { Fragment, useState } from 'react'
import { CssBaseline, Container, Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import { useHistory } from 'react-router-dom'

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



export const BasicDetails = (props) => {
    const classes = useStyles()

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [panNumber, setPanNumber] = useState("")
    const [birthdate, setBirthdate] = useState(new Date())
    const [age, setAge] = useState(0)
    const [grossIncome, setGrossIncome] = useState("")

    const history = useHistory()

    const handleChange = (date) => {
        setBirthdate(date)
        let currAge = calculate_age(date)
        setAge(currAge)
    }

    const calculate_age = (dob) => {
        let today = new Date()
        let birthDate = new Date(dob)
        let age_now = today.getFullYear() - birthDate.getFullYear()
        let m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--
        }
        return age_now
    }

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.paper}>
                    <form className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    id="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="fname"
                                    autoFocus
                                    value={fname}
                                    onChange={(event) => setFname(event.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    id="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="lname"
                                    value={lname}
                                    onChange={(event) => setLname(event.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="panNumber"
                                    id="panNumber"
                                    label="PAN Number"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="pan"
                                    value={panNumber}
                                    onChange={(event) => setPanNumber(event.target.value.toUpperCase())} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        style={{
                                            marginTop: "0%"
                                        }}
                                        fullWidth
                                        disableFuture
                                        variant="inline"
                                        inputVariant="outlined"
                                        format="MM-dd-yyyy"
                                        margin="normal"
                                        id="birthdate"
                                        name="birthdate"
                                        label="Birthdate"
                                        value={birthdate}
                                        onChange={(date) => handleChange(date)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="age"
                                    id="age"
                                    label="Age"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="age"
                                    disabled
                                    value={age} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="grossIncome"
                                    id="grossIncome"
                                    label="Gross Income Salary"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    autoComplete="salary"
                                    value={grossIncome}
                                    onChange={(event) => setGrossIncome(event.target.value)}
                                    helperText="Your Total Annual Income" />
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
                                    onClick={() => {
                                        // invoke redux action creators with updated data
                                        props.setFirstName(fname)
                                        props.setLastName(lname)
                                        props.setPanNumber(panNumber)
                                        props.setBirthdate(birthdate)
                                        props.setGrossIncome(grossIncome)

                                        // route
                                        history.push('/exemption')
                                    }}
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

