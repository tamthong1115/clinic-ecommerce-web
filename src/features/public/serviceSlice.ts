import { ServiceDTO } from '../../api/public/service/serviceTypes.ts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllService,
  getServiceById,
  getServiceBySpecId,
} from '../../api/public/service/servicePublicService.ts';
import { Page } from '../../api/commonTypes.ts';

interface PaginationState {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
}

interface ServiceState {
  allServices: ServiceDTO[];
  selectedService: ServiceDTO | null;
  servicesBySpeciality: ServiceDTO[];
  loading: boolean;
  error: string | null;
  paginationAll: PaginationState;
  paginationSpec: PaginationState;
}

const defaultPagination: PaginationState = {
  page: 0,
  size: 12,
  totalPages: 0,
  totalElements: 0,
  last: false,
  first: true,
};

const initialState: ServiceState = {
  allServices: [],
  selectedService: null,
  servicesBySpeciality: [],
  loading: false,
  error: null,
  paginationAll: { ...defaultPagination },
  paginationSpec: { ...defaultPagination },
};

export const fetchAllServices = createAsyncThunk<
  Page<ServiceDTO>,
  { page?: number; size?: number },
  { rejectValue: string }
>('service/fetchAll', async ({ page, size }, thunkAPI) => {
  try {
    const data = await getAllService(page, size);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Lỗi khi lấy danh sách dịch vụ ' + e);
  }
});

export const fetchServiceById = createAsyncThunk<
  ServiceDTO,
  string,
  { rejectValue: string }
>('service/fetchById', async (id, thunkAPI) => {
  try {
    const data = await getServiceById(id);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Lỗi xảy ra khi lấy dịch vụ ' + id + e);
  }
});

export const fetchServiceBySpecialityId = createAsyncThunk<
  Page<ServiceDTO>,
  { id: string; page?: number; size?: number },
  { rejectValue: string }
>('service/fetchBySpecialityId', async ({ id, page, size }, thunkAPI) => {
  try {
    const data = await getServiceBySpecId(id, page, size);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(
      'Lỗi xảy ra khi lấy dịch vụ ở chuyên khoa ' + id + e
    );
  }
});

const ServiceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Builder for all service
      .addCase(fetchAllServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.allServices = action.payload.content;
        state.paginationAll = {
          page: action.payload.number,
          size: action.payload.size,
          totalPages: action.payload.totalPages,
          totalElements: action.payload.totalElements,
          first: action.payload.first,
          last: action.payload.last,
        };
      })
      .addCase(fetchAllServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })

      //Builder for fetch service by id
      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedService = action.payload;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })

      //Builder for fetch service by speciality
      .addCase(fetchServiceBySpecialityId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceBySpecialityId.fulfilled, (state, action) => {
        state.loading = false;
        state.servicesBySpeciality = action.payload.content;
        state.paginationSpec = {
          page: action.payload.number,
          size: action.payload.size,
          totalPages: action.payload.totalPages,
          totalElements: action.payload.totalElements,
          first: action.payload.first,
          last: action.payload.last,
        };
      })
      .addCase(fetchServiceBySpecialityId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export default ServiceSlice.reducer;
