import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
// import "./CreateProductForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  findProductById,
  updateProduct,
} from "../../../Redux/Customers/Product/Action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const UpdateProductForm = () => {
  const [productData, setProductData] = useState({
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
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { productId } = useParams();
  const { customersProduct } = useSelector((store) => store);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct());
    console.log(productData);
  };

  useEffect(() => {
    dispatch(findProductById({productId}));
  }, [productId]);

  useEffect(()=>{
    if(customersProduct.product){
        for(let key in productData){
    setProductData((prev)=>({...prev,[key]:customersProduct.product[key]}))
    console.log(customersProduct.product[key],"--------",key)
}
    }

  },[customersProduct.product])

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Update Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
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
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
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
                {productData.topLavelCategory === "men" && (
                
                    <MenuItem value="Clothing">Clothing</MenuItem>
                  
                )}
                {productData.topLavelCategory === "women" && (
                
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
                  <MenuItem value="Electronic_Items">Electronic Items</MenuItem>
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
                  <MenuItem value="men_hoodies">Men Hoodies</MenuItem>,
                  <MenuItem value="women_hoodies">Women Hoodies</MenuItem>,
                  <MenuItem value="men_tshirts">Men Tshirts</MenuItem>
                ]}

                if {productData.secondLavelCategory === "Stationery_Items" && [
                  

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

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="highlights"
              multiline
              name="highlights"
              rows={3}
              onChange={handleChange}
              value={productData.highlights}
            />
          </Grid>
          {/* {productData.size.map((size, index) => (
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
          ))} */}
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
