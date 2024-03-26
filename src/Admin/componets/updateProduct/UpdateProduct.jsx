import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { findProductById, updateProduct } from "../../../Redux/Customers/Product/Action";
import { useParams } from "react-router-dom";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const UpdateProductForm = () => {
  const [productData, setProductData] = useState({
    imageFile: null, // Add image file state
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
    highlights: "",
    specifications: "",
  });
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { customersProduct } = useSelector((store) => store);
  const [sizes, setSizes] = useState(initialSizes);
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "imageFile") {
      setProductData((prevState) => ({
        ...prevState,
        imageFile: e.target.files[0], // Set image file in productData
      }));
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSizes = [...sizes]; // Make a copy of the sizes array
    updatedSizes[index][name] = value; // Update the corresponding size object
    setSizes(updatedSizes); // Update the sizes state
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", productData.imageFile);
    for (const key in productData) {
      if (key !== "imageFile") {
        formData.append(key, productData[key]);
      }
    }
  
    console.log("Product Data:", productData); // Log productData before making the request
  
    try {
      console.log(productId)
      dispatch(updateProduct(productId,productData));
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product. Please try again later.");
    }
  };
  


  useEffect(() => {
    dispatch(findProductById(productId));
  }, [productId]);

  useEffect(() => {
    if (customersProduct.product) {
      setProductData(customersProduct.product);
    }
  }, [customersProduct.product]);

  return (
    <Fragment>
      <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center ">
        Update Product
      </Typography>
      <form onSubmit={handleSubmit} className="UpdateProductContainer min-h-screen">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              name="imageFile" // Ensure this matches the key used in FormData
              onChange={handleChange}
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Stationery">Stationery</MenuItem>
                <MenuItem value="Books">Books</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                {productData.topLavelCategory === "Men" && (
                  <MenuItem value="Clothing">Clothing</MenuItem>
                )}
                {productData.topLavelCategory === "Women" && (
                  <MenuItem value="Clothing">Clothing</MenuItem>
                )}
                {productData.topLavelCategory === "Stationery" && (
                  <MenuItem value="Stationery_Items">Stationery Items</MenuItem>
                )}
                {productData.topLavelCategory === "Accessories" && [

                  <MenuItem value="Phone_Accessories">Phone Accessories</MenuItem>,
                  <MenuItem value="Laptop_Accessories">Laptop Accessories</MenuItem>,

                ]}
                {productData.topLavelCategory === "Electronics" && (
                  <MenuItem value="Electronics_Items">Electronic Items</MenuItem>
                )}
                {productData.topLavelCategory === "Books" && (

                  <MenuItem value="Trading_Books">Trading Books</MenuItem>
                )}
              </Select>

            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                {productData.secondLavelCategory === "Clothing" && [
                  <MenuItem value="women_tshirts">Women Tshirts</MenuItem>,
                  <MenuItem value="men_hoodies"> Men Hoodies</MenuItem>,
                  <MenuItem value="women_hoodies">Women Hoodies</MenuItem>,
                  <MenuItem value="men_tshirts">Men Tshirts</MenuItem>
                ]}

                {productData.secondLavelCategory === "Stationery_Items" && [


                  <MenuItem value="Pen">Pen</MenuItem>,
                  <MenuItem value="Pencil">Pencil</MenuItem>,
                  <MenuItem value="Highlighter">Highlighter</MenuItem>,
                  <MenuItem value="Calender">Calender</MenuItem>,
                  <MenuItem value="Markers">Markers</MenuItem>,
                  <MenuItem value="Rulers">Rulers</MenuItem>,
                  <MenuItem value="Notepad">Notepad</MenuItem>,
                  <MenuItem value="Diary">Diary</MenuItem>,

                ]}  {productData.secondLavelCategory === "Electronics_Items" && [

                  <MenuItem value="Keyboard">Keyboard</MenuItem>,
                  <MenuItem value="Mouse">Mouse</MenuItem>,
                  <MenuItem value="Usb_Cable">Usb Cable</MenuItem>,
                  <MenuItem value="Camera">Camera</MenuItem>,
                  <MenuItem value="Headphones">Headphones</MenuItem>,


                ]}  {productData.secondLavelCategory === "Phone_Accessories" && [

                  <MenuItem value="Phone_Covers">Phone Covers</MenuItem>,
                  <MenuItem value="Phone_Skins">Phone Skins</MenuItem>,

                ]}
                {productData.secondLavelCategory === "Laptop_Accessories" && [

                  <MenuItem value="Laptop_Bags">Laptop Bags</MenuItem>,
                  <MenuItem value="Laptop_Skins">Laptop Skins</MenuItem>,
                  <MenuItem value="Laptop_Sleevess">Laptop Sleeves</MenuItem>,


                ]}
                {productData.secondLavelCategory === "Trading_Books" && [

                  <MenuItem value="Motivational">Motivational</MenuItem>,
                  <MenuItem value="Biography">Biography</MenuItem>,
                  <MenuItem value="Fundamental_Analysis">Fundamental Analysis</MenuItem>,
                  <MenuItem value="Technical_Analysis">Technical Analysis</MenuItem>,
                  <MenuItem value="Psychology">Psychology</MenuItem>,
                  <MenuItem value="Risk_Management">Risk Management</MenuItem>,
                  <MenuItem value="Economic_Analysis">Economic Analysis</MenuItem>,

                ]}


              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>{" "}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Update Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default UpdateProductForm;
