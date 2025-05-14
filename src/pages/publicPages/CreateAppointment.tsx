import { useMutation } from '@tanstack/react-query';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createAppointment } from '@/api/appointment/appointmentServices.ts';
import {
  AppointmentCreateDTO,
  AppointmentStatus,
} from '@/api/appointment/appointmentTypes.ts';
import { useToast } from '@/context/ToastContext.tsx';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.tsx';

const AppointmentSchema = Yup.object().shape({
  doctorId: Yup.string().required('Doctor is required'),
  patientId: Yup.string().required('Patient is required'),
  clinicId: Yup.string().required('Clinic is required'),
  appointmentDate: Yup.string().required('Date is required'),
  startTime: Yup.string().required('Start time is required'),
  endTime: Yup.string().required('End time is required'),
  status: Yup.string()
    .oneOf(['PENDING', 'CONFIRMED', 'CANCELLED'])
    .required('Status is required'),
});

const CreateAppointment = () => {
  const { showToast } = useToast();
  const location = useLocation();
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () =>
      showToast('Appointment created successfully!', { type: 'success' }),
    onError: (error: unknown) => {
      const message =
        error && typeof error === 'object' && 'message' in error
          ? (error as { message?: string }).message
          : 'Failed to create appointment';
      showToast(message || 'Failed to create appointment', {
        type: 'error',
      });
    },
  });

  const prefill = location.state || {};
  const doctor = prefill.doctor; // doctor object
  const service = prefill.service; // service object
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Appointment
        </h2>

        {/* Display doctor and service info if available */}
        {(doctor || service) && (
          <div className="mb-6 p-4 bg-gray-50 rounded border">
            {doctor && (
              <div className="mb-2">
                <div className="font-semibold text-emerald-700">
                  Bác sĩ: {doctor.firstName} {doctor.lastName}
                </div>
                <div className="text-sm text-gray-600">{doctor.education}</div>
              </div>
            )}
            {service && (
              <div>
                <div className="font-semibold text-blue-700">
                  Dịch vụ: {service.name || service.serviceName}
                </div>
                <div className="text-sm text-gray-600">
                  Giá: {service.price?.toLocaleString()} VNĐ
                </div>
              </div>
            )}
          </div>
        )}
        <Formik
          enableReinitialize
          initialValues={{
            doctorId: prefill.doctorId || '',
            patientId: user?.id || '',
            clinicId: prefill.clinicId || '',
            appointmentDate: prefill.appointmentDate || '',
            startTime: prefill.startTime || '',
            endTime: prefill.endTime || '',
            status: 'PENDING' as AppointmentStatus,
          }}
          validationSchema={AppointmentSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            mutation.mutate(values as AppointmentCreateDTO, {
              onSuccess: () => resetForm(),
              onSettled: () => setSubmitting(false),
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* <div>
                <label className="block font-medium mb-1">Doctor ID</label>
                <Field
                  name="doctorId"
                  className="w-full border px-3 py-2 rounded"
                  readOnly={!!prefill.doctorId}
                />
                <ErrorMessage
                  name="doctorId"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Patient ID</label>
                <Field
                  name="patientId"
                  className="w-full border px-3 py-2 rounded"
                />
                <ErrorMessage
                  name="patientId"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div> */}
              {/* <div>
                <label className="block font-medium mb-1">Clinic ID</label>
                <Field
                  name="clinicId"
                  className="w-full border px-3 py-2 rounded"
                  readOnly={!!prefill.clinicId}
                />
                <ErrorMessage
                  name="clinicId"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div> */}
              <div>
                <label className="block font-medium mb-1">
                  Appointment Date
                </label>
                <Field
                  name="appointmentDate"
                  type="date"
                  className="w-full border px-3 py-2 rounded"
                  readOnly={!!prefill.appointmentDate}
                />
                <ErrorMessage
                  name="appointmentDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium mb-1">Start Time</label>
                  <Field
                    name="startTime"
                    type="time"
                    className="w-full border px-3 py-2 rounded"
                    readOnly={!!prefill.startTime}
                  />
                  <ErrorMessage
                    name="startTime"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium mb-1">End Time</label>
                  <Field
                    name="endTime"
                    type="time"
                    className="w-full border px-3 py-2 rounded"
                    readOnly={!!prefill.endTime}
                  />
                  <ErrorMessage
                    name="endTime"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Status</label>
                <Field
                  as="select"
                  name="status"
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="PENDING">Pending</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="CANCELLED">Cancelled</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
                disabled={isSubmitting || mutation.isPending}
              >
                {isSubmitting || mutation.isPending
                  ? 'Creating...'
                  : 'Create Appointment'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateAppointment;
