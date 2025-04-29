// import { useToast } from '../../../context/ToastContext.tsx';
// import { useMutation } from '@tanstack/react-query';
// import { useFormik } from 'formik';
// import { CreateClinicRequest } from '../../../api/dashboard/clinic/clinicTypes.ts';
//
// export default function CreateClinicForm() {
//   const { showToast } = useToast();
//
//   const mutation = useMutation({
//     onSuccess: () => {
//       showToast('Add new clinic successfully!', { type: 'success' });
//     },
//     onError: (error: unknown) => {
//       const errorMessage =
//         (
//           error as {
//             response?: { data?: { message?: string } };
//           }
//         )?.response?.data?.message || 'Failed to create new clinic';
//       showToast(errorMessage, { type: 'error' });
//     },
//   });
//
//   const formik = useFormik<CreateClinicRequest>({
//     initialValues: {
//       clinicName: '',
//     },
//   });
// }
