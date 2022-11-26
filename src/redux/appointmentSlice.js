import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const appointmentSlice = createAsyncThunk('appointmentSlice', async (data, thunkAPI) => {
    try {
        var config_API = {
            method: 'POST',
            url: ``,

            headers: {},
        }
        const response = await axios(config_API)

        return response.data
    } catch (e) {
        console.log('Error', e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

export const { reset } = appointmentSlice.actions

export default appointmentSlice.reducer
