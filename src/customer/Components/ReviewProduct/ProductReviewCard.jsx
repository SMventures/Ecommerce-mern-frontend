import React, { useState, useEffect } from "react";
import { Avatar, Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = ({ item }) => {
  const [value, setValue] = useState(item?.rating || 0);
  const [firstName, setFirstName] = useState(item?.user?.firstName || "Anonymous");

  useEffect(() => {
    if (item?.user) {
      setFirstName(item?.user?.firstName || "Anonymous");
    }
  }, [item]);

  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={firstName}
              src=""
            >
              {firstName ? firstName[0].toUpperCase() : "L"}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{firstName ? firstName : "Loading..."}</p>
              <p className="opacity-70">{new Date().toLocaleDateString()}</p> {/* Display today's date */}
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
              <p>Rating: {value}</p> {/* Display the rating value */}
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
