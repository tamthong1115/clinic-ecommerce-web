import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllSpeciality } from '../../api/public/speciality/specialityPublicService.ts';
import { SpecialityDTO } from '../../api/public/speciality/specialityTypes.ts';
import { Page } from '../../api/commonTypes.ts';

interface PaginationState {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
}

interface SpecialityState {
  speciality: SpecialityDTO[];
  loading: boolean;
  error: string | null;
  pagination: PaginationState;
}

const defaultPagination: PaginationState = {
  page: 0,
  size: 12,
  totalPages: 0,
  totalElements: 0,
  last: false,
  first: true,
};

const initialState: SpecialityState = {
  speciality: [],
  loading: false,
  error: null,
  pagination: { ...defaultPagination },
};

export const fetchSpeciality = createAsyncThunk<
  Page<SpecialityDTO>,
  { page?: number; size?: number },
  { rejectValue: string }
>('speciality/fetch', async ({ page, size }, thunkAPI) => {
  try {
    const response = await getAllSpeciality(page, size);
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
        state.speciality = action.payload.content;
        state.pagination = {
          page: action.payload.number,
          size: action.payload.size,
          totalPages: action.payload.totalPages,
          totalElements: action.payload.totalElements,
          first: action.payload.first,
          last: action.payload.last,
        };
      })
      .addCase(fetchSpeciality.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default serviceSpecialitySlice.reducer;
