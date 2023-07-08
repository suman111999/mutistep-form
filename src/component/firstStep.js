import { Button, Grid, TextField } from '@mui/material';
import React, { useContext } from 'react'
import { StepContext } from '../context/stepperContext';

const FirstStep = () => {
    const { activeStep, userData, finalData, handleNext, handleBack, setUserDataFn, setFinalDataFn, onChangeHandler } = useContext(StepContext);
    //event delegation
    return (
        <Grid container onChange={onChangeHandler}>
            <Grid item xs={12}>
                <TextField label='First Name' name='firstName' margin='normal' variant='outlined' value={userData?.firstName} />
            </Grid>
            <Grid item xs={12}>
                <TextField label='Middle Name' name='middleName' margin='normal' variant='outlined' value={userData?.middleName} />
            </Grid>
            <Grid item xs={12}>
                <TextField label='Last Name' name='lastName' variant='outlined' margin='normal' value={userData?.lastName} />
            </Grid>
            <Grid item xs={12}>
                <Button variant='contained' color='primary' onClick={handleNext}>Next</Button>
            </Grid>
        </Grid>
    )
};

export default FirstStep;