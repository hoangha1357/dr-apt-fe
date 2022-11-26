import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";
import axiosClient from './../axiosConfig'
const initialState = {
    user: null,
    isLogin: false,
    listAppointments: [],
}

export const getUser = createAsyncThunk('users/getUser', async (_, thunkAPI) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        var decoded = jwt_decode(accessToken);
        console.log(decoded)
        const data = await axiosClient.get(`/user/${decoded.id}`)
        console.log(data);
        if (!data?.data?.user) {
            return thunkAPI.rejectWithValue(data?.response?.data.message);
        }
        
        return data;
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err?.message ? err.message : 'Error when call api');
    }
});

export const getAllAppointments = createAsyncThunk('user/getAllAppointments', async (userId, thunkAPI) => {
    try {
        const response = await axiosClient.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue('Error')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.user = null
            state.listAppointments = []
        },
        storeUser: (state, action) => {
            state.user = action.payload
        },
        loginSuccess: (state) => {
            state.isLogin = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllAppointments.fulfilled, (state, action) => {
                console.log('Successful, ', action.payload)
            })
            .addCase(getAllAppointments.pending, (state, action) => {
                console.log('Pending')
            })
            .addCase(getAllAppointments.rejected, (state, action) => {
                console.log('Rejected: ', action.payload)
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLogin = true;
            })  
            .addCase(getUser.pending, (state, action) => {
                state.user = action.payload
                
            })
            .addCase(getUser.rejected, (state, action) => {
                state.user = action.payload
            })
    },
})

export const { reset, loginSuccess,  storeUser} = userSlice.actions

export default userSlice.reducer
