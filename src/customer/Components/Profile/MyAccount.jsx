import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Person2Icon from '@mui/icons-material/Person2';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Auth/Action";
import Avatar from '@mui/material/Avatar';
import { blue} from '@mui/material/colors';
import { Box, styled } from "@mui/material";
import MyAvatar from './Avatar';
function MyAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  
  // Check if auth.user exists before accessing its properties
  // const greeting = auth.user ? `Hello, ${auth.user.firstName}` : 'Hello';
  
  const Component = styled(Box)`
  background-color: #f0f0f0;
    width: 100%; /* Set width to 100% */
    padding:20px
  `;
  const WhiteContainer = styled(Box)`
    background: #fff;
    padding: 20px;
width: 100%;  `;
 
  return (
  
    <div>
      <div className='whole-container-outer'> {/* Added wrapper div with class 'whole-container-outer' */}
        <div className='whole-container px-2'>
          <div className="my-account">
        
            <div className="section">
              <div className="section-title">
                <OpenInBrowserIcon style={{ color: 'blue' }} />
                <h2>MY ORDERS</h2>
              </div>
              <ul>
                <li style={{ color: 'black' }}><Link to="/account/order">View Orders</Link></li>
                <li style={{ color: 'black' }}><Link to="/account/orderTracker">Track Orders</Link></li>
              </ul>
            </div>
            <hr />
            <div className="section">
              <div className="section-title">
                <Person2Icon style={{ color: 'blue' }}/>
                <h2>ACCOUNT SETTINGS</h2>
              </div>
              <ul>
                <li style={{ color: 'black' }}><Link to="/Profile/Profile">Profile Information</Link></li>
                <li style={{ color: 'black' }}><Link to="/account/addAddress">Manage Addresses</Link></li>
              </ul>
            </div>
            <hr/>
            <div className="section">
              <div className="section-title">
                <FolderSharedIcon  style={{ color: 'blue' }}/>
                <h2 >MY STUFF</h2>
              </div>
              <ul>
                <li style={{ color: 'black' }}><Link to="/wishlist">My Wishlist</Link></li>
              </ul>
            </div>
            <hr/>
            <div className="section-title" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <LogoutIcon style={{ color: 'blue' }}/>
              <h2 >Logout</h2>
            </div>
          </div>
        </div>
      </div>
   
    </div>
 
  );
};
 
export default MyAccount;
