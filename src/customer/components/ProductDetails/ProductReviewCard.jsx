import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = ({item}) => {
  return (
    <div className='flex'>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box className=''>
            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>{item.user.firstName[0].toUpperCase()}</Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className='font-semibold text-lg'>{item.user.firstName}</p>
              <p className='opacity-70'>{item.createdAt}</p>
            </div>
          </div>
          <Rating value={4.5} name='half-rating' readOnly precision={.5}>
            <p>{item.review}</p>
          </Rating>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard