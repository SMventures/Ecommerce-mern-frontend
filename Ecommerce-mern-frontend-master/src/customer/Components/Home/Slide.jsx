import React from 'react';
import { Box, Button, Typography, Divider, styled } from '@mui/material';
import Countdown from 'react-countdown';
import { SlideData } from '../../../Data/SlideData';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

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

    const navigateToBooks = () => {
        navigate("/books");
    };

    const navigateToWomen = () => {
        navigate("/women");
    };

    

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
    };

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
                <ViewAllButton variant="contained" color="primary" onClick={title === "Women's Collection" ? navigateToWomen : navigateToBooks}>
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
                {SlideData.map(temp => (
                    <Box textAlign="center" style={{ padding: '25px 15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={temp.url} alt={temp.title.shortTitle} style={{ width: 'auto', height: 150 }} />
                            <Typography style={{ fontWeight: 600, color: '#212121' }}>{temp.title.shortTitle}</Typography>
                            <Typography style={{ color: 'green' }}>{temp.discount}</Typography>
                            <Typography style={{ color: '#212121', opacity: '.6' }}>{temp.tagline}</Typography>
                        </div>
                    </Box>
                ))}
            </Carousel>
        </Component>
    );
};

export default Slide;
