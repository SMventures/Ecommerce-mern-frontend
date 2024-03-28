import * as React from 'react';
import { useState } from "react";
import './styles2.css';
import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "../../ReviewProduct/ProductReviewCard";
import RateProduct from "../../ReviewProduct/RateProduct";

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
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addItemToWishlist } from '../../../../Redux/Customers/Wishlist/Action';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Checkout from '../../Checkout/Checkout';
import OrderSummary from '../../Checkout/OrderSummary';



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
  const [BoughtTogether, setBoughtTogether] = useState([]);
  const [interestedProducts, setInterested] = useState([]);
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
    getBoughtTogether(cardId);
    getInterested(cardId);
    
  };

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
    const response = await fetch(`http://localhost:5454/api/products?category=${ category}`);
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
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };
  const handlewishlistSubmit = () => {
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToWishlist({ data, jwt }));
    navigate("/wishlist");
  };
  const handleBuyNow = () => {
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/checkout?step=2");
  };


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
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center relative border border-gray-200 rounded-lg p-4 bg-gray-200">
  <div className="absolute top-2 right-2 text-red-500 cursor-pointer" onClick={handlewishlistSubmit}>
    <FavoriteIcon />
  </div>
  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-[30rem] max-h-[35rem] bg-gray-200 ">
  <img
    src={activeImage?.src || customersProduct.product?.imageUrl}
    alt={product.images[0].alt}
    className="h-full w-full object-cover object-center"
  />
</div>
<div className="flex flex-wrap space-x-5 justify-center ">
  {product.images.map((image) => (
    <div
      onClick={() => handleSetActiveImage(image)}
      className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
      key={image.id}
    >
      <img
        src={image.src}
        alt={image.alt}
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
    </form>

    <form  onSubmit={handleBuyNow}>
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
                  <Typography component="h3" variant="subtitle2 " className="text-sm font-bold text-gray-900 mt-2 mb-4">
                    Highlights
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div style={{ overflowX: 'auto' }}>
  <Box sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
    <Typography variant="body2" gutterBottom>
      <pre className="text-base text-gray-900">
        {customersProduct.product?.highlights}
      </pre>
    </Typography>
  </Box>
</div>
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
                  <Typography component="h3" variant="subtitle2 " className="text-sm font-bold text-gray-900 mt-2 mb-4">
                    Specifications
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                 <div style={{ overflowX: 'auto' }}>
  <Box sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
    <Typography variant="body2" gutterBottom>
      <pre className="text-base text-gray-900">
        {customersProduct.product?.highlights}
      </pre>
    </Typography>
  </Box>
</div>
                </AccordionDetails>
              </Accordion>
            </Box>

            
            {/* Description and details */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mt-9 mb-3">Services</h3>

              <div className="space-y-6">
                <li className="text-base text-gray-900 mb-5">
                  
Cash on Delivery available
</li>
<li>
3 Days Return Policy
                </li>
              </div>
            </div>

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


      {/* Add the provided HTML code for the image */}
      <div className="_3ywSr_" style={{ paddingTop: '2%' }}>
          <div className="_1bEAQy _2iN8uD _312yBx" style={{ paddingTop: '7.06%' }}>
            <img className="_2OHU_q HnOpP8 aA9eLq" alt="" src="https://rukminim2.flixcart.com/www/2000/2000/promos/01/12/2018/8aa01ab4-de88-4a46-9d93-5c7f3ebac2df.png?q=50" />
          </div>
        </div>

        {/* rating and review section */ }
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

  {/* // Inside your component */}
<div>
  {/* Similar Products */}
  <section className="pt-10">
    <h1 className="py-5 text-xl font-bold">Similar Products</h1>
    <Slider slidesToShow={6} slidesToScroll={1} infinite={true} autoplay={true} autoplaySpeed={2000} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
      {simmyProducts.slice(0, 50).map((item) => (
        <a key={item._id} href={`/product/${item._id}`} className="mb-5">
          <HomeProductCard product={item} />
        </a>
      ))}
    </Slider>
  </section>

  {/* Bought together */}
  <section className="pt-10">
    <h1 className="py-5 text-xl font-bold">Bought Together</h1>
    <Slider slidesToShow={6} slidesToScroll={1} infinite={true} autoplay={true} autoplaySpeed={2000} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
      {BoughtTogether.slice(2, 15).map((item) => (
        <a key={item._id} href={`/product/${item._id}`} className="mb-5">
          <HomeProductCard product={item} />
        </a>
      ))}
    </Slider>
  </section>

  {/* Might be interested */}
  <section className="pt-10">
    <h1 className="py-5 text-xl font-bold">You might be interested in</h1>
    <Slider slidesToShow={6} slidesToScroll={1} infinite={true} autoplay={true} autoplaySpeed={2000} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
      {interestedProducts.slice(0, 10).map((item) => (
        <a key={item._id} href={`/product/${item._id}`} className="mb-5">
          <HomeProductCard product={item} />
        </a>
      ))}
    </Slider>
  </section>
</div>
      </div >
    </div >
  );
}

// Define your custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="prev-arrow" onClick={onClick}>&#10094;</div>;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="next-arrow" onClick={onClick}>&#10095;</div>;
};