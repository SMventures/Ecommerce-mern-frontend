import React, { useState } from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPersonalInfo, getUser } from "../../../Redux/Auth/Action";
import MyAccount from './MyAccount'; // Import the MyAccount component

export default function PersonalInformationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [userInfo, setUserInfo] = useState({
    firstName: auth.user?.firstName || "",
    lastName: auth.user?.lastName || "",
    email: auth.user?.email || "",
    phoneNumber: auth.user?.phoneNumber || "",
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    try {
      await dispatch(updateUserPersonalInfo({ userInfo, jwt, navigate }));
      setOpenSnackBar(true);
      dispatch(getUser(jwt));
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };


  return (
    <div className="">
       <div className="profile-container">
      {/* Render MyAccount component as a sidebar */}
      <div className="sidebar">
        <MyAccount />
      </div>
      {/* Render your main content component */}
      <div className="main-content">
        <PersonalInformationForm />
        {/* Add other content components as needed */}
      </div>
    </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
          autoComplete="given-name"
          value={userInfo.firstName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          autoComplete="family-name"
          value={userInfo.lastName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="email"
          name="email"
          label="Email Address"
          fullWidth
          autoComplete="email"
          type="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          fullWidth
          autoComplete="tel"
          value={userInfo.phoneNumber}
          onChange={handleChange}
        />
      </Grid>
          {/* TextField components for first name, last name, email, and phone number */}

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Update Information
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Display login link */}
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
          Profile updated successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
