import { Button, Grid, TextField } from '@mui/material';
import React, { useContext } from 'react'
import { StepContext } from '../context/stepperContext';

const ThirdStep = () => {
    const { activeStep, userData, finalData, handleNext, handleBack, setUserDataFn, setFinalDataFn, onChangeHandler, onSubmit } = useContext(StepContext)
    console.log(finalData)
    return (
        <Grid container onChange={onChangeHandler}>
            <Grid item xs={12}>
                <TextField margin='normal' label='City' name='city' variant='outlined' color='primary' value={userData?.city} />
            </Grid>
            <Grid item xs={12}>
                <TextField margin='normal' label='District' name='district' variant='outlined' color='primary' value={userData?.district} />
            </Grid>
            <Grid item xs={12}>
                <TextField margin='normal' label='Country' name='country' variant='outlined' color='primary' value={userData?.country} />
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' color='primary' onClick={handleBack}>Back</Button>
                <Button variant='contained' color='primary' onClick={onSubmit}>submit</Button>
            </Grid>
        </Grid>
    )
}

export default ThirdStep;