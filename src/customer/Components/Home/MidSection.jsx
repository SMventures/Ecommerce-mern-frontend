import { Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import merchandise from '../../../Data/Banners/Merchandise.png';
import Accessories1 from '../../../Data/Banners/Accessories_(1).png';
import Accessories2 from '../../../Data/Banners/Accessories2.png';
import Accessories3 from '../../../Data/Banners/Accessories_(3).png';

const ImageList = [
    { imageUrl: Accessories1, link: 'Accessories/Laptop_Accessories%20/Laptop_Bags' },
    { imageUrl: Accessories2, link: '/link-to-accessories2' },
    { imageUrl: Accessories3, link: 'Accessories/Phone_Accessories/Phone_Covers' }
];

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
                {ImageList.map(({ imageUrl, link }, index) => (
                    <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                        <Link to={link}>
                            <img src={imageUrl} style={{ width: '100%' }} alt={`Accessories ${index + 1}`} />
                        </Link>
                    </Grid>
                ))}
            </Wrapper>
            <Link to={merchandiseUrl}>
                <Image src={merchandise} alt="Merchandise" />
            </Link>
        </>
    );
};

export default MidSection;
