import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import smlogo from "../../../smlogo.png"
import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 6%;
  margin-bottom: 1%;
  img-size: 5px;
  line-height: 2%;
  margin-top: 1%;
  margin-right: 2%;
`;

const Subheading = styled(Typography)`
  font-size: 12px;
  font-weight: 600;
`;

const CustomButtonwrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component>
                    <Link to="/">
                        <img src={smlogo} alt="digital dalal street" style={{ width: 35, height: 35 }} />
                    </Link>
                    <Box>
                        <Subheading> Digital Dalal Street</Subheading>
                    </Box>
                </Component>
                    <Search/>
                    {/* <button
                        id="CategoriesButton"
                        onClick={toggleDropdown}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ml-10"
                        type="button"
                    > */}
                        {/* Categories
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    id="categories"
                    className={`${isOpen ? 'block' : 'hidden'
                        } z-10 absolute left-[48rem] top-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="CategoriesButton">
                        <div className="py-2">
                            <button onClick={() => handleNavigation("/mens_kurta")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Men Fashion
                            </button>
                            <button onClick={() => handleNavigation("/women")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Women Fashion
                            </button>
                            <button onClick={() => handleNavigation("/mens_kurta")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Stationery
                            </button>
                            <button onClick={() => handleNavigation("/books")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Books
                            </button>
                            <button onClick={() => handleNavigation("/mens_kurta")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Accessories
                            </button>
                            <button onClick={() => handleNavigation("/mens_kurta")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Electronics
                            </button>
                        </div>
                    </ul>
                // </div> */}
                <CustomButtonwrapper>
                    <CustomButtons />
                </CustomButtonwrapper>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;
