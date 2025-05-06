import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store.ts';
import { updateClinicInformation } from '../../../features/clinic/clinicSlice.ts';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { ClinicDTO, clinicStatus } from '../../../api/clinic/clinicTypes.ts';
import { X } from 'lucide-react';

type PropModal = {
  isOpen: boolean;
  onClose: () => void;
  clinic: ClinicDTO;
};

export default function EditClinicManagementModal({
  isOpen,
  onClose,
  clinic,
}: PropModal) {
  const dispatch = useDispatch<AppDispatch>();
  const [clinicName, setClinicName] = useState(clinic.clinicName);
  const [clinicAddress, setClinicAddress] = useState(clinic.clinicAddress);
  const [clinicPhone, setClinicPhone] = useState(clinic.clinicPhone);
  const [description, setDescription] = useState(clinic.description || '');
  const [status, setStatus] = useState<clinicStatus>(
    clinic.status as clinicStatus
  );

  const [existingImages, setExistingImages] = useState<string[]>(
    clinic.images || []
  );
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImageFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveNewImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('clinicName', clinicName);
    formData.append('clinicAddress', clinicAddress);
    formData.append('clinicPhone', clinicPhone);
    formData.append('description', description);
    formData.append('status', status);

    // Append old images (still kept)
    existingImages.forEach((url) => {
      formData.append('image', url);
    });
    imageFiles.forEach((file) => {
      formData.append('file', file);
    });

    await dispatch(
      updateClinicInformation({ id: clinic.clinicId, data: formData })
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[500px] max-w-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">
              Cập nhật phòng khám
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-red-500">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Các field thông tin cơ bản */}
            <input
              name="clinicName"
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1"
            />
            <input
              name="clinicAddress"
              value={clinicAddress}
              onChange={(e) => setClinicAddress(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1"
            />
            <input
              name="clinicPhone"
              value={clinicPhone}
              onChange={(e) => setClinicPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1"
            />
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1"
            />

            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as clinicStatus)}
              className="w-full border px-3 py-2 rounded mt-1"
            >
              <option value="OPEN">OPEN</option>
              <option value="CLOSED">CLOSED</option>
            </select>

            {/* Hình ảnh mới */}
            <div>
              <label className="block font-medium mt-2">
                Danh sách hình ảnh
              </label>
              <div className="flex gap-2 mt-2 flex-wrap">
                {/* Ảnh từ backend */}
                {existingImages.map((url, index) => (
                  <div key={`existing-${index}`} className="relative">
                    <img
                      src={url}
                      alt="clinic"
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveExistingImage(index)}
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Ảnh mới từ local (preview) */}
                {imageFiles.map((file, index) => (
                  <div key={`new-${index}`} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveNewImage(index)}
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Input thêm ảnh */}
            <div>
              <label className="block font-medium mt-2">Thêm ảnh</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleAddImage}
                className="mt-2"
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Lưu
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
