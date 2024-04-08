import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import {
    ADD_ITEM_TO_WISHLIST_REQUEST,
    ADD_ITEM_TO_WISHLIST_SUCCESS,
    ADD_ITEM_TO_WISHLIST_FAILURE,
    GET_WISHLIST_REQUEST,
    GET_WISHLIST_SUCCESS,
    GET_WISHLIST_FAILURE,
    REMOVE_WISHLIST_ITEM_REQUEST,
    REMOVE_WISHLIST_ITEM_SUCCESS,
    REMOVE_WISHLIST_ITEM_FAILURE,
    UPDATE_WISHLIST_ITEM_REQUEST,
    UPDATE_WISHLIST_ITEM_SUCCESS,
    UPDATE_WISHLIST_ITEM_FAILURE,
    UPDATE_WISHLIST_TOTAL,
} from "./ActionType";

export const addItemToWishlist = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ITEM_TO_WISHLIST_REQUEST });

        const config = {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`,
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.put(`${API_BASE_URL}/api/wishlist/add`, 
      reqData.data,
      config,
        );
        dispatch(updateWishlistTotal(reqData.newTotal));

        dispatch({
            type: ADD_ITEM_TO_WISHLIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADD_ITEM_TO_WISHLIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getWishlist = (jwt) => async (dispatch) => {
    try {
        dispatch({ type: GET_WISHLIST_REQUEST });
        const config = {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.get(`${API_BASE_URL}/api/wishlist`, config);
        dispatch({
            type: GET_WISHLIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_WISHLIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeWishlistItem = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_WISHLIST_ITEM_REQUEST });
        const config = {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`,
                "Content-Type": "application/json",
            },
        };
        await axios.delete(
            `${API_BASE_URL}/api/wishlist_items/${reqData.wishlistItemId}`,
            config
        );
        dispatch(updateWishlistTotal(reqData.newTotal));

        dispatch({
            type: REMOVE_WISHLIST_ITEM_SUCCESS,
            payload: reqData.wishlistItemId,
        });
    } catch (error) {
        dispatch({
            type: REMOVE_WISHLIST_ITEM_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateWishlistItem = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_WISHLIST_ITEM_REQUEST });
        const config = {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`,
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.put(
            `${API_BASE_URL}/api/wishlist/${reqData.wishlistItemId}`,
            reqData.data,
            config
        );
        dispatch({
            type: UPDATE_WISHLIST_ITEM_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_WISHLIST_ITEM_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }

};
export const updateWishlistTotal = (total) => ({
    type: UPDATE_WISHLIST_TOTAL,
    payload: total,
  });  