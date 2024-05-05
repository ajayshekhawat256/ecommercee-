import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom';

const OrderDetail = () => {
    
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <p className="font-bold text-lg py-2">Delivery Address</p>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTraker activeStep={0} />
            </div>
            <Grid className='space-x-5' container>
                {[1,1,1,1,1].map((item)=>
                <Grid item container className='shadow-xl rounded-md p-5 border'
                    sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        {" "}
                        <div className="flex  items-center space-x-4 ">
                            <img
                                className="w-[5rem] h-[5rem] object-cover object-top"
                                src="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg"
                                alt=""
                            />
                            <div className="ml-5 space-y-2">
                                <p className="font-semibold">Men Slim Fit Rise Black Jeans</p>
                                <p className="opacity-50 text-xs font-semibold space-x-5">
                                    <span>Color: pink</span> <span>Size: M </span>
                                </p>
                                <p>Seller: linaria </p>
                                <p>₹1090 </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={{color:deepPurple[500]}}
                            className="flex items-center cursor-pointer"
                        >
                            <StarIcon
                                sx={{ fontSize: "2rem" }}
                                className="px-2 text-5xl"
                            />
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>
                )}
            </Grid>

        </div>
    )
}

export default OrderDetail