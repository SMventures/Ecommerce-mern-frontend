import React, { useState } from "react";
import { Avatar, Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = ({ item }) => {
  const [value, setValue] = useState(item?.rating || 0);

  // Ensure item and item.user are defined before accessing their properties
  const firstName = item?.user?.firstName || "Anonymous"; // Provide a default value if firstName is undefined
  
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={firstName} // Use firstName variable here
              src=""
            >
              {firstName[0].toUpperCase()} {/* Use firstName variable here */}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{firstName}</p> {/* Use firstName variable here */}
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