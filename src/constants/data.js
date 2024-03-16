
import booksImg from '../constant/books.png';
import womenFashion from '../constant/women_fashion.png';


// import { useNavigate } from 'react-router-dom';

// // Define navigation functions
// const NavigateToJeans = () => {
//     const navigate = useNavigate();
//     const navigateToJeans = () => {
//         navigate('/jeans');
//     };
//     return navigateToJeans;
// };

// const NavigateToWomen = () => {
//     const navigate = useNavigate();
//     const navigateToWomen = () => {
//         navigate('/womens');
//     };
//     return navigateToWomen;
// };

// Define navigation data
export const navData = [
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', text: 'Top Offers' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Accessories' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Men Fashion' },
    { img: womenFashion, text: 'Women Fashion' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
    { img: booksImg, text: 'Books' }      
];

export const bannerData = [
    { id: 1, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' },
    { id: 2, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' },
    { id: 3, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' },
    { id: 4, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' }
];

export const SlideData = [
    {
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/200/200/khf63680/cases-covers/back-cover/d/7/g/spigen-acs02256-original-imafxfgbffqaugur.jpeg?q=70',
        detailUrl: '',
        title: {
            shortTitle: 'Mobile Covers'
        },
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day'
    },
    {
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/200/200/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70',
        title: {
            shortTitle: 'Skin & Hair Care'
        },
        discount: 'From 99+5% Off',
        tagline: 'Shampoos, Face Washes & More'
    },
    {
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/flap/200/200/image/74bc985c62f19245.jpeg?q=70',
        title: {
            shortTitle: 'Skybags & Safari'
        },
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day'
    },
    {
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        },
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
    {
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/flap/150/150/image/b616a7aa607d3be0.jpg?q=70',
        title: {
            shortTitle: 'Sports & Fitness Essentials'
        },
        discount: 'Upto 80% Off',
        tagline: 'Ab Exerciser, Yoga & more'
    }
];

// export default { navigateToJeans: NavigateToJeans(), navigateToWomen: NavigateToWomen() };
