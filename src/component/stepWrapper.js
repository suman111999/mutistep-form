import React, { useContext } from 'react'
import FirstStep from './firstStep'
import SecondStep from './secondStep'
import ThirdStep from './thirdStep'
import { Paper, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { StepContext } from '../context/stepperContext';

const StepWrapper = () => {
    const { activeStep, userData, finalData, handleNext, handleBack, setUserDataFn, setFinalDataFn } = useContext(StepContext);
    const steps = [
        'Select master blaster campaign settings',
        'Create an ad group',
        'Create an ad',
    ];

    const showStep = (step) => {
        switch (step) {
            case 0:
                return <FirstStep />
            case 1:
                return <SecondStep />
            case 2:
                return <ThirdStep />
        }
    }

    console.log(finalData)
    // {
    //     firstName: 'suman',
    //     middleName: 'kumar',
    //     lastName: 'chaudhary',
    //     email: 'suman.chaudhary3@byjus.com',
    //     mobileNumber: '8787878788',
    //     altMobileNumber: '78687678787',
    //     city: 'Jaipur',
    //     district: 'uyiyu',
    //     country: 'India'
    //   }
    return (
        <>
            <Stepper style={{ width: '18%', margin: 'auto', marginTop: '2%', marginBottom: '2%' }} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel />
                    </Step>
                ))}
            </Stepper>
            {showStep(activeStep)}
            {finalData.length > 0 &&
                <TableContainer component={Paper} style={{ margin: '2%' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#1976d2' }}>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell align="center">Middle Name</TableCell>
                                <TableCell align="center">Last Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Mobile Number</TableCell>
                                <TableCell align="center">Alternate Mobile Number</TableCell>
                                <TableCell align="center">City</TableCell>
                                <TableCell align="center">District</TableCell>
                                <TableCell align="center">Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {finalData?.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell align="center">{row?.middleName}</TableCell>
                                    <TableCell align="center">{row?.lastName}</TableCell>
                                    <TableCell align="center">{row?.email}</TableCell>
                                    <TableCell align="center">{row?.mobileNumber}</TableCell>
                                    <TableCell align="center">{row?.altMobileNumber}</TableCell>
                                    <TableCell align="center">{row?.city}</TableCell>
                                    <TableCell align="center">{row?.district}</TableCell>
                                    <TableCell align="center">{row?.country}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
        </>
    )
}

export default StepWrapper;