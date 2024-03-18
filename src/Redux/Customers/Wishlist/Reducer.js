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
  wishlist: null,
  loading: false,
  error: null,
  wishlistItems: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_ITEM_TO_WISHLIST_REQUEST:
          return { ...state, loading: true, error: null };
      case ADD_ITEM_TO_WISHLIST_SUCCESS:
          return {
              ...state,
              wishlistItems: [...state.wishlistItems, action.payload],
              loading: false,
          };
      case ADD_ITEM_TO_WISHLIST_FAILURE:
          return { ...state, loading: false, error: action.payload };
      case GET_WISHLIST_REQUEST:
          return {
              ...state,
              loading: true,
          };
      case GET_WISHLIST_SUCCESS:
          return {
              ...state,
              wishlistItems: action.payload.wishlistItems,
              wishlist: action.payload.wishlist,
              loading: false,
          };
      case GET_WISHLIST_FAILURE:
          return {
              ...state,
              error: action.payload,
              loading: false,
          };
      case REMOVE_WISHLIST_ITEM_REQUEST:
      case UPDATE_WISHLIST_ITEM_REQUEST:
          return {
              ...state,
              loading: true,
          };
      case REMOVE_WISHLIST_ITEM_SUCCESS:
          return {
              ...state,
              wishlistItems: state.wishlistItems.filter(
                  (item) => item._id !== action.payload
              ),
              loading: false,
          };
      case UPDATE_WISHLIST_ITEM_SUCCESS:
          return {
              ...state,
              wishlistItems: state.wishlistItems.map((item) =>
                  item._id === action.payload._id ? action.payload : item
              ),
              loading: false,
          };
      case REMOVE_WISHLIST_ITEM_FAILURE:
      case UPDATE_WISHLIST_ITEM_FAILURE:
          return {
              ...state,
              error: action.payload,
              loading: false,
          };
      default:
          return state;
  }
};

export default wishlistReducer;
