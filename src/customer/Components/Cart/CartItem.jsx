import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartItem, updateCartTotal } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { blue } from '@mui/material/colors';
import { Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
& > td {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const calculateNewTotal = (cartItems) => {
  if (!Array.isArray(cartItems)) {
    return 0;
  }

  // Calculate the total count of distinct items in the cart
  const totalCount = cartItems.reduce((total, item) => total + 1, 0);
  return totalCount;
};




const CartItem = ({ item, showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const cart = useSelector(store => store.cart); // Move useSelector inside the component
  const cartTotal = cart.cartTotal ?? 0;
  const cartItemCount = cart.cart?.totalItem ?? 0;
  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?._id, jwt };
    console.log("Data to be removed from cart:", data);
    dispatch(removeCartItem(data))
      .then(() => {
        const removedItemQuantity = item.quantity;
        console.log("Quantity of the removed item:", removedItemQuantity);
        const totalCount = calculateNewTotal(cartTotal, removedItemQuantity);
        console.log("New total after removing item:", totalCount);
        dispatch(updateCartTotal(totalCount));
      });
  };
  
  
  const handleUpdateCartItem = (num) => {
    console.log("Updating cart item with quantity:", item.quantity + num);
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id, jwt };
    console.log("Data to update cart item:", data);
    dispatch(updateCartItem(data));
  };
  

  

  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <div className="ml-16">           
            <Table className="ml-40">
              <TableBody>
                <ColumnText>
                  <TableCell className="mb-4" style={{ fontWeight: 600,textAlign:'center' }}>Delivery by {date.toDateString()}</TableCell>
                </ColumnText>
              </TableBody>
            </Table>
          </div>
          <p className="font-semibold">{item.product && item.product.title}</p>
          <p className="opacity-70">Size: {item?.size},White</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-semibold text-lg">₹{item?.product?.discountedPrice}</p>
            <p className="text-green-600 font-semibold">{item?.product?.discountPersent}% off</p>
          </div>
        </div>
      </div>
      {showButton && 
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item?.quantity <= 1} style={{ color: blue[700] }} aria-label="add an alarm">
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
            <IconButton onClick={() => handleUpdateCartItem(1)} style={{ color: blue[700] }} aria-label="add an alarm">
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button onClick={handleRemoveItemFromCart} variant="text" style={{ color: blue[800] }}>
              <DeleteIcon /> Remove
            </Button>
          </div>
        </div>
      }
    </div>
  );
};

export default CartItem;

