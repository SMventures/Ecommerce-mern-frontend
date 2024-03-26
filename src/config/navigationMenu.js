import womenfashion from "../constants/women_fashion.png"
import books from  "../constants/books.png";
import menfashion from "../constants/men.png";
import stationery from "../constants/stationery.png";

export const navigation = {
    categories: [
      {imageSrc:womenfashion,
        id: 'Women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: 'Women/clothing/women_hoodies',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: 'Women/clothing/women_tshirts',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'Clothing',
            name: 'Clothing',
            items: [
              { name: 'Women Tshirts', id: 'women_tshirts' },
              { name: 'Women Hoodies', id: 'women_hoodies', href:"Women/Clothing/women_hoodies"},
            
            ],
          },
          
         
        ],
      },
      {
        imageSrc: menfashion,
        id: 'Men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            href:'Men/Clothing/men_hoodies',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: 'Men/Clothing/men_tshirts',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Clothing',
            name: 'Clothing',
            items: [
              { name: 'Men Tshirts', id: 'men_tshirts',href:"Men/Clothing/men_tshirts" },
              { name: 'Men Hoodies', id: 'men_hoodies' },
           
            ],
          },
         
         
        ],
      },
      {
        imageSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
        id: 'Accessories',
        name: 'Accessories',
      
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            href:"Accessories/Laptop_Accessories/Laptop_Skins",
            imageSrc: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/093436108100fbc7dae16f8974130055/4217ad58-22c6-47ba-b35e-a9027d8256ed.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          // {
          //   name: 'Artwork Tees',
          //   id: '#',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          //   imageAlt:
          //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          // },
        ],
        sections: [
          {
            id: 'Laptop_Accessories ',
            name: 'Laptop Accessories',
            items: [
              { name: 'Laptop Bags', id: 'Laptop_Bags' },
              { name: 'Laptop Skins', id: 'Laptop_Skins' },
              { name: 'Laptop Sleeves', id: 'Laptop_Sleeves' },
             
            ],
          },
          {
            id: 'Phone_Accessories',
            name: 'Phone Accessories',
            items: [
              { name: 'Phone Covers', id: 'Phone_Covers' },
              { name: 'Phone Skins', id: 'Phone_Skins' },
            
            ],
          },
         
        ],
      },

      {
        id: 'Stationery',
        name: 'Stationery',
        imageSrc: stationery,
        imageAlt: 'stationery',

        featured: [
          {
            name: 'New Arrivals',
            href:"Stationery/Stationery_Items/Pen",
            imageSrc: 'https://www.savetheplanet.ae/wp-content/uploads/2020/11/BG15.png',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          // {
          //   name: 'Artwork Tees',
          //   id: '#',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          //   imageAlt:
          //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          // },
        ],
        sections: [
          {
            id: 'Stationery_Items',
            name: 'Stationery Items',
            items: [
              { name: 'Pen', id: 'Pen' },
              { name: 'Ruler', id: 'Ruler', href:"Stationery/Stationery_Items/Ruler",
            },
              { name: 'Pencil', id: 'Pencil' },
              { name: 'Highlighter', id: 'Highlighter' },
              { name: 'Markers', id: 'Markers' },
              { name: 'Calender', id: 'Calender' },
              { name: 'Diary', id: 'Diary' },
              { name: 'Notepad', id: 'Notepad' },
              
            ],
          },
         
         
        ],
      },
    {imageSrc: books,
        id: 'Books',
        name: 'Books',
        featured: [
          {
            name: 'New Arrivals',
            href: "Books/Trading_Books/Fundamental Analysis",
            imageSrc: 'https://th.bing.com/th/id/OIP.-UrR4XN5e4Y7Vuwo8X7vZQAAAA?rs=1&pid=ImgDetMain',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          // {
          //   name: 'Artwork Tees',
          //   id: '#',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          //   imageAlt:
          //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          // },
        ],
        sections: [
          {
            id: 'Trading_Books',
            name: 'Trading Books',
            items: [
              { name: 'Motivational', id: 'Motivational' },
              { name: 'Biography', id: 'Biography' },
              { name: 'Fundamental Analysis', id: 'Fundamental_Analysis' },
              { name: 'Technical Analysis', id: 'Technical_Analysis' },
              { name: 'Economic Analysis  ', id: 'Economic_Analysis' },
              { name: 'Psychology', id: 'Psychology' },
              { name: 'Risk Management', id: 'Risk_Management' },
              
            ],
          },
          
         
        ],
      },
      {imageSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
        id: 'Electronics',
        name: 'Electronics',
        featured: [
          {
            name: 'New Arrivals',
            href: "Electronics/Electronics_Items/Camera",
            imageSrc: 'https://th.bing.com/th/id/OIP.8Weor-i2kcIYRpxjIk0mggHaEK?rs=1&pid=ImgDetMain',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          // {
          //   name: 'Artwork Tees',
          //   id: '#',
          //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          //   imageAlt:
          //     'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          // },
        ],
        sections: [
          {
            id: 'Electronics_Items',
            name: 'Electronics Items',
            items: [
              { name: 'Camera', id: 'Camera' },
              { name: 'Keyboard', id: 'Keyboard' },
              { name: 'Mouse', id: 'Mouse' },
              { name: 'Usb Cable', id: 'Usb_Cable' },
              { name: 'Headphones', id: 'Headphones' },
              
            ],
          },
          
         
        ],
      },
    ],
    pages: [
      
    ],
  }