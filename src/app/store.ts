import { configureStore } from '@reduxjs/toolkit';
import serviceSpecialityReducer from '../features/specialitySlice.ts';
import serviceReducer from '../features/serviceSlice.ts';

export const store = configureStore({
  reducer: {
    serviceSpeciality: serviceSpecialityReducer,
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
