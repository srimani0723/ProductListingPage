import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) => {
    localStorage.setItem("productsList", JSON.stringify(state.productsList));
    localStorage.setItem("filteredList", JSON.stringify(state.filteredList));
    localStorage.setItem("apiStatus", JSON.stringify(state.apiStatus))
}

const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState: {
        // productsList: JSON.parse(localStorage.getItem('productsList')) || [],
        // filteredList: JSON.parse(localStorage.getItem('filteredList')) || [],
        // apiStatus: JSON.parse(localStorage.getItem('apiStatus')) || 'INITIAL',

        productsList: [],
        filteredList: [],
        apiStatus: 'INITIAL',
        filterOption: "RECOMMENDED",
        pageNumber: 1,
    },
    reducers: {
        setProductsList: (state, action) => {
            const Data = action.payload
            state.productsList = Data
            state.filteredList = Data
            // updateLocalStorage(state)
        },
        setApiStatus: (state, action) => {
            state.apiStatus = action.payload
            // updateLocalStorage(state)
        },
        setWishlistProduct: (state, action) => {

            const FilteredData = state.productsList.map(each => {

                if (each.id === action.payload.id) {
                    return { ...each, wishlist: !each.wishlist }
                }
                return each

            })
            state.productsList = FilteredData
            // updateLocalStorage(state)
        },
        setFilterOption: (state, action) => {
            const filter = action.payload

            if (filter == "RECOMMENDED") {
                state.filteredList = state.productsList
            } else if (filter == "PRICE: LOW TO HIGH") {
                state.filteredList = state.filteredList.sort((a, b) => a.price - b.price)

            } else if (filter == "PRICE: HIGH TO LOW") {
                state.filteredList = state.filteredList.sort((a, b) => b.price - a.price)
            }
        },
        pageIncrement: (state) => {
            state.pageNumber += 1
        },
        pageDecrement: (state) => {
            state.pageNumber -= 1
        }
    }
})

export default ProductsSlice