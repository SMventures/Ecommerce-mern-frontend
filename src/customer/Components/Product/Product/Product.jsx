import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
// Import the action creator for adding items to the wishlist
// import { addItemToWishlist } from '../../../../Redux/Customers/Wishlist/Action'; // Import the action creator for adding items to the wishlist
import { addItemToCart } from '../../../../Redux/Customers/Cart/Action'; // Import the action creator for adding items to the wishlist
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Pagination from "@mui/material/Pagination";
import { Box, styled } from "@mui/material";
import { filters, singleFilter, sortOptions } from "./FilterData";
import ProductCard from "../ProductCard/ProductCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { productdata } from "../../../../data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  findProducts,
  findProductsByCategory,
} from "../../../../Redux/Customers/Product/Action";
import { deepPurple } from "@mui/material/colors";
import { Backdrop, CircularProgress } from "@mui/material";
import BackdropComponent from "../../BackDrop/Backdrop";
import { getFilters } from "./getfilters";
import { addItemToWishlist, removeWishlistItem } from "../../../../Redux/Customers/Wishlist/Action"
import Slider from "@mui/material/Slider"; // Import the Slider component from Material-UI
import "./product.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
 
export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const param = useParams();
  const { customersProduct } = useSelector((store) => store);
  const location = useLocation();
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);
  const [isClothing, setIsClothing] = useState(false); // State for indicating if it's clothing category
 
  const handleLoderClose = () => {
    setIsLoaderOpen(false);
  };
 
  // const filter = decodeURIComponent(location.search);
  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const price = searchParams.get("price");
  const disccount = searchParams.get("disccout");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");
  const { productId } = useParams();
 
  const totalPages = Math.ceil(customersProduct.products?.totalElements / 2);
 
  // console.log("location - ", colorValue, sizeValue,price,disccount);
  // const handleCartSubmit = () => {
  //   const data = { ItemId, size: selectedSize.name };
  //   dispatch(addItemToCart({ data, jwt }));
  //   navigate("/cart");
  // };
  // const handleWishlistSubmit = async (itemId) => {
  //   const data = { itemId };
 
  //   try {
  //     await dispatch(addItemToWishlist({ data, jwt }));
  //     navigate("/wishlist"); // Move navigation inside the try block to ensure it's only triggered after successful dispatch
  //   } catch (error) {
  //     console.error("Error adding item to wishlist:", error);
  //     // Optionally, you can display a user-friendly error message here
  //   }
  // };
  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
 
  const handlewishlistSubmit = (itemId) => {
    const data = { productId: itemId }; // Use itemId as the product ID
    dispatch(addItemToWishlist({ data, jwt }));
    // setIsClicked(!isClicked); // Update state to indicate that the icon has been clicked
    // navigate("/wishlist");
  };
 
 
 
  const handleSortChange = (value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value.toString()); // Convert value to string
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
 
  // discount slider
  const handleDiscountChange = (event, newValue) => {
    setMinDiscount(newValue[0]); // Update minimum discount
    setMaxDiscount(newValue[1]); // Update maximum discount
  };
 // Step 1: Update component state to include discount range
 const [minDiscount, setMinDiscount] = useState(0); // State variable for minimum discount
 const [maxDiscount, setMaxDiscount] = useState(100); // State variable for maximum discount
 
 
 
  useEffect(() => {
    const [minPrice, maxPrice] =
      price === null ? [0, 0] : price.split("-").map(Number);
    const data = {
      category: param.lavelThree,
      colors: colorValue || [],
      sizes: sizeValue || [],
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 10000,
      minDiscount: minDiscount,
      maxDiscount: maxDiscount,
      sort: sortValue || "price_low",
      pageNumber: pageNumber,
      pageSize: 8, // Set pageSize to 4 for 4 products per page
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    param.lavelThree,
    colorValue,
    sizeValue,
    price,
    sortValue,
    pageNumber,
    stock,
    minDiscount,
    maxDiscount,
  ]);
 
  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
 
    let filterValues = searchParams.getAll(sectionId);
 
    if (filterValues.length > 0 && filterValues[0].split(",").includes(value)) {
      filterValues = filterValues[0]
        .split(",")
        .filter((item) => item !== value);
      if (filterValues.length === 0) {
        searchParams.delete(sectionId);
      }
      console.log("includes");
    } else {
      // Remove all values for the current section
      // searchParams.delete(sectionId);
      filterValues.push(value);
    }
 
    if (filterValues.length > 0)
      searchParams.set(sectionId, filterValues.join(","));
 
    // history.push({ search: searchParams.toString() });
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
  useEffect(() => {
    const usefilters = async () => {
      // Determine the sectionId
      const sectionId = param.lavelTwo || "Clothing";
 
      // Invoke the getFilters function to determine if it's a clothing category
      const { filters } = await getFilters(sectionId, param.lavelOne);
      const isClothingCategory = filters.length > 0 && (param.lavelOne === "Men" || param.lavelOne === "Women");
      setIsClothing(isClothingCategory);
      console.log("Is clothing category:", isClothingCategory);
    };
 
    usefilters();
  }, [param.lavelOne, param.lavelTwo]);
 
 
 
 
  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
 
  useEffect(() => {
    if (customersProduct.loading) {
      setIsLoaderOpen(true);
    } else {
      setIsLoaderOpen(false);
    }
  }, [customersProduct.loading]);
 
  // const handleWishlistToggle = (product) => {
  //   if (isProductInWishlist(product)) {
  //     dispatch(removeWishlistItem({ jwt, wishlistItemId: product.id }));
  //   } else {
  //     dispatch(addItemToWishlist({ jwt, data: product }));
  //   }
  // };
 
  // // Function to check if a product is in the wishlist
  // const isProductInWishlist = (product) => {
  //   return customersProduct.wishlist.some((item) => item.id === product.id);
  // };
  const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const WhiteContainer = styled(Box)`
background: #fff;
padding: 20px;
`;

  return (
    // <Component>
    <div className="bg-white -z-20 ">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
 
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      FILTERS
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
 
                  {/* Filters */}
                 {/* Filters */}
                 {/* <div style={{ padding: '5px', backgroundColor: '#f0f0f0' }}> */}
                        {/* <WhiteContainer> */}
                          {isClothing && (
                            <form className="mt-4 border-t border-gray-200">
                              {filters.map((section) => (
                                <Disclosure
                                  as="div"
                                  key={section.id}
                                  className="border-t border-gray-200 px-4 py-6"
                                >
                                  {({ open }) => (
                                    <>
                                      <h3 className="-mx-2 -my-3 flow-root">
                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                          <span className="font-medium text-gray-900">
                                            {section.name}
                                          </span>
                                          <span className="ml-6 flex items-center">
                                            {open ? (
                                              <MinusIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            ) : (
                                              <PlusIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            )}
                                          </span>
                                        </Disclosure.Button>
                                      </h3>
                                      <Disclosure.Panel className="pt-6">
                                        <div className="space-y-6">
                                          {section.options.map((option, optionIdx) => (
                                            <div
                                              key={option.value}
                                              className="flex items-center"
                                            >
                                              <input
                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                onChange={() =>
                                                  handleFilter(option.value, section.id)
                                                }
                                              />
                                              <label
                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                              >
                                                {option.label}
                                              </label>
                                            </div>
                                          ))}
                                        </div>
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              ))}
                            </form>
                          )}
                        {/* </WhiteContainer> */}
                      {/* </div> */}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
 
 
        <main className="mx-auto px-4 lg:px-14 ">
        <div className="lg:col-span-4 w-full flex items-baseline border-b border-gray-200 py-2 justify-between">
                <div>
            <div className="flex items-center mt-0 ">
            <h3 className="mr-2 font-medium text-gray-500 hover:text-gray-600">
            {param.lavelOne} /
  </h3>
  <h3 className="mr-2 font-medium text-gray-500 hover:text-gray-600">
    {param.lavelTwo} /
  </h3>
  <h3 className="mr-2 font-medium text-gray-500 hover:text-gray-600">{param.lavelThree}</h3>
</div>
          <h3 className="font-medium text-gray-500 mb-5">
         ( Showing {customersProduct?.products?.content?.length} of {customersProduct?.products?.totalElements} products )
        </h3>
    </div>

 
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left items-end">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
 
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <p
                              onClick={() => handleSortChange(option.query)}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm cursor-pointer"
                              )}
                            >
                              {option.name}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
 
              {/* <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
 
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

  {/* <div className="flex flex-col">
    <div className="flex items-center">
      <h3 className="font-medium text-gray-500 hover:text-gray-600">
        {param.lavelOne} /
      </h3>
      <h3 className="mr-2 font-medium text-gray-500 hover:text-gray-600">
        {param.lavelTwo} /
      </h3>
      <h3 className="mr-2 font-medium text-gray-500 hover:text-gray-600">{param.lavelThree}</h3>
    </div>
    <h3 className="font-medium text-gray-600 ">
      ( Showing {customersProduct?.products?.content?.length} of {customersProduct?.products?.totalElements} products )
    </h3>
  </div> */}
            <div>
              <h2 className="py-5 font-semibold opacity-60 text-lg">Filters</h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                {/* Filters */}
                <form className="hidden lg:block border rounded-md p-5">
                  {isClothing && (
                    <>
                      {filters.map((section) => (
                        <Disclosure
                          // defaultOpen={false}
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        onChange={() =>
                                          handleFilter(option.value, section.id)
                                        }
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </>
                  )}
                  {singleFilter.map((section) => (
                    <Disclosure
                      // defaultOpen={true}
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                              >
                                {section.options.map((option, optionIdx) => (
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                    onChange={(e) =>
                                      handleRadioFilterChange(e, section.id)
                                    }
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
     <div className="mt-4">
  <h3 className="font-semibold text-gray-500">Discount Range</h3>
  <Slider
    value={[minDiscount, maxDiscount]}
    onChange={handleDiscountChange}
    min={0}
    max={100} 
    step={1}
    valueLabelDisplay="auto"
  />
 <div className="text-center">
    <p className="text-sm text-gray-500 mt-2 flex items-center justify-center">
      {minDiscount}% - {maxDiscount}%
    </p>
  </div>
</div>

                </form>
  
                <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white border py-5 rounded-md">
                    {customersProduct?.products?.content?.map((item) => (
                      // <div key={item.id} className="relative flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md m-2">
                      //   {/* Favorite icon */}
                      //   <div
                      //     className="absolute top-2 right-2 cursor-pointer"
                      //     onClick={handlewishlistSubmit}
                      //     style={{
                      //       width: '24px', // Adjust the width and height as needed
                      //       height: '24px',
                      //       position: 'relative' // Make sure the position is relative for absolute positioning of SVG
                      //     }}
                      //   >
                      //     <svg
                      //       xmlns="http://www.w3.org/2000/svg"
                      //       viewBox="0 0 24 24"
                      //       fill={isClicked ? 'red' : 'none'} // Fill red when clicked, otherwise none (transparent)
                      //       stroke={isClicked ? 'red' : 'grey'}
                      //       strokeWidth="2"
                      //       strokeLinecap="round"
                      //       strokeLinejoin="round"
                      //       style={{
                      //         position: 'absolute', // Position the SVG
                      //         top: 0,
                      //         left: 0,
                      //         width: '100%',
                      //         height: '100%'
                      //       }}
                      //     >
                      //       <path d="M12 21.21l-1.65-1.51C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.35 11.2L12 21.21z" />
                      //     </svg>
                      //   </div>     {/* Product card content */}
                      <ProductCard key={item._id} product={item} />
      ))}
 
 
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
 
        {/* pagination section */}
 
        <section className="w-full px-[3.6rem]">
          <div className="mx-auto px-4 py-5 flex justify-center shadow-lg border rounded-md">
 
            <Pagination
              count={totalPages}
              color="primary"
              className=""
              onChange={handlePaginationChange}
            />
 
          </div>
        </section>
 
        {/* {backdrop} */}
        <section>
          <BackdropComponent open={isLoaderOpen} />
        </section>
      </div>
    </div >
  );
}