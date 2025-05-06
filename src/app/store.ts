import { configureStore } from '@reduxjs/toolkit';
import serviceSpecialityReducer from '../features/public/specialitySlice.ts';
import serviceReducer from '../features/public/serviceSlice.ts';
import clinicOwnerReducer from '../features/clinic/clinicSlice.ts';

export const store = configureStore({
  reducer: {
    serviceSpeciality: serviceSpecialityReducer,
    service: serviceReducer,
    clinicByOwner: clinicOwnerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
