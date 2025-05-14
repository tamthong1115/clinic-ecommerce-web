import { useToast } from '../../../context/ToastContext.tsx';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
// import { useState } from 'react';
import { CreateClinicRequest } from '../../../api/clinic/clinicTypes.ts';
import { createNewClinic } from '@/api/clinic/clinicServices.ts';

export default function CreateClinicForm() {
  const { showToast } = useToast();
  // const [fileList, setFileList] = useState<File[]>([]);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => createNewClinic(formData),
    onSuccess: () => {
      showToast('Thêm phòng khám thành công!', { type: 'success' });
      formik.resetForm();
      // setFileList([]);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (
          error as {
            response?: { data?: { message?: string } };
          }
        )?.response?.data?.message || 'Không thể tạo phòng khám';
      showToast(errorMessage, { type: 'error' });
    },
  });

  const formik = useFormik<CreateClinicRequest>({
    initialValues: {
      clinicName: '',
      clinicAddress: '',
      clinicPhone: '',
      description: '',
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('clinicName', values.clinicName);
      formData.append('clinicAddress', values.clinicAddress);
      formData.append('clinicPhone', values.clinicPhone);
      formData.append('description', values.description || '');

      // fileList.forEach((file) => {
      //   formData.append('file', file); // nhiều file cùng key 'file'
      // });

      mutation.mutate(formData);
    },
  });

  return (
    <>
      <h2 className={`p-4 font-semibold text-xl text-center`}>
        Nhập thông tin để tạo phòng khám mới
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4 mx-auto">
        <div>
          <label className="block font-medium mb-1">Tên phòng khám</label>
          <input
            type="text"
            name="clinicName"
            onChange={formik.handleChange}
            value={formik.values.clinicName}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Địa chỉ</label>
          <input
            type="text"
            name="clinicAddress"
            onChange={formik.handleChange}
            value={formik.values.clinicAddress}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Số điện thoại</label>
          <input
            type="text"
            name="clinicPhone"
            onChange={formik.handleChange}
            value={formik.values.clinicPhone}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mô tả</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/*<div>*/}
        {/*  <label className="block font-medium mb-1">Hình ảnh</label>*/}
        {/*  <input*/}
        {/*    type="file"*/}
        {/*    multiple*/}
        {/*    accept="image/*"*/}
        {/*    onChange={(e) => {*/}
        {/*      if (e.target.files) {*/}
        {/*        setFileList(Array.from(e.target.files));*/}
        {/*      }*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</div>*/}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Đang xử lý...' : 'Tạo phòng khám'}
        </button>
      </form>
    </>
  );
}
