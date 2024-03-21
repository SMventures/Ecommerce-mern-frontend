import * as React from 'react';
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "../../ReviewProduct/ProductReviewCard";
import RateProduct from "../../ReviewProduct/RateProduct";
import { Favorite as FavoriteIconOutlined, FavoriteBorder as FavoriteIcon } from '@mui/icons-material';

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
  const [selectedSize, setSelectedSize] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [simmyProducts, setSimmyProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { review, customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");

  const getCategoryName = async () => {
    const res = await fetch(`http://localhost:5454/api/products/id/${productId}`);
    const data = await res.json();
    const cardId = data.category.name;
    getSimilarProducts(cardId);
  };

  const getSimilarProducts = async (category) => {
    const response = await fetch(`http://localhost:5454/api/products?category=${category}`);
    const data = await response.json();
    setSimmyProducts(data.content);
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
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };
  const handlewishlistSubmit = () => {
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToWishlist({ data, jwt }));
    setIsClicked(true); // Toggle the state to change the color
    setShowNotification(true); // Show the notification
    setTimeout(() => setShowNotification(false), 3000); // Hide the notification after 3 seconds

    // navigate("/cart");
  };

  const [isClicked, setIsClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  // const handlewishlistSubmit = () => {
  //   // if (product && product.name) {
  //   //   // Access the name property only if product and product.name are defined
  //   //   console.log("Adding product to wishlist:", product.name);
  //     const data = { productId: product.id, size: selectedSize.name };
  //     dispatch(addItemToWishlist({ data, jwt }));
  //     // setIsClicked(true); // Update state to indicate that the icon has been clicked
  //   // } else {
  //   //   console.error("Product or product name is undefined");
  //   // }
  // };
  
  // const [isInWishlist, setIsInWishlist] = useState(false);

  // const handlewishlistSubmit = () => {
  //   // Toggle the state when the wishlist icon is clicked
  //   setIsInWishlist(!isInWishlist);
  //   console.log('Product added to wishlist!');
  // };

  // const [wishlistClicked, setWishlistClicked] = useState(false);

  // const handleWishlistClick = () => {
  //   setWishlistClicked(!wishlistClicked);
  //   // Add your handlewishlistSubmit logic here

  // };
  // const [clickedIndex, setClickedIndex] = useState(-1);

  // const handlewishlistSubmit = (itemId) => {
  //   const data = { productId: itemId }; // Use itemId as the product ID
  //   dispatch(addItemToWishlist({ data, jwt }));
    // setIsClicked(!isClicked); // Update state to indicate that the icon has been clicked
  //   // navigate("/wishlist");
  // };
  const isProductInWishlist = (product) => {
    // Check if customersProduct exists and has a wishlist property
    if (customersProduct && customersProduct.wishlist) {
      // Check if the product exists in the wishlist array
      return customersProduct.wishlist.some((item) => item.id === product.id);
    }
    // Return false if customersProduct or wishlist is undefined
    return false;
  };
  
  const handleWishlistToggle = (product) => {
    if (!isProductInWishlist(product)) {
      // If the product is not in the wishlist, add it to the wishlist
      dispatch(addItemToWishlist({ jwt, data: product }));
    } else {
      // If the product is already in the wishlist, do nothing
      console.log("Item is already in the wishlist");
    }
  };
  

  // Function to check if a product is in the wishlist
  

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  const containerStyle = {
    backgroundColor: '#e0eaf6',
    padding: '10px',
    borderRadius: '10px',
  };

  return (
    // <div className="bg-white lg:px-20">
    //   <div className="pt-6">
      <div className="bg-white lg:px-20">
      <div className="pt-6">
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
        <div className="relative">
      {/* Wishlist icon */}
      <div
        className="absolute top-2 right-8 cursor-pointer"
        onClick={() => handlewishlistSubmit(product)}
        style={{
          width: '24px',
          height: '24px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isClicked ? 'red' : 'none'}
          stroke={isClicked ? 'red' : 'grey'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21.21l-1.65-1.51C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.35 11.2L12 21.21z" />
        </svg>
      </div>

      {/* Notification bar */}
      {showNotification && (
        <div className="absolute top-0 right-0 mt-8 mr-8 bg-green-500 text-white px-4 py-2 rounded">
          Item added to wishlist
        </div>
      )}
  
 
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={activeImage?.src || customersProduct.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((image) => (
                <div
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={image.src}
                    alt={product.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>





            <form className="mt-10 flex flex-wrap space-x-5 justify-center" onSubmit={handleSubmit}>
              <Button
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", background: "#2874f0" }}
              >
                Add To Cart
              </Button>


              
              <Button
              onClick={() => navigate("/checkout?step=2")}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", background: "#2874f0" }}
            >
              Buy Now
            </Button>
            </form>
          </div>

          {/* Product info */}
          <Container >
            <div className="lg:col-span-1 mx-auto max-w-2xl px-0 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
              <div className="lg:col-span-2 flex flex-col justify-start items-start"> {/* Apply flexbox properties */}
                <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">
                  {customersProduct.product?.brand}
                </h1>
                <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                  {customersProduct.product?.title}
                </h1>
              </div>
              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
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

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>

                  <div className="flex items-center space-x-3">
                    <Rating
                      name="read-only"
                      value={4.6}
                      precision={0.5}
                      readOnly
                    />

                    <p className="opacity-60 text-sm">42807 Ratings</p>
                    <p className="ml-3 text-sm font-medium text-blue-700 hover:text-blue-500">
                      {reviews.totalCount} reviews
                    </p>
                  </div>
                </div>

                <form className="mt-10" onSubmit={handleSubmit}>
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active ? "ring-1 ring-indigo-500" : "",
                                "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
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
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
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
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mt-2 mb-4">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900 mb-5">
                      {customersProduct.product?.description}
                    </p>
                  </div>
                </div>
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
                      <Typography component="h3" variant="subtitle2" className="text-sm font-bold text-gray-900 mt-2 mb-4">
                        Highlights
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ maxWidth: { sm: '100%', md: '70%' }, overflowX: 'auto' }}>
                        <Typography variant="body2" gutterBottom>
                          <pre className="text-base text-gray-900">
                            {customersProduct.product?.highlights}
                          </pre>
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  {/* specification  */}

                  <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <Typography component="h3" variant="subtitle2" className="text-sm font-bold text-gray-900 mt-2 mb-4">
                        Specifications
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ maxWidth: { sm: '100%', md: '70%' }, overflowX: 'auto' }}>
                        <Typography variant="body2" gutterBottom>
                          <pre className="text-base text-gray-900">
                            {customersProduct.product?.specifications}
                          </pre>
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>

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

        {/* rating and review section */}
        <section className="">
          <h1 className="font-semibold text-lg pb-4">
            Recent Review & Ratings
          </h1>

          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {/* Iterate over reviews and render ProductReviewCard for each */}
                  {review.reviews?.map((item, i) => (
                    <ProductReviewCard key={i} item={item} />
                  ))}
                </div>
              </Grid>
              <ProductReviewCard />
              <RateProduct />

              {/* Add other components if needed */}

              {/* <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3 pb-10">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />

                  <p className="opacity-60">42807 Ratings</p>
                </div>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Excellent</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Very Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className="bg-[#885c0a]"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                        color="orange"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Avarage</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#885c0a", // stroke color
                          },
                        }}
                        variant="determinate"
                        value={21}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Poor</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid> */}
              {/* </Box> */}
            </Grid>
          </div>
        </section>

        {/* Similar Products */}
        <div>
          <section className="pt-10">
            <h1 className="py-5 text-xl font-bold">Similar Products</h1>
            <div className="flex flex-wrap space-y-5">
              {simmyProducts.slice(0, 5).map((item) => (
                <div key={item._id} className="mb-5"> {/* Add margin bottom */}
                  <HomeProductCard product={item} />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div>
          <section className="pt-10">
            <h1 className="py-5 text-xl font-bold">Things Bought Together</h1>
            <div className="flex flex-wrap space-y-5">
              {simmyProducts.slice(0, 5).map((item) => (
                <div key={item._id} className="mb-5"> {/* Add margin bottom */}
                  <HomeProductCard product={item} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div >
    </div >
  );
}