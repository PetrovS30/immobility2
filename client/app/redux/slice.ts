import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchOptions {
    searchPartnerGender: string | null; // Пол собеседника (М или Ж)
}
interface Send {
    localName: string;
    OwnGender: string | null;
    PartnerGender: string | null;
}
interface User {
    localName: string | null;
    OwnGender: string | null;
    currentPath: string;
    searchOptions: SearchOptions;
}
const initialState: User = {
    localName: null,
    OwnGender: null,
    currentPath: '/main',
    searchOptions: {
        searchPartnerGender: null,
    }
};
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        sendUserQuery: (state, actions: PayloadAction<Send>) => {
            const { localName, OwnGender, PartnerGender } = actions.payload;
            state.localName = localName;
            state.OwnGender = OwnGender;
            state.searchOptions.searchPartnerGender = PartnerGender;
        },
        setPageLog: (state, actions: PayloadAction<string>) => {
            state.currentPath = actions.payload
        }
    },
});

// Экспортируем действия
export const { sendUserQuery, setPageLog } = UserSlice.actions;

// Экспортируем редюсер
export default UserSlice.reducer;
