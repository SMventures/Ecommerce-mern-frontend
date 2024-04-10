import {  Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import merchandise from '../../../Data/Banners/Merchandise.png'
// const ImageURL = [
//     // 'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
//     // 'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
//     // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
// ];

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const merchandiseUrl = '/Men/Clothing/men_tshirts'; // Example URL
    
    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {/* Your other content */}
            </Wrapper>
            {/* Link the image or any other element */}
            <Link to={merchandiseUrl}>
                <Image src={merchandise} />
            </Link>
        </>
    );
}

export default MidSection;