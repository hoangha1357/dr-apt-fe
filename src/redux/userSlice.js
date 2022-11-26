import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    user: null,
    listAppointments: [],
}

export const getAllAppointments = createAsyncThunk('user/getAllAppointments', async (userId, thunkAPI) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
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
    },
})

export const { reset } = userSlice.actions

export default userSlice.reducer
