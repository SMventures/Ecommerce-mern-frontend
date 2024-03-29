import React from 'react';
import './style.css';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Person2Icon from '@mui/icons-material/Person2';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';
 
function MyAccount() {
  return (
   
      <div className='whole-container px-2'>
        <div className='profile-photo'>
            <FaceIcon style={{ color: 'blue', width:'35px',height:'35px'}}/>
            <h2>Hello</h2>
        </div>
      <div className="my-account ">
        <div className="section">
          <div className="section-title">
            <OpenInBrowserIcon style={{ color: 'blue' }} />
            <h2>MY ORDERS</h2>
          </div>
         
          <ul>
            <li>View Orders</li>
            <li>Track Orders</li>
            <li>Cancel Orders</li>
          </ul>
        </div>
        <hr />
        <div className="section">
         <div className="section-title">
          <Person2Icon style={{ color: 'blue' }}/>
          <h2>ACCOUNT SETTINGS</h2>
         </div>
 
         
          <ul>
            <li>Profile Information</li>
            <li>Manage Addresses</li>
            <li>PAN Card Information</li>
          </ul>
        </div>
        <hr/>
 
        <div className="section">
          <div className="section-title">
           <AccountBalanceWalletIcon style={{ color: 'blue' }}/>  
          <h2>PAYMENTS</h2>
          </div>
         
          <ul>
            <li>Gift Cards ₹0</li>
            <li>Saved UPI</li>
            <li>Saved Cards</li>
          </ul>
        </div>
        <hr/>
 
        <div className="section">
          <div className="section-title">
           <FolderSharedIcon  style={{ color: 'blue' }}/>
          <h2 >MY STUFF</h2>
          </div>
         
          <ul>
            <li>My Coupons</li>
            <li>My Reviews & Ratings</li>
            <li>All Notifications</li>
            <li>My Wishlist</li>
           
           
          </ul>
        </div>
        <hr/>
        <div className="section-title">
          <LogoutIcon style={{ color: 'blue' }}/>
          <h2 >Logout</h2>
        </div>
      </div>
      </div>
   
  );
}
 
export default MyAccount;



