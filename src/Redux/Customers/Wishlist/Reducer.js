import {
    ADD_ITEM_TO_WISHLIST_FAILURE,
    ADD_ITEM_TO_WISHLIST_REQUEST,
    ADD_ITEM_TO_WISHLIST_SUCCESS,
    GET_WISHLIST_FAILURE,
    GET_WISHLIST_REQUEST,
    GET_WISHLIST_SUCCESS,
    REMOVE_WISHLIST_ITEM_FAILURE,
    REMOVE_WISHLIST_ITEM_REQUEST,
    REMOVE_WISHLIST_ITEM_SUCCESS,
    UPDATE_WISHLIST_ITEM_FAILURE,
    UPDATE_WISHLIST_ITEM_REQUEST,
    UPDATE_WISHLIST_ITEM_SUCCESS,
  } from "./ActionType";
  
  const initialState = {
    wishlist: { wishlistItems: [] }, // Set an initial state with an empty array for wishlistItems
    loading: false,
    error: null,
  };
  
  
  const wishlistReducer = (state = initialState, action) => {
    console.log("Action dispatched:", action.type); // Log the dispatched action type
    console.log("Current state:", state); // Log the current state
    switch (action.type) {
      case ADD_ITEM_TO_WISHLIST_REQUEST:
      case GET_WISHLIST_REQUEST:
      case REMOVE_WISHLIST_ITEM_REQUEST:
      case UPDATE_WISHLIST_ITEM_REQUEST:
        console.log("Request action dispatched. Setting loading to true.");
        return { ...state, loading: true, error: null };
  
      case ADD_ITEM_TO_WISHLIST_SUCCESS:
        console.log("Adding item to wishlist success.");
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
          loading: false,
          error: null,
        };
  
      case GET_WISHLIST_SUCCESS:
        console.log("Getting wishlist success.");
        return {
          ...state,
          wishlistItems: action.payload.wishlistItems,
          wishlist: action.payload.wishlist,
          loading: false,
          error: null,
        };
  
      case REMOVE_WISHLIST_ITEM_SUCCESS:
        console.log("Removing item from wishlist success.");
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(
            (item) => item._id !== action.payload
          ),
          loading: false,
          error: null,
        };
  
      case UPDATE_WISHLIST_ITEM_SUCCESS:
        console.log("Updating wishlist item success.");
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
          loading: false,
          error: null,
        };
  
      case ADD_ITEM_TO_WISHLIST_FAILURE:
      case GET_WISHLIST_FAILURE:
      case REMOVE_WISHLIST_ITEM_FAILURE:
      case UPDATE_WISHLIST_ITEM_FAILURE:
        console.log("Wishlist operation failed. Error:", action.payload);
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  