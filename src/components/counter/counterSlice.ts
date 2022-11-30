import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import { CounterState } from 'src/type';
import type { RootState } from '../../store/store'

// Each slice file should define a type for its initial state value,
// so that createSlice can correctly infer the type of state in each case reducer.

// Define the initial state using that type
const initialState: CounterState = {
    value: 0 as number,
} as const;

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (
            state: Draft<typeof initialState>,
            // action: PayloadAction<typeof initialState>,
        ) => {
            state.value += 1
        },
        decrement: (
            state: Draft<typeof initialState>,
            // action: PayloadAction<typeof initialState>,
        ) => {
            state.value -= 1
        },
    },
});

export const counterActions = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default counterSlice.reducer;