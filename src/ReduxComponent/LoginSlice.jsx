import { createSlice } from "@reduxjs/toolkit"

const LoginSlice = createSlice({
    name: 'LoginSlice',
    initialState: {
        username: '',
        password: '',
        showpassword: false,
        errorMsg: '',
    },
    reducers: {
        showPassword: (state) => {
            state.showpassword = !state.showpassword
        },
        getUsername: (state, action) => {
            state.username = action.payload
        },
        getPassword: (state, action) => {
            state.password = action.payload
        },
        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload
        }
    }
})

export default LoginSlice