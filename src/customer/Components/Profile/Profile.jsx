import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPersonalInfo } from "../../../Redux/Auth/Action";
import MyAccount from "./MyAccount";
import MyAvatar from "./Avatar";

import Typography from "@material-ui/core/Typography";

export default function PersonalInformationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    // Fetch user data after component mounts
    setUserInfo({
      firstName: auth.user?.firstName || "",
      lastName: auth.user?.lastName || "",
      email: auth.user?.email || "",
      phoneNumber: auth.user?.phoneNumber || "",
      gender: auth.user?.gender || "",
    });
  }, [auth.user]); // Trigger effect whenever auth.user changes

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    try {
      const updatedUser = await dispatch(
        updateUserPersonalInfo({
          ...userInfo,
          userId: auth.user._id,
          jwt,
        })
      );
      console.log("Updated user:", updatedUser); // Add this log to check the updated user
      setOpenSnackBar(true);
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
    <div style={{ display: "flex", background: "#f2f2f2" }}>
      <div style={{ background: "#f0f0f0", padding: "20px", width: "30%", marginTop: "20px", marginBottom: "20px" }}>
        <div style={{ background: "#fff", padding: "20px" }}>
          <MyAvatar />
        </div>
        <div style={{ background: "#fff", padding: "20px", marginTop: "20px" }}>
          <MyAccount />
        </div>
      </div>
      <div style={{ padding: "30px", width: "70%" }}>
        <div style={{ background: "#f0f0f0", padding: "20px", height: "100%" }}>
          <div style={{ background: "#fff", padding: "20px", height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
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
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    Select your gender
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={userInfo.gender}
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#007bff", color: "white" }}
                  >
                    Update Information
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: "100%" }}>
          Profile updated successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
