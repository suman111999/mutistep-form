import { Step, StepLabel, Stepper } from '@mui/material';
import React, { createContext, useState } from 'react'

export const StepContext = createContext()
const StepContextProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState({});
    const [finalData, setFinalData] = useState([]);//to show in table

    const handleNext = () => {
        setActiveStep(prev => prev + 1)
    };

    const handleBack = () => {
        setActiveStep(prev => prev - 1)
    };

    const setUserDataFn = (data) => {
        setUserData(data)
    };

    const setFinalDataFn = (data) => {
        setFinalData(data)
    };

    const onChangeHandler = (e) => {
        console.log(e.target.value, e.target.name)
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]: value })
    };

    const onSubmit = (e) => {
        e.preventDefault()
        setFinalData(finalData => [...finalData, userData])
        setUserData({})
        setActiveStep(0)
    };

    return (
        <StepContext.Provider value={{ activeStep, userData, finalData, handleNext, handleBack, setUserDataFn, setFinalDataFn, onChangeHandler, onSubmit }}>
            {children}
        </StepContext.Provider>
    )
};

export default StepContextProvider;