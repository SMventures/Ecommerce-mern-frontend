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
      title: 'FINAL CLEARANCE',
      description: 'No Return Wrist Watches',
      link: '#',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'one',
      description: 'Men\'s Vests',
      link: '#',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Trimmers',
      description: 'Min. 50% Off',
      link: '#',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="item-list">
    <Slider slidesToShow={4} slidesToScroll={1} infinite={true} autoplay={false} autoplaySpeed={500} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>

      {items.map((item, index) => (
        <div className="item-container" key={index}>
          <div className="item-image-container">
            <img src={item.image} alt={item.title} className="item-image" />
          </div>
          <div className="item-content">
            <div className="item-title">{item.title}</div>
            <div className="item-description">{item.description}</div>
            <a href={item.link} className="item-link">
              Shop Now
            </a>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default ItemList;