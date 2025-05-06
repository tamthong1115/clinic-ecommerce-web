import {
  ClinicDTO,
  clinicServiceDTO,
  clinicServiceRequest,
  clinicStatus,
  serviceInClinic,
  UpdateClinicRequest,
} from '../../api/clinic/clinicTypes.ts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addNewService,
  findClinicByOwner,
  getServiceInClinic,
  setStatusForService,
  updateClinicInfor,
  updateStatusClinic,
} from '../../api/clinic/clinicServices.ts';
import { ServiceDTO } from '../../api/public/service/serviceTypes.ts';

interface ClinicByOwnerState {
  listClinic: ClinicDTO[];
  selectedClinic: ClinicDTO | null;
  listServiceInClinic: serviceInClinic[];
  selectedService: ServiceDTO | null;
  loading: boolean;
  error: string | null;
}

const initialState: ClinicByOwnerState = {
  listClinic: [],
  selectedClinic: null,
  listServiceInClinic: [],
  selectedService: null,
  loading: false,
  error: null,
};

export const fetchClinicByOwner = createAsyncThunk<
  ClinicDTO[],
  void,
  { rejectValue: string }
>('clinic/fetchByOwner', async (_, thunkAPI) => {
  try {
    const data = await findClinicByOwner();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('\n' + e);
  }
});

export const updateClinicInformation = createAsyncThunk<
  ClinicDTO,
  { id: string; data: FormData },
  { rejectValue: string }
>('clinic/updateInfor', async ({ id, data }, thunkAPI) => {
  try {
    const result = await updateClinicInfor(id, data);
    return result;
  } catch (e) {
    return thunkAPI.rejectWithValue('\n' + e);
  }
});

export const updateStatus = createAsyncThunk<
  string,
  { id: string; request: UpdateClinicRequest },
  { rejectValue: string }
>('clinic/updateStatus', async ({ id, request }, thunkAPI) => {
  try {
    const data = await updateStatusClinic(id, request);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('\n' + e);
  }
});

export const addService = createAsyncThunk<
  clinicServiceDTO,
  clinicServiceRequest,
  { rejectValue: string }
>('clinic/addService', async (request, thunkAPI) => {
  try {
    const data = await addNewService(request);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('\n' + e);
  }
});

export const editStatusService = createAsyncThunk<
  string,
  clinicServiceRequest,
  { rejectValue: string }
>('clinic/updateServiceStatus', async (request, thunkAPI) => {
  try {
    const data = await setStatusForService(request);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('\n' + e);
  }
});

export const getService = createAsyncThunk<
  serviceInClinic[],
  string,
  { rejectValue: string }
>('clinic/fetchService', async (id, thunkAPI) => {
  try {
    const data = await getServiceInClinic(id);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('\n ' + e);
  }
});

const ClinicOwnerSlice = createSlice({
  name: 'clinicByOwner',
  initialState,
  reducers: {
    setSelectedClinic: (state, action) => {
      state.selectedClinic = action.payload;
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Get list clinic infor
      .addCase(fetchClinicByOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClinicByOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.listClinic = action.payload;
      })
      .addCase(fetchClinicByOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Lỗi khi tải danh sách phòng khám';
      })

      // Update clinic information
      .addCase(updateClinicInformation.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.listClinic.findIndex(
          (c) => c.clinicId === updated.clinicId
        );
        if (index !== -1) {
          state.listClinic[index] = updated;
        }
        if (state.selectedClinic?.clinicId === updated.clinicId) {
          state.selectedClinic = updated;
        }
      })

      // Update clinic status
      .addCase(updateStatus.fulfilled, (state, action) => {
        const updatedId = action.meta.arg.id;
        const updatedStatus = action.meta.arg.request.status;
        const clinic = state.listClinic.find((c) => c.clinicId === updatedId);
        if (clinic) clinic.status = updatedStatus as clinicStatus;
        if (
          state.selectedClinic?.clinicId === updatedId &&
          state.selectedClinic
        ) {
          state.selectedClinic.status = updatedStatus as clinicStatus;
        }
      })

      //Get Service
      .addCase(getService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.listServiceInClinic = action.payload;
        state.loading = false;
      })
      .addCase(getService.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || 'Có lỗi xảy ra khi tải danh sách dịch vụ !';
      })

      //Add service
      .addCase(addService.fulfilled, (state, action) => {
        const newService = action.payload;

        const mapped: serviceInClinic = {
          serviceId: newService.serviceId,
          clinicId: newService.clinicId,
          serviceName: state.selectedService?.serviceName || 'unknow service',
          clinicName: state.selectedClinic?.clinicName || 'unknow clinic',
        };

        if (!state.listServiceInClinic) state.listServiceInClinic = [];
        state.listServiceInClinic.push(mapped);
      })

      //Edit status of service
      .addCase(editStatusService.fulfilled, (state, action) => {
        const updated = action.meta.arg;
        const index = state.listServiceInClinic.findIndex(
          (svc) =>
            svc.clinicId === updated.clinicId &&
            svc.serviceId === updated.serviceId
        );
        if (index !== -1) {
          state.listServiceInClinic[index].status = updated.status;
        }
      });
  },
});

export default ClinicOwnerSlice.reducer;
