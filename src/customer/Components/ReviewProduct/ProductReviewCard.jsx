import React, { useState, useEffect } from "react";
import { Avatar, Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = ({ item, totalReviews }) => {
  const [value, setValue] = useState(null); // State to hold the rating value
  const [showRating, setShowRating] = useState(false); // State to control showing the rating section
  const [firstName, setFirstName] = useState(item?.user?.firstName || "Anonymous");

  useEffect(() => {
    if (item?.user) {
      setFirstName(item?.user?.firstName || "Anonymous");
    }
    // Show the rating section after 2 seconds
    const timeout = setTimeout(() => {
      setShowRating(true);
    }, 2000);
    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, [item]);

  // Function to handle rating change
  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <p>{item?.review}</p>
            {showRating && ( // Show rating section after 2 seconds
              <div>
                {value === null ? ( // If rating is not provided
                  <div>
                    <Typography>Rate a product:</Typography>
                    <Rating
                      value={value}
                      onChange={handleRatingChange}
                      name="product-rating"
                      precision={0.5}
                    />
                  </div>
                ) : ( // If rating is provided, display the rating value
                  <p>Rating: {value}</p>
                )}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
      <p className="ml-3 text-sm font-medium text-blue-700 hover:text-blue-500">
        {totalReviews} reviews
      </p>
    </div>
  );
};

export default ProductReviewCard;
