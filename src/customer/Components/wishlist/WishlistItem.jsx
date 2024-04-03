import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../../../Redux/Customers/Wishlist/Action";
import { Table, TableBody, TableRow, TableCell, styled, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from '@mui/material/colors';

// for delivery date
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
& > td {
        font-size: 14px;
        margin-top: 6px;
    }
`

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

  const handleRemoveItemFromWishlist = () => {
    const data = { wishlistItemId: item?._id, jwt };
    dispatch(removeWishlistItem(data));
  };

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
          {/* deliviry date */}
          <div className="ml-16">           
          <Table className="ml-40">
<TableBody>
<ColumnText>

<TableCell className="" style={{ fontWeight: 600,textAlign:'center' }}>Delivery by {date.toDateString()}</TableCell>
</ColumnText>


</TableBody>
</Table>
</div>
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-semibold text-lg">
              ₹{item?.product?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPersent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-sm lg:text-base mt-5 lg:mt-0 " style={{ marginLeft: '600px' }}>
        <Button
          onClick={handleRemoveItemFromWishlist}
          variant="text"
          style={{ color: blue[800] }}
        >
           <DeleteIcon /> Remove
        </Button>
        

      </div>
    </div>
  );
};

export default WishlistItem;
