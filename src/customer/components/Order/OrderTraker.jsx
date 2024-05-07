import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const OrderTraker = ({activeStep}) => {
    const steps = [
        "Placed",
        'Order Confirmed',
        'Shipped',
        'Out For Delivery',
        'Delivered'
    ];
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label)=>
                <Step key={label}>
                        <StepLabel sx={{ color: '#9155FD', fontSize: '44px' }}>{label}</StepLabel>
                </Step>
                )}
            </Stepper>
            <div>
                <h1> Your order has been placed</h1>
            </div>
        </div>
    )
}

export default OrderTraker