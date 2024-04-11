
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Redux/Auth/Action";
import { Fragment, useEffect, useState } from "react";

export default function RegisterUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);

  const handleClose = () => setOpenSnackBar(true); // Typo fixed (assuming you meant `setOpenSnackBar(false)` to close the Snackbar)

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)); // Fetch user data if JWT exists
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user) { // Check for `auth.user` existence (successful registration)
      setOpenSnackBar(true);
    }
  }, [auth.user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("user data", userData);

    try {
      const user = await dispatch(register(userData)); // Dispatch register action
      console.log("Registration successful:", user);

      // Handle successful registration (optional: redirect or display success message)
      setOpenSnackBar(true); // Open Snackbar for success message (assuming Snackbar handles success display)
      // navigate("/"); // Assuming you want to redirect to a specific route after registration
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration errors (optional: display error message in Snackbar)
    }
  };

  return (
    <div className="">
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

<div className="flex justify-center flex-col items-center">
     <div className="py-3 flex items-center ">
        <p className="m-0 p-0">if you have already account ?</p>
        <Button onClick={()=> navigate("/login")} className="ml-5" size="small">
          Login
        </Button>
      </div>
</div>
<Snackbar open={openSnackBar} autoHideDuration={6000}>
      <Alert severity="success">
        {/* Display success message conditionally based on Snackbar logic */}
      </Alert>
    </Snackbar>
     
    </div>
  );
}