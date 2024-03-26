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
            href: 'women/clothing/Hoodies',
            imageSrc: 'https://images.meesho.com/images/products/110350624/ptzec_512.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: 'women/clothing/Tshirts',
            imageSrc: 'https://th.bing.com/th/id/OIP.DI9MLdry4UQPPzpi4s6QNAHaEm?rs=1&pid=ImgDetMain',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'Clothing',
            name: 'Clothing',
            items: [
          
              { name: 'Women Tshirts', id: 'women_tshirts' },
              { name: 'Women Hoodies', id: 'women_hoodies'},
            
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
            imageSrc: 'https://th.bing.com/th/id/OIP.Sl-j-SHRFRBAtl4jXh3PhwHaFv?rs=1&pid=ImgDetMain',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://i.pinimg.com/originals/ee/78/9e/ee789e243050722fd0f5cef3afd2d0f1.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Clothing',
            name: 'Clothing',
            items: [
              { name: 'Men Tshirts', id: 'men_tshirts' },
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
            imageSrc: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/093436108100fbc7dae16f8974130055/4217ad58-22c6-47ba-b35e-a9027d8256ed.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://i5.walmartimages.com/asr/5b69b62c-bf8a-4f8d-bd29-74f81962f231_1.ec58378c97e1736407dc8c9a2c9da4c0.jpeg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
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
            id: '#',
            imageSrc: 'https://www.savetheplanet.ae/wp-content/uploads/2020/11/BG15.png',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://th.bing.com/th/id/OIP.y4Hel8EUUNxWLg-PRNjlggHaHa?rs=1&pid=ImgDetMain',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Stationery_Items',
            name: 'Stationery Items',
            items: [
              { name: 'Pen', id: 'Pen' },
              { name: 'Ruler', id: 'Ruler' },
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
            id: '#',
            imageSrc: 'https://th.bing.com/th/id/OIP.-UrR4XN5e4Y7Vuwo8X7vZQAAAA?rs=1&pid=ImgDetMain',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://th.bing.com/th/id/OIP.E3ELb8A_CJxZwYGf9yTsIwHaJ2?rs=1&pid=ImgDetMain',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
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
            id: '#',
            imageSrc: 'https://th.bing.com/th/id/OIP.8Weor-i2kcIYRpxjIk0mggHaEK?rs=1&pid=ImgDetMain',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://th.bing.com/th/id/OIP.CayLGGHUpHCNh2ba6z6X5wHaE8?rs=1&pid=ImgDetMain',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
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