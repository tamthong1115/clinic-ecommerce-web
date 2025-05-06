import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { ClinicDTO } from '../../api/clinic/clinicTypes.ts';
import { useEffect, useState } from 'react';
import { fetchClinicByOwner } from '../../features/clinic/clinicSlice.ts';
import EditClinicManagementModal from './Clinic/EditClinicManagement.tsx';

const ClinicListPages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    listClinic = [],
    loading = false,
    error = null,
  } = useSelector((state: RootState) => state.clinicByOwner || {});

  const [openModal, setOpenModal] = useState(false);

  const listClinics: ClinicDTO[] = listClinic;
  const [selectedClinicLocal, setSelectedClinicLocal] =
    useState<ClinicDTO | null>(null);

  useEffect(() => {
    dispatch(fetchClinicByOwner());
  }, [dispatch]);

  const handleEditClick = (clinic: ClinicDTO) => {
    setSelectedClinicLocal(clinic);
    setOpenModal(true);
  };

  return (
    <>
      <div className={`bg-white rounded-xl h-dvh p-6`}>
        <div className={`mx-20`}>
          {loading && <p className={`text-center`}>Loading...</p>}
          {error && <p className={`text-center text-red-500`}>{error}</p>}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}
          >
            {listClinics.map((item: ClinicDTO, index: number) => (
              <div
                key={index}
                className={`bg-white group rounded-2xl transition cursor-pointer shadow-xl w-full pb-5`}
                onClick={() => handleEditClick(item)}
              >
                <div className={`items-center`}>
                  <img
                    src={item.images?.[0] || '/placeholder.png'}
                    alt={item.clinicName}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="px-4 mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/icon/icon-name-tag.png"
                      alt="Tên phòng khám"
                      className="w-6 h-6"
                    />
                    <span className="text-[1rem] font-semibold uppercase text-[#4fd1c5]">
                      {item.clinicName}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <img
                      src="/icon/icon-location.png"
                      alt="Địa chỉ"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <span className="text-[0.85rem] font-text break-words">
                      {item.clinicAddress}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="/icon/icon-status.png"
                      alt="Trạng thái"
                      className="w-6 h-6"
                    />
                    <div
                      className={`px-3 py-1 rounded-lg border-2 font-medium
        ${item.status === 'OPEN' ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
                    >
                      {item.status === 'OPEN' ? 'Đang hoạt động' : 'Tạm đóng'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedClinicLocal && openModal && (
          <EditClinicManagementModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            clinic={selectedClinicLocal}
          />
        )}
      </div>
    </>
  );
};

export default ClinicListPages;
