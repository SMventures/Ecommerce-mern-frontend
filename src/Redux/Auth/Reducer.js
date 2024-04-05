import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
  UPDATE_USER_PERSONAL_INFO_REQUEST,
  UPDATE_USER_PERSONAL_INFO_SUCCESS,
  UPDATE_USER_PERSONAL_INFO_FAILURE,
} from "./ActionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case UPDATE_USER_PERSONAL_INFO_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case UPDATE_USER_PERSONAL_INFO_SUCCESS:
      return { ...state, isLoading: false };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case UPDATE_USER_PERSONAL_INFO_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
