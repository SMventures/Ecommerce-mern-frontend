import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Typography, Button } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../Redux/Customers/Order/Action";
import MyAccount from "../Profile/MyAccount";
import OrderCard from "./OrderCard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MyAvatar from '../Profile/Avatar'
const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [dispatch, jwt]);

  console.log("users orders ", order.orders);

  return (
    <Box style={{ display: "flex", background: "#f2f2f2" }}>
    <div style={{ background: "#f0f0f0", padding: "20px", width: "30%", marginTop: "20px", marginBottom: "20px" }}>
      <div style={{ background: "#fff", padding: "20px" }}>
        <MyAvatar />
      </div>
      <div style={{ background: "#fff", padding: "20px", marginTop: "20px" }}>
        <MyAccount />
      </div>
    </div>
      <div style={{ padding: "20px", width: "70%" }}>
        <div style={{ background: "#f0f0f0", padding: "10px", height: "100%" }}>
          <div style={{ background: "#fff", padding: "20px", height: "100%" }}>
            {order.orders.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <div className="text-center">
                <Typography variant="h5" className="font-medium"> No Orders Placed Yet 😢</Typography>
                                  <Button variant="contained" color="primary" href="/cart">
                    Go to Cart
                  </Button>
                </div>
              </div>
            ) : (
              <Grid container justifyContent="space-between">
                <Grid item xs={3}>
                  <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                    <h1 className="font-bold text-lg">Filter</h1>
                    <div className="space-y-4 mt-10">
                      <h1 className="font-semibold">ORDER STATUS</h1>
                      {orderStatus.map((option) => (
                        <div className="flex items-center" key={option.value}>
                          <input
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="space-y-6">
                    {order.orders.map((item, index) => (
                      <OrderCard key={index} />
                    ))}
                  </div>
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Order;
