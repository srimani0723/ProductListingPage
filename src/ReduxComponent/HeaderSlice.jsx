import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: 'HeaderSlice',
    initialState: {
        displayOptions: false,
        activeOption: 'HOME',
        sideBar: false,
        logoutBtn: false,
    },
    reducers: {
        toggleBar: (state) => {
            state.displayOptions = !state.displayOptions
        },
        setActiveOption: (state, action) => {
            state.activeOption = action.payload
        },
        toggleSideBar: (state) => {
            state.sideBar = !state.sideBar
        },
        toggleLogoutBtn: (state) => {
            state.logoutBtn = !state.logoutBtn
        }
    }
})

export default HeaderSlice