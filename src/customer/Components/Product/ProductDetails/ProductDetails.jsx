import * as React from 'react';
import { Fragment } from 'react';
import { useState } from "react";
import "./styles2.css";

import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "../../ReviewProduct/ProductReviewCard";
import RateProduct from "../../ReviewProduct/RateProduct";
import { Favorite as FavoriteIconOutlined, FavoriteBorder as FavoriteIcon } from '@mui/icons-material';
import axios from 'axios';
import Rate from "../../ReviewProduct/ProductReviewCard";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import HomeProductCard from "../../Home/HomeProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../../Redux/Customers/Cart/Action";
import { getAllReviews } from "../../../../Redux/Customers/Review/Action";
import {
  findProductById,
  getSimilarProducts,
  getBoughtTogether,
  getInterested,
} from "../../../../Redux/Customers/Product/Action";

import { lengha_page1 } from "../../../../Data/Women/LenghaCholi";
import { gounsPage1 } from "../../../../Data/Gouns/gouns";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { addItemToWishlist, removeWishlistItem } from '../../../../Redux/Customers/Wishlist/Action';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Checkout from '../../Checkout/Checkout';
import OrderSummary from '../../Checkout/OrderSummary';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { FaRupeeSign } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
// import DeliveryDate from './DeliveryDate';
import { Table, TableBody, TableRow, TableCell, styled, } from '@mui/material';
import ItemList from './ItemList';
import Boughtogether from './Boughtogether';
import ReactImageMagnify from 'react-image-magnify';



// for delivery date
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
& > td {
        font-size: 14px;
        margin-top: 10px;
    }
`

const product = {
  name: "Product",
  price: "₹996",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Product", href: "#" },

  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
  const [simmyProducts, setSimmyProducts] = useState([]);
  const [BoughtTogether, setBoughtTogether] = useState([]);
  const [interestedProducts, setInterested] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { review, customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");

  const [showRatingReview, setShowRatingReview] = useState(false);

  const Component = styled(Box)`
  padding: 20px;
  background: #f2f2f2;
`;

  const getCategoryName = async () => {
    try {
      const res = await fetch(`http://localhost:5454/api/products/id/${productId}`);
      const data = await res.json();
      const cardId = data.category.name;
      console.log('Category Name:', cardId); // Log the fetched category name

      if (cardId === 'men_hoodies' || cardId === 'men_tshirts' || cardId === 'women_hoodies' || cardId === 'women_tshirts') {
        setShowSizes(true); // Set showSizes to true for the specified category names
      }


      getSimilarProducts(cardId);
      getBoughtTogether(cardId);
      getInterested(cardId);
    } catch (error) {
      console.error('Error fetching category name:', error);
    }
  }


  const getSimilarProducts = async (category) => {
    const response = await fetch(`http://localhost:5454/api/products?category=${category}`);
    const data = await response.json();
    setSimmyProducts(data.content);
  };

  const getBoughtTogether = async (category) => {
    const response = await fetch(`http://localhost:5454/api/products?category=${category}`);
    const data = await response.json();
    setBoughtTogether(data.content);
  };
  

  

  const getInterested = async (category) => {
    const response = await fetch(`http://localhost:5454/api/products`);
    const data = await response.json();
    setInterested(data.content);
  };

  useEffect(() => {
    getCategoryName();
    dispatch(findProductById({ productId }));
    dispatch(getAllReviews(productId));
  }, [dispatch, productId]);

  const handleSetActiveImage = (image) => {
    setActiveImage(image);
  };
  const handleSubmit = () => {
    const data = { productId, size: selectedSize ? selectedSize.name : null };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };
  const addToCart = (items) => {
    // Dispatch an action to add items to the cart
    console.log("Adding items to cart:", items);
    dispatch(addItemToCart(items));
  }
  
  const handleCartSubmit = () => {
    const itemsToAdd = [customersProduct.product, BoughtTogether[0], BoughtTogether[1]];
  
    // Call addToCart function to add items to the cart
    console.log("Submitting items to cart:", itemsToAdd);
    addToCart(itemsToAdd);
  };
  
  const handlewishlistSubmit = () => {
    const data = { productId };
    dispatch(addItemToWishlist({ data, jwt }));
    setIsClicked(true); // Toggle the state to change the color
    setShowNotification(true); // Show the notification
    setTimeout(() => setShowNotification(false), 3000); // Hide the notification after 3 seconds

    // navigate("/cart");
  };
  const handleBuyNow = () => {
    const data = { productId };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/checkout?step=2");
  };
  const [isClicked, setIsClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // const isProductInWishlist = (product) => {
  //   // Check if customersProduct exists and has a wishlist property
  //   if (customersProduct && customersProduct.wishlist) {
  //     // Check if the product exists in the wishlist array
  //     return customersProduct.wishlist.some((item) => item.id === product.id);
  //   }
  //   // Return false if customersProduct or wishlist is undefined
  //   return false;
  // };

  // const handleWishlistToggle = (product) => {
  //   if (!isProductInWishlist(product)) {
  //     // If the product is not in the wishlist, add it to the wishlist
  //     dispatch(addItemToWishlist({ jwt, data: product }));
  //   } else {
  //     // If the product is already in the wishlist, do nothing
  //     console.log("Item is already in the wishlist");
  //   }
  // };
 // Function to calculate total discounted price
const calculateTotalDiscountedPrice = (products) => {
  let total = 0;
  products.forEach((item) => {
    total += item.discountedPrice;
  });
  return total;
};

// Function to calculate total discounted percentage
const calculateTotalDiscountedPersent = (products) => {
  let totalDiscountedPersent = 0;
  products.forEach((item) => {
    totalDiscountedPersent += item.discountPersent;
  });
  return totalDiscountedPersent;
};

// Function to calculate total price
const calculateTotalPrice = (products) => {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
};

  // Function to check if a product is in the wishlist

  const [showSizes, setShowSizes] = useState(false);


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Define your custom arrow components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="prev-arrow" onClick={onClick}>&#10094;</div>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="next-arrow" onClick={onClick}>&#10095;</div>;
  };

  const containerStyle = {
    backgroundColor: '#e0eaf6',
    padding: '10px',
    borderRadius: '10px',
  };

  const FrequentlyBoughtTogether = styled(Box)`
  background: #f2f2f2;
  padding: 20px;
`;

const GrayBackground = styled(Box)`
  background: #ccc;
  padding: 20px;
`;
// const {  imageUrl } = product; // Assuming _id is the productId

const WhiteContainer = styled(Box)`
  background: #fff;
  padding: 20px;
`;
const BackgroundBox = styled(Box)`
    background: #f2f2f2; /* Background color */
  `;
  const Component1 = styled(Box)`
  margin-top: 10px;
  background:  #f2f2f2;
`;
  return (
    <Component>
      {/* <div style={{  padding: '5px', backgroundColor: '#f0f0f0' ,width: '100%' }}> */}
        {/* <WhiteContainer> */}
        <div className="bg-white ">
      <div className="pt-0">
        
      <div style={{  padding: '4px', backgroundColor: '#f0f0f0' ,width: '100%' }}> 
        <WhiteContainer>
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            
     
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    
    
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            
    
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {customersProduct.product?.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* product details */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
  {/* Image gallery */}
  {/* Sticky section */}
  <div className="relative">
    <div className="sticky top-0">
      {/* Image gallery */}
      <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4">
        <div className="absolute top-2 right-8 cursor-pointer" onClick={handlewishlistSubmit}>
          {/* Wishlist icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isClicked ? 'red' : 'none'}
            stroke={isClicked ? 'red' : 'grey'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '24px', height: '24px' }}
          >
            <path d="M12 21.21l-1.65-1.51C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.35 11.2L12 21.21z" />
          </svg>
        </div>
        {/* Image with zoom effect */}
       

            {/* Notification bar */}
            {showNotification && (
              <div className="absolute top-0 right-0 mt-8 mr-8 bg-green-500 text-white px-4 py-2 rounded">
                Item added to wishlist
              </div>
            )}
<div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-[30rem] max-h-[35rem]">
  {/* Main product image with zoom effect */}
  <div className="relative overflow-hidden">
  <ReactImageMagnify
  {...{
    smallImage: {
      alt: product.images[0].alt,
      isFluidWidth: true,
      src: activeImage?.src || customersProduct.product?.imageUrl,
    },
    largeImage: {
      src: activeImage?.src || customersProduct.product?.imageUrl,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerClassName: 'enlargedImageContainer',
    enlargedImageClassName: 'enlargedImage',
  }}
/>
  </div>
</div>

{/* Thumbnail images */}
<div className="flex flex-wrap space-x-5 justify-center">
  {product.images.map((image) => (
    <div
      onClick={() => handleSetActiveImage(image)}
      className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
      key={image.id}
    >
      {/* Thumbnail image */}
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
      />
    </div>
  ))}
</div>

            {/* Buttons */}
            <form className="mt-10 flex flex-wrap space-x-5 justify-center" onSubmit={handleSubmit}>
              {/* Add to cart button */}
              <Button
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", background: "#2874f0" }}
              >
                Add To Cart
              </Button>

              {/* Buy now button */}
              <form onSubmit={handleBuyNow}>
                <Button
                  onClick={() => navigate("/checkout?step=2")}
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem", background: "#2874f0" }}
                >
                  Buy Now
                </Button>
              </form>
            </form>
          </div>
        </div>
      </div>


          {/* Product info */}
          <Container >
            <div className="lg:col-span-1 mx-auto max-w-2xl px-0 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
              <div className="lg:col-span-2 flex flex-col justify-start -ml-1 items-start">
                <h2 className="text-lg lg:text-xl font-semibold text-grey-900 opacity-60 text-left mb-2"> {/* Added mb-2 for bottom margin */}
                  {customersProduct.product?.brand}
                </h2>
                <h2 className='text-xl lg:text-2xl text-gray-900 pt-1 text-left font-semibold'> {/* Added font-semibold */}
                  {customersProduct.product?.title}
                </h2>
              </div>

              <p className="font-semibold text-green-600 mt-4"> {/* Changed mt-2 to mt-4 */}
                Special price
              </p>


              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-5 items-center text-l lg:text-2xl tracking-tight text-gray-900 mt-2">
                  <p className="font-semibold">
                    ₹{customersProduct.product?.discountedPrice}
                  </p>
                  <p className="opacity-50 line-through">
                    ₹{customersProduct.product?.price}
                  </p>
                  <p className="text-green-600 font-semibold">
                    {customersProduct.product?.discountPersent}% Off
                  </p>
                </div>
                {/* Reviews
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
 
                  <div className="flex items-center space-x-3">
                    <Rating
                      name="read-only"
                      value={4.6}
                      precision={0.5}
                      readOnly
                    />
 
                    <p className="opacity-60 text-sm">Ratings</p>
                    <p className="ml-3 text-sm font-medium text-blue-700 hover:text-blue-500">
                      {reviews.totalCount} reviews
                    </p>
                  </div>
                 
                </div> */}

                <div className="mt-6">


                  <div className="flex items-center space-x-3">




                  </div>
                </div>
                {showSizes && (
                  <form className="mt-10" onSubmit={handleSubmit}>
                    {/* Sizes */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h5 className="text-lg font-semibold text-gray-900">Size</h5> {/* Adjust font size here */}
                      </div>
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a size
                        </RadioGroup.Label>
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2"> {/* Adjust grid columns and gap */}
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm sm:text-base lg:text-lg font-semibold uppercase hover:bg-gray-50 focus:outline-none", // Adjust font size here
                                  size.inStock
                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  active ? "ring-1 ring-indigo-500" : ""
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-indigo-500"
                                          : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-md"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-900"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-900"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </form>
                )}

              </div>
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className='text-l lg:text-xl font-bold text-gray-900 mt-2 mb-1' style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900 mb-5">
                      {customersProduct.product?.description}
                    </p>
                  </div>
                </div>
                {/* Highlights */}
                {/* highlights */}
 
                <Box sx={{ width: '100%' }}>
                  <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography component="h3" variant="subtitle2 " className='text-l lg:text-xl font-bold text-gray-900 mt-2 mb-1' style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Highlights
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ maxWidth: { sm: '100%', md: '100%' }, overflowX: 'auto' }}>
                        <Typography variant="body2" gutterBottom>
                          <pre className="text-base text-gray-900">
                            {customersProduct.product?.highlights}
                          </pre>
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
 
                  {/* specification 
 
 
                  <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <Typography component="h3" variant="subtitle2 "className='text-l lg:text-xl font-bold text-gray-900 mt-2 mb-1' style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Specifications
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ maxWidth: { sm: '100%', md: '100%' }, overflowX: 'auto' }}>
                        <Typography variant="body2" gutterBottom>
                          <pre className="text-base text-gray-900">
                            {customersProduct.product?.specifications}
                          </pre>
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>*/}
                </Box> 




                <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }} className='mt-2 '>
                    <FaTools style={{ color: '#ff5733', fontSize: '1.5rem', marginRight: '0.5rem' }} />
                    <h3 className='text-l lg:text-xl font-bold text-gray-900 mt-2 mb-1' style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Services</h3>
                  </div>

                  <div className="space-y-4" >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FaRupeeSign style={{ color: 'green', marginRight: '5px' }} />
                      <h2 style={{ margin: '0' }}>Cash on Delivery available</h2>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FaUndo style={{ color: 'blue', marginRight: '5px' }} />
                      <h2 style={{ margin: '0' }}>3 Days Return Policy</h2>
                    </div>
                  </div>
                </div>


 {/* deliviry date */}
 <Table>
<TableBody>
<ColumnText>
<TableCell style={{ color: '#878787' }}>Delivery</TableCell>
<TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()}</TableCell>
</ColumnText>


</TableBody>
</Table>


        {/* rating and review section */}
        <section className="">
        <h1 className="font-semibold text-2xl pb-4 mt-4">
    Ratings & Reviews
</h1>

         
        </section>




        {/* rating and review section */}
        <Grid item xs={7}>
          <div className="space-y-5">
            {review.reviews?.map((item, i) => (
              <ProductReviewCard key={i} item={item} />
            ))}
          </div>
        </Grid>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowRatingReview(!showRatingReview)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Add a review
          </button>
        </div>

        {/* Add margin or padding to create a gap */}


        {/* Conditionally render the rating and review section */}
        {showRatingReview && (
          <Grid container spacing={7}>
            <RateProduct />
          </Grid>
        )}




                {/* <div>
                <h3 className="text-sm font-bold text-gray-900 mt-5 mb-2">Highlights</h3>
                <div className="space-y-6">
                  <pre className="text-base text-gray-900">
                   
                    {customersProduct.product?.highlights}
                  </pre>
                </div>
              </div> */}
                {/* specifications */}
                {/* <div>
                <h3 className="text-sm font-bold text-gray-900 mt-5 mb-2">Specifications</h3>
                <div className="space-y-6">
                  <pre className="text-base text-gray-900">
                    {customersProduct.product?.specifications}
                  </pre>
                </div>
              </div> */}




                {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
 
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlights) => (
                      <li key={highlights} className="text-gray-400">
                        <span className="text-gray-600">{customersProduct.product?.highlights}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

                {/* <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
 
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div> */}
              
              
              </div>
            </div>
          </Container >
        </section>
        </WhiteContainer>
    </div>
 
        </div>

        

        {/* Add the provided HTML code for the image */}
        <div style={{  padding: '5px', backgroundColor: '#f0f0f0' ,width: '100%' }}>
        <WhiteContainer>

        {/* <div className="_3ywSr_" style={{ paddingTop: '2%' }}> */}
        

          {/* <div className="_1bEAQy _2iN8uD _312yBx" style={{ paddingTop: '1%' }}> */}
            <img className="_2OHU_q HnOpP8 aA9eLq" alt="" src="https://rukminim2.flixcart.com/www/2000/2000/promos/01/12/2018/8aa01ab4-de88-4a46-9d93-5c7f3ebac2df.png?q=50" />
          {/* </div> */}

        {/* </div> */}
        </WhiteContainer>

</div>


        
        {/* Similar Products */}
        {/* <section className="pt-10"> */}
        <div style={{  padding: '5px', backgroundColor: '#f0f0f0' }}>
        <WhiteContainer>

        <div class="divider-container">
  <div class="divider-line"></div>
  <div class="divider-content">
    <h1 class="divider-heading">Similar Styles</h1>
  </div>
  <div class="divider-line"></div>
</div>
<div class="slider-container">
  <Slider slidesToShow={5} slidesToScroll={1} infinite={false} autoplay={false} autoplaySpeed={2000} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
    {simmyProducts.slice(0, 50).map((item) => (
      <a key={item._id} href={`/product/${item._id}`} class="product-link">
            <HomeProductCard product={item} src={item?.image || item?.imageUrl} />
      </a>
    ))}
  </Slider>

</div>
</WhiteContainer>
</div>
{/* </section> */}




                        
{/* interest */}
<div style={{  padding: '5px', backgroundColor: '#f0f0f0' }}>
<WhiteContainer>

    <h1 className="py-5 text-xl font-bold">You May Also Like...</h1>
<ItemList />
</WhiteContainer>

</div>

{/* <section className="pt-10"> */}
<div style={{ padding: '5px', backgroundColor: '#f0f0f0', width: '100%' }}>
  <WhiteContainer>
  
        <h1 className="py-5 text-xl font-bold">Frequently Bought Together</h1>
      

    <div className="slider-container">
      {BoughtTogether.slice(0, 2).map((productSet, index) => (
        <Fragment key={index}>
          <div className="bought-together-card flex items-center mb-4"> {/* Use flexbox for row layout */}
            {/* Product 1 */}
            <div className="product-card"> {/* Wrap product 1 in a card-like container */}
              <div className="image-container relative">
                <img
                  src={activeImage?.src || customersProduct.product?.imageUrl}
                  alt={product.images[0].alt}
                  className="h-48 w-full object-cover object-center"
                />
                <div className="product-info flex flex-col justify-center items-center"> {/* Container for product details */}
                  <h2 className="product-name text-black mb-1">{customersProduct.product?.title}</h2>
                  <div className="flex items-center mb-1">
                    <span className="text-gray-500 line-through mr-1">{product.price}</span> {/* Strike-through original price */}
                    <span className="text-green-600 font-semibold">({customersProduct.product?.discountPersent}% Off)</span> {/* Display discount percentage */}
                  </div>
                  <p className="text-black ">₹{customersProduct.product?.discountedPrice}</p> {/* Display discounted price */}
                </div>
              </div>
            </div>
            {/* Plus sign */}
            <div className="plus-sign flex justify-center items-center mx-4"> {/* Center the plus sign */}
              +
            </div>
            {/* Product 2 */}
            <div className="product-card"> {/* Wrap product 2 in a card-like container */}
              <div className="image-container relative">
                <img
                  src={productSet.imageUrl}
                  alt={productSet.alt}
                  className="h-48 w-full object-cover object-center"
                />
                <div className="product-info flex flex-col justify-center items-center"> {/* Container for product details */}
                  <h2 className="product-name text-black mb-1">{productSet.title}</h2>
                  <div className="flex items-center mb-1">
                    <span className="text-gray-500 line-through mr-1">₹{productSet.price}</span> {/* Strike-through original price */}
                    <span className="text-green-600 font-semibold">({productSet.discountPersent}% Off)</span> {/* Display discount percentage */}
                  </div>
                  <p className="text-black ">₹{productSet.discountedPrice}</p> {/* Display discounted price */}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-8 mx-12">
              <div className="flex justify-center mb-8 mr-8">
                <div className="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-md ml-4">
                  {/* Price Details heading */}
                  <h1 className="text-black flex items-center justify-center mt-4 mb-4 font-semibold">Price Details</h1>

                  {/* Vertical lines on both sides */}
                  <div className="border-l-2 border-gray-200 absolute h-full left-0 top-0"></div>
                  <div className="border-r-2 border-gray-200 absolute h-full right-0 top-0"></div>

                  {/* Total price */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
                    <p className="mr-2 font-semibold">Price (2 items):</p>
                    <p className="text-gray-500 mr-2">₹{calculateTotalPrice([customersProduct.product, productSet])}</p> {/* Strike-through total price */}
                  </div>

                  {/* Discount percentage */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
                    <p className="mr-2 font-semibold">Discount Percentage:</p>
                    <p className="text-green-600 font-semibold">({calculateTotalDiscountedPersent([customersProduct.product, productSet])}% Off)</p> {/* Display total discount percentage */}
                  </div>

                  {/* Total amount */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
                    <p className="mr-2 font-semibold">Total Amount:</p>
                    <p className="text-black font-semibold">₹{calculateTotalDiscountedPrice([customersProduct.product, productSet])}</p>
                  </div>

                  {/* Add to Cart button */}
                  <div className="flex justify-center my-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCartSubmit}>Add to Cart</button>
                  </div>

                  {/* Horizontal lines above and below total amount */}
                  <div className="border-t-2 border-gray-200 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  </WhiteContainer>
</div>

          
          {/* Might be interested */}
          {/* <section className="pt-10"> */}
         
          <div style={{ padding: '5px', backgroundColor: '#f0f0f0' }}>
          <WhiteContainer>

  <h1 className="py-5 text-xl font-bold">Season's Top Picks</h1>
  <Slider slidesToShow={5} slidesToScroll={1} infinite={false} autoplay={false} autoplaySpeed={2000} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
    {interestedProducts.slice(0, 20).map((item) => (
      <a key={item._id} href={`/product/${item._id}`} className="mb-5">
        <HomeProductCard product={item} />
      </a>
    ))}
  </Slider>
  </WhiteContainer>

</div>
          {/* </section> */}
          
        </div>

      
    {/* </div > */}
    </Component>
  );
}