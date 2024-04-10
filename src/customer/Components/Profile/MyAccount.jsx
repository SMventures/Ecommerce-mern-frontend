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
 
function MyAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
 
  return (
    <div className='whole-container-outer'> {/* Added wrapper div with class 'whole-container-outer' */}
      <div className='whole-container px-2'>
        <div className="avatar-wrapper">
          {auth.user && (
            <div className="avatar-info" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Avatar
                  onClick={() => {}}
                  sx={{
                    bgcolor: blue[500],
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {auth.user.firstName[0].toUpperCase()}
                </Avatar>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{auth.user.firstName}</span>
              </div>
            </div>
          )}
        </div>
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
  );
}
 
export default MyAccount;
 