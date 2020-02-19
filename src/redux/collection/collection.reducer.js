import ShopActionTypes from './collection.types';
const INITIAL_DATA = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const collectionReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default collectionReducer;
