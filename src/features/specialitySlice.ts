import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllSpeciality } from '../api/public/speciality/specialityPublicService.ts';
import { SpecialityDTO } from '../api/public/speciality/specialityTypes.ts';

interface SpecialityState {
  speciality: SpecialityDTO[];
  loading: boolean;
  error: string | null;
}

const initialState: SpecialityState = {
  speciality: [],
  loading: false,
  error: null,
};

export const fetchSpeciality = createAsyncThunk<
  SpecialityDTO[],
  void,
  { rejectValue: string }
>('speciality/fetch', async (_, thunkAPI) => {
  try {
    const response = await getAllSpeciality();
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(
      'Có lỗi xảy ra khi lấy thông tin chuyên khoa' + e
    );
  }
});

const serviceSpecialitySlice = createSlice({
  name: 'serviceSpeciality',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpeciality.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpeciality.fulfilled, (state, action) => {
        state.loading = false;
        state.speciality = action.payload;
      })
      .addCase(fetchSpeciality.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default serviceSpecialitySlice.reducer;
