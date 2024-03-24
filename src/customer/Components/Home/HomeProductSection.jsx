import React from "react";
import { Box, Button, Typography, Divider, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import  './SlideComponent.css'
import { Link } from 'react-router-dom'; // Import Link for React Router navigation

const Component = styled(Box)`
  margin-top: 10px;
  background: #FFFFFF;
`;

const ViewAllButtonContainer = styled(Box)`
justify-content: flex-end;
display: flex;
`;

const ViewAllButton = styled(Button)`
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight:600;
  margin-right: 10px; /* Margin to the right */
  margin-bottom: 10px; /* Margin to the bottom */
`;


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const HomeProductSection = ({ section, data }) => {
  const navigate = useNavigate();
 

  return (
    <Component>
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      {/* <ViewAllButtonContainer>

      <ViewAllButton variant="contained" color="primary">
        View All
      </ViewAllButton>
      </ViewAllButtonContainer> */}

      <Divider />
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.slice(0, 10).map(product => (
           <div key={product._id} className="mb-5 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
           <Link to={`/product/${product._id}`}> 
           <div className="h-[13rem] w-[10rem]">
             <img
               className="object-cover object-top w-full h-full"
               src={product?.image || product?.imageUrl}
               alt={product?.title}
             />
           </div>
     </Link>
           <div className="p-4 items-center">
             <h3 className="text-lg items-center font-medium font-weight-600 text-gray-900">
             {product?.title}
             </h3>
             {/* <p className="mt-2 text-sm text-gray-500">{product?.title}</p> */}
           </div>
           <div className='flex items-center space-x-2 '>
          <p className='font-semibold'>₹{product?.discountedPrice}</p>
          <p className='opacity-50 line-through'>₹{product?.price}</p>
          <p className="text-green-600 font-semibold">{product?.discountPersent}% off</p>

           </div>
         </div>

        ))}
      </Carousel>
    </Component>
  );
};

export default HomeProductSection;
