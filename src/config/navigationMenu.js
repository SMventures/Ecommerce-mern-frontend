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
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: 'women/clothing/Tshirts',
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
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
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
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
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
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
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
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
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
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
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