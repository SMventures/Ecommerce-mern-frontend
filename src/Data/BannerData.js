import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

import men from "./Banners/men.png";
import electronics from "./Banners/electronics.png";
import women from "./Banners/Women.png";
import stationery from "./Banners/stationery.png";
import accessories from "./Banners/accessories.png";
import books from "./Banners/books.png";
import dds from './Banners/dds.png';

export const bannerData = [
  { id: "dds", img: dds },
  { id: "women_tshirts", img: women, href: "/Women/Clothing/women_tshirts" },
  { id: "men_tshirts", img: men, href: "/Men/Clothing/men_tshirts" },
  { id: "accessories", img: accessories, href: "/Accessories/Laptop_Accessories%20/Laptop_Bags" },
  { id: "electronics", img: electronics, href: "/Electronics/Electronics_Items/Headphones" },
  { id: "books", img: books, href: "/Books/Trading_Books/Psychology" },
];

// function BannerImages() {
//   return (
//     <div>
//       {bannerData.map((item) => (
//         <Link key={item.id} to={item.href}>
//           <img src={item.img} alt={`Banner ${item.id}`} />
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default BannerImages;
