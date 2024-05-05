import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from 'react-router-dom';


const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-2 shadow-md hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmen-shirt&psig=AOvVaw3PFcDVgneaijQVuprxz-yW&ust=1710354540013000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPD67Kit74QDFQAAAAAdAAAAABAE" alt="" />
                        <div className="ml-5 space-y-2">
                            <p className=''>Men Slim Mid Rise Black Jeans</p>
                            <div className="opacity-50 text-xs font-semibold">Size: M</div>
                            <p className='opacity-50 text-xs font-semibold'>Color :Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>
                                Delivered on March 03
                            </span>
                        </p>

                        <p className='text-xs'>Your item has been delivered</p>
                    </div>
                    }

                    {false && <p>
                        <span>
                            Expected Delivery on Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard