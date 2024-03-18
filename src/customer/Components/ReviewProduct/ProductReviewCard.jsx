import React from "react";
import { useSelector } from "react-redux"; 
import  { useState } from "react";
import { Avatar, Rating, Box, Typography, Grid } from "@mui/material";
import { getUser } from "../../../Redux/Auth/Action";
import {  useEffect} from "react";
import { useDispatch } from "react-redux";


const ProductReviewCard = ({ item }) => {
  

  const [value, setValue] = useState(item?.rating || 0); 
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  
  },[jwt])
  
  
  // Initialize rating value

  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item?.user?.firstName}
              src=""
            >
             {item?.user?.firstName[0].toUpperCase()}  
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{item.user?.firstName}</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <div>
              <Rating
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                name="product-rating"
                precision={0.5}
              />
            </div>
            <p>{item?.review}</p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
