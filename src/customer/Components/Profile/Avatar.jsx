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

function MyAvatar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
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
              {/* Display the greeting */}
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{auth.user.firstName}</span>

        </div>
      </div>
    )}
  </div>
 
);
        }

export default MyAvatar;
