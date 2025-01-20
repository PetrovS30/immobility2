import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slice';

const store = configureStore({
    reducer: {
        data: UserSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
