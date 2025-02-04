import ProductsSlice from "../ProductsSlice";

const apiStatusConstraints = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const action = ProductsSlice.actions;
let apiCalled = false;

export const FetchData = async (dispatch) => {
  if (apiCalled) {
    return;
  }
  apiCalled = true;

  dispatch(action.setApiStatus(apiStatusConstraints.inProgress));

  const response = await fetch("https://fakestoreapi.com/products");

  if (response.ok) {
    const data = await response.json();

    const newData = data.map((each) => {
      return { ...each, wishlist: false };
    });

    dispatch(action.setProductsList(newData));
    dispatch(action.setApiStatus(apiStatusConstraints.success));
  } else {
    dispatch(action.setApiStatus(apiStatusConstraints.failure));
  }
};
