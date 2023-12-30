import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    hiddenMenu: true,
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
            };
        },
        setVerified: state => {
            if (state.currentUser) {
                state.currentUser.verified = true;
            }
        },
        clearCurrentUser: state => {
            return {
                ...state,
                currentUser: null,
            };
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            };
        },
    },
});

export const { setCurrentUser, setVerified, clearCurrentUser, toggleHiddenMenu } = userSlice.actions;
export default userSlice.reducer;
