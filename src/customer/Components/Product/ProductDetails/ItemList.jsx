import React from 'react';
import Slider from 'react-slick';
import "./styles2.css";
// Define your custom arrow components
const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="prev-arrow" onClick={onClick}>&#10094;</div>;
  };
   
  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="next-arrow" onClick={onClick}>&#10095;</div>;
  };

const ItemList = () => {
  const items = [
    {
      title: 'Women T-Shirts',
      description:'Min. 10% Off',
      link: '/Women/Clothing/women_tshirts',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711787624/products/zl1ztvn03yjelvxcn2ln.png',
    
    },
    {
      title: 'Men Hoodies',
      description: 'Min. 10% Off',
      link: "/Men/Clothing/men_hoodies",
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710159525/products/xki6olrysl9gcvfhsh9a.png',
    },
    {
      title: 'Laptop Skin',
      description: 'Min. 10% Off',
      link: '/Accessories/Laptop_Accessories%20/Laptop_Skins',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711251930/products/iptvsastenimpz7oauia.jpg',
    },
    {
      title: 'Phone Covers',
      description: 'Min. 10% Off',
      link: '/Accessories/Phone_Accessories/Phone_Covers',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710335142/products/o9rambtangvp1kuvvcge.png',
    },
    {
      title: 'Earphones',
      description:'Min. 10% Off',
      link: '/Electronics/Electronics_Items/Headphones',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710338658/products/esifpp6jvgeyixyyg1wb.jpg',
    },
   
    {
      title: 'Women Hoodies',
      description: 'Min. 10% Off',
      link: '/Women/Clothing/women_hoodies',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711308060/products/nxysctdz2y0y3ivdbwqb.png',
    },
    {
      title: 'Men T-shirts',
      description:'Min. 10% Off',
      link: '/Men/Clothing/men_tshirts',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710158643/products/cf0thr3wrvpekh4ja15p.png',
    },
    {
      title: 'Laptop Bags',
      description:'Min. 10% Off',
      link: '/Accessories/Laptop_Accessories%20/Laptop_Bags',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711251457/products/h8zci2aojapglbzj83sd.jpg',
    },
    {
      title: 'Keyboards',
      description: 'Min. 10% Off',
      link: '/Electronics/Electronics_Items/Keyboard',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710337459/products/exiknbfsq2hylfyauskk.png',
    },
    {
      title: 'Mouse',
      description: 'Min. 10% Off',
      link: '/Electronics/Electronics_Items/Mouse',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710386891/products/d90eoiffik2py697lilp.png',
    },
    {
      title: 'Camera',
      description: 'Min. 10% Off',
      link: '/Electronics/Electronics_Items/Camera',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710330929/products/ungbvfle13bfer8bozlp.webp',
    },
    {
      title: 'USB Cable',
      description: 'Min. 10% Off',
      link: '/Electronics/Electronics_Items/Usb_Cable',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711309050/products/c4f8dbwhbkp17bojt9pw.png',
    },
    {
      title: 'Pen',
      description: 'Min. 10% Off',
      link: '/Stationery/Stationery_Items/Pen',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711253353/products/kecw0lbjibjzlsouibhm.jpg',
    },
    {
      title: 'Diaries',
      description: 'Min. 10% Off',
      link: '/Stationery/Stationery_Items/Diary',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1710389805/products/k5nxqrchw9cfvrt6kwbz.png',
    },
    {
      title: 'Phone Skin',
      description: 'Min. 10% Off',
      link: '/Accessories/Phone_Accessories/Phone_Skins',
      image: 'https://res.cloudinary.com/dvltxsndm/image/upload/v1711252313/products/cqzn7ynbngyegzco8wja.webp',
    },

   
   
  ];

  return (
    <div className="item-list">
    <Slider slidesToShow={3} slidesToScroll={1} infinite={true} autoplay={false} autoplaySpeed={500} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
    
      {items.map((item, index) => (
        <div className="item-container" key={index}>
          <div className="item-image-container" style={{ border: '3px solid #f0f0f0', borderRadius: '10px', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img src={item.image} alt={item.title} className="item-image" style={{ width: '50%', height: '240px', display: 'block', float: 'left' }} />
            <div className="item-content mt-12 ml-5" style={{ paddingLeft: '10px', marginLeft: '40px',display: 'block', float: 'left' }}>
            <div className="item-title font-bold" style={{ fontSize: '1.2em' }}>{item.title}</div>
            <div className="item-description mb-4">{item.description}</div>
           <a href={item.link} className="item-link font-bold" style={{ backgroundColor: 'blue', color: 'white', padding: '5px 20px', borderRadius: '5px', textDecoration: 'none', marginTop: '10px' }}>
  Shop Now
</a>
          </div>
          </div>
          
        </div>
      ))}
    </Slider>
  </div>
  );
};


export default ItemList;