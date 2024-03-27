import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../../Redux/Customers/Review/Action";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../../Redux/Customers/Product/Action";
import ProductReviewCard from "./ProductReviewCard";

const RateProduct = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [rating, setRating] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width:1280px)");
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReview({ review: formData.title, productId, rating }));
    setFormData({ title: "", description: "" });
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    dispatch(findProductById({ productId }));
  }, [dispatch, productId]);

  return (
    <div className="px-5 lg:px-20">
      <Grid sx={{ justifyContent: "space-between" }} container>
        <Grid
          className="flex  lg:items-center shadow-lg border rounded-md p-5"
          item
          xs={12}
          lg={5.8}
        >
          <div>
            <img
              className="w-[5rem] lg:w-[25rem]"
              src={customersProduct.product?.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-3 lg:ml-5 space-y-2 lg:space-y-4">
            <p className="lg:text-lg">{customersProduct.product?.title}</p>
            <p className="opacity-50 font-semibold">
              {customersProduct.product?.brand}
            </p>
            <p>₹{customersProduct.product?.price}</p>
            <p>Size: Free</p>
            {customersProduct.product?.color && (
              <p>Color: {customersProduct.product?.color}</p>
            )}
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={`${!isLargeScreen ? "py-10" : ""} space-y-5`}>
           
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-5 shadow-md border rounded-md"
            >
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.title}
                onChange={handleChange}
                name="title"
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                name="description"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit Review
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default RateProduct;