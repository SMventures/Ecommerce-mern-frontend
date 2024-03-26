import React, { useState, useEffect } from 'react';
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Redux/Auth/Action";
import { useLocation, useNavigate } from 'react-router-dom';
import AuthModal from '../Auth/AuthModal';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logout } from "../../../Redux/Auth/Action";
import { deepPurple } from '@mui/material/colors';
import Cart from '../Cart/Cart';
import WishlistItem from '../wishlist/WishlistItem';
import Wishlist from "../wishlist/wishlist"


const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    align-items: center;
`;

const Container = styled(Box)`
    display: flex;
    font-size: 10px;
    margin-left: 10%;
    align-items: end;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 30px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 30px;
    display: flex;
    align-items: center;
`;

const IconWrapper = styled(Box)`
    margin-right: 10px;
    cursor: pointer;
`;

const CustomButtons = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { auth } = useSelector((store) => store);
    const jwt = localStorage.getItem("jwt");
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const { cart } = useSelector((store) => store);
    const { wishlist } = useSelector((store) => store);

    const handleOpen = () => {
        setOpenAuthModal(true);
    };

    const handleClose = () => {
        setOpenAuthModal(false);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        handleCloseUserMenu()
        navigate("/");
    };

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMyOrderClick = () => {
        navigate("/account/order");
    };

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));
        }
    }, [jwt, auth.jwt]);

    useEffect(() => {
        if (auth.user) {
            handleClose();
        }
        if ((location.pathname === "/login" || location.pathname === "/Signup")) {
            navigate(-1);
        }
    }, [auth.user]);

    const handleWishlistClick = () => {
        navigate("/wishlist");
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <Wrapper>
            {auth.user ? (
                <>
                    <Avatar
                        onClick={handleUserClick}
                        sx={{
                            bgcolor: deepPurple[500],
                            color: "white",
                            cursor: "pointer",
                            marginRight: "10px"
                        }}
                    >
                        {auth.user.firstName[0].toUpperCase()}
                    </Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleMyOrderClick}>
                            My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
            ) : (
                <LoginButton variant="contained" onClick={handleOpen}>
                    Signin
                </LoginButton>
            )}
            <Container>
            <IconWrapper onClick={handleWishlistClick} className="relative">
          <FavoriteIcon />
          {wishlist && wishlist.wishlistItems && ( /* Remove the conditional here */
            <span className="wishlist-count absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
              {wishlist.wishlistItems.length}
            </span>
          )}
          <span className="sr-only">items in wishlist</span>
        </IconWrapper>




                <IconWrapper onClick={handleCartClick} className="relative">
                    <ShoppingCartIcon />
                    <sup className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
                        {cart.cart?.totalItem}
                    </sup>
                    <span className="sr-only">items in cart, view bag</span>
                </IconWrapper>



            </Container>
            <AuthModal handleClose={handleClose} open={openAuthModal} />
        </Wrapper>
    );
}

export default CustomButtons;
