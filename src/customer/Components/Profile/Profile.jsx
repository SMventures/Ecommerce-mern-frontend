import React, { useState } from "react";
import { Grid, TextField, Button, Snackbar, Alert, FormControl, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPersonalInfo, getUser } from "../../../Redux/Auth/Action";
import MyAccount from './MyAccount';

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
    gender: auth.user?.gender || "", // New state for gender
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    try {
      const updatedUser = await dispatch(updateUserPersonalInfo({
        ...userInfo,
        userId: auth.user._id, // Assuming the user ID is stored in auth.user._id
        jwt
      }));
      setOpenSnackBar(true);
      // Update the local state with the updated user information
      setUserInfo(updatedUser);
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

  const handleProfile = () => {
    navigate("/Profile/Profile");
  };

  return (
    <div className="profile-container" style={{ display: "flex", gap: "120px", marginTop: "20px" }}>
      <div className="sidebar" style={{ position: "sticky", top: 0 , marginRight: "280px",marginLeft:"20px"}}>
        <MyAccount />
      </div>
      <div className="main-content" style={{ maxWidth: "800px", marginBottom: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
            </Grid>
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
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { borderColor: 'black' },
                }}
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
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { borderColor: 'black' },
                }}
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
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { borderColor: 'black' },
                }}
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
                InputLabelProps={{
                  style: { color: 'black' },
                }}
                InputProps={{
                  style: { borderColor: 'black' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
             <Typography variant="body1" gutterBottom>
               Select your gender
             </Typography>
              <div style={{ display: "flex" }}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={userInfo.gender}
                    onChange={handleChange}
                    style={{ flexDirection: "row" }}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0" ,width: "100%"}}
                style={{ backgroundColor: '#007bff', color: 'white' }}
              >
                Update Information
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
          Profile updated successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
