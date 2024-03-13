import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Divider, styled } from '@mui/material';
import Countdown from 'react-countdown';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { findProducts } from '../../../Redux/Customers/Product/Action';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
    display:flex;
`;

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`;

const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight:600;
`;

const Slide = ({ title, timer }) => {
    const navigate = useNavigate();
    const [isLoaderOpen, setIsLoaderOpen] = useState(false);
    const dispatch = useDispatch();
    const { customersProduct } = useSelector((store) => store);

    useEffect(() => {
        if (customersProduct.loading) {
            setIsLoaderOpen(true);
        } else {
            setIsLoaderOpen(false);
        }
    }, [customersProduct.loading]);

    useEffect(() => {
        // Fetch products for the current category
        dispatch(findProducts(title.toLowerCase().replace(/ /g, "_")));
    }, [dispatch, title]);

    const handleViewAll = (categoryHref) => {
        navigate(categoryHref);
    };

    useEffect(() => {
      // Fetch products for each category
      // dispatch(findProducts('books')
    
      // dispatch(findProducts('electronics'));
      // dispatch(findProducts('stationery'));
      // dispatch(findProducts('accessories'));
      dispatch(findProducts('men_tshirts'));
      dispatch(findProducts('women_hoodies'));
    }, [dispatch]);
  
  

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
    };

    console.log("customersProduct:", customersProduct);
    console.log("products:", customersProduct?.products);
    console.log("content:", customersProduct?.products?.content);

    // Check if products and content are available before rendering
    if (!customersProduct || !customersProduct.products || !customersProduct.products.content) {
        return null; // Render nothing if data is not available yet
    }

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {timer &&
                    <Timer>
                        <img src={timerURL} alt='timer' style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewAllButton variant="contained" color="primary" onClick={() => handleViewAll(`/category/${title.toLowerCase().replace(/ /g, "_")}`)}>
                    View All
                </ViewAllButton>
            </Deal>
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
                {customersProduct.products.content.map((product) => (
                    <Box textAlign="center" key={product.id} style={{ padding: '25px 15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={product.imageUrl} alt={product.title} style={{ width: 'auto', height: 150 }} />
                            <Typography style={{ fontWeight: 600, color: '#212121' }}>{product.title}</Typography>
                            <Typography style={{ color: 'green' }}>{product.discount}</Typography>
                            <Typography style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>
                        </div>
                    </Box>
                ))}
            </Carousel>
        </Component>
    );
};


export default Slide;
