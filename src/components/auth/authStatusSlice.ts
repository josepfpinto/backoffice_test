import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import { AuthStatusState } from 'src/types';

// Each slice file should define a type for its initial state value,
// so that createSlice can correctly infer the type of state in each case reducer.

// Define the initial state using that type
const initialState: AuthStatusState = {
    value: false as boolean,
    idtoken: '' as string,
    accessToken: '' as string,
} as const;

export const authStatusSlice = createSlice({
    name: 'authStatus',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        change: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>,
        ) => {
            state.value=action.payload.value;
            state.idtoken=action.payload.idtoken;
            state.accessToken=action.payload.accessToken;
        },
    },
});

export const authStateActions = authStatusSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default authStatusSlice.reducer;