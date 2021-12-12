import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGame = createAsyncThunk(
    'game/getGame',  async () => {
        console.log('hejdå')
        return fetch(`https://api.opendota.com/api/heroStats`).then(response => response.json())
    }
)

const slice = createSlice({
    name:'Hej',
    initialState: {
        value: 0,
    },
    reducers: {
    changeURL: (state, action) => {
        console.log('tjabba')
    }},
    extraReducers: {
        [getGame.pending]: state => {
            state.status = 'loading...'
            console.log(state)
            console.log(state.status)
        },
        [getGame.fulfilled]: (state, action) => {
            state.status = 'success'
            //här
            state.checkState = true;
            console.log(state)
            
        },
        [getGame.rejected]: state => {
            state.status = 'rejected'
            console.log(state.status)
        }
    }
})

/* const { reducer } = slice; */

export default slice.reducer;