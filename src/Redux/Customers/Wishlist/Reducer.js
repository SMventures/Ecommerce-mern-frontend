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
  UPDATE_WISHLIST_TOTAL,
} from "./ActionType";

const initialState = {
  wishlist: { wishlistItems: [] },
  loading: false,
  error: null,
  wishlistTotal: 0,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISHLIST_REQUEST:
    case GET_WISHLIST_REQUEST:
    case REMOVE_WISHLIST_ITEM_REQUEST:
    case UPDATE_WISHLIST_ITEM_REQUEST:
      return { ...state, loading: true, error: null };

    case ADD_ITEM_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
        loading: false,
        error: null,
        wishlistTotal: state.wishlistTotal + 1, // Increment wishlist total
      };

    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistItems: action.payload.wishlistItems,
        wishlist: action.payload.wishlist,
        loading: false,
        error: null,
        wishlistTotal: action.payload.wishlistTotal, // Set wishlist total from the response
      };

    case REMOVE_WISHLIST_ITEM_SUCCESS:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
        error: null,
        wishlistTotal: state.wishlistTotal - 1, // Decrement wishlist total
      };

    case UPDATE_WISHLIST_ITEM_SUCCESS:
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
      return { ...state, loading: false, error: action.payload };

    case UPDATE_WISHLIST_TOTAL:
      return {
        ...state,
        wishlistTotal: action.payload, // Update wishlist total
      };

    default:
      return state;
  }
};

export default wishlistReducer;
