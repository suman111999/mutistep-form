import { Button, Grid, TextField } from '@mui/material';
import React, { useContext } from 'react'
import { StepContext } from '../context/stepperContext';

const SecondStep = () => {
    const { activeStep, userData, finalData, handleNext, handleBack, setUserDataFn, setFinalDataFn, onChangeHandler } = useContext(StepContext)
    return (
        <Grid container onChange={onChangeHandler}>
            <Grid item xs={12}>
                <TextField type='email' label='Email' name='email' variant='outlined' margin='normal' color='primary' value={userData?.email} />
            </Grid>
            <Grid item xs={12}>
                <TextField type='number' label='Mobile Number' name='mobileNumber' variant='outlined' margin='normal' color='primary' value={userData?.mobileNumber} />
            </Grid>
            <Grid item xs={12}>
                <TextField type='number' label='Alt Mobile Number' name='altMobileNumber' variant='outlined' margin='normal' color='primary' value={userData?.altMobileNumber} />
            </Grid>
            <Grid item xs={12}>
                <Grid container xs={12} md={12} style={{ display: 'flex', justifyContent: 'center' }} spacing={5}>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant='outlined' color='primary' onClick={handleBack}>Back</Button>
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '5rem' }}>
                        <Button variant='contained' color='primary' onClick={handleNext}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SecondStep;