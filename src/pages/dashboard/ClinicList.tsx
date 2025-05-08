import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { ClinicDTO, clinicStatus } from '../../api/clinic/clinicTypes.ts';
import { useEffect, useState } from 'react';
import {
  fetchClinicByOwner,
  updateStatus,
} from '../../features/clinic/clinicSlice.ts';
import EditClinicManagementModal from './Clinic/EditClinicManagement.tsx';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils.ts';
import { Link } from 'react-router-dom';
import { DashboardPaths } from '@/routes/dashboard/pathClinic.ts';

type StatusSwitchProps = {
  clinic: ClinicDTO;
};

const StatusSwitch = ({ clinic }: StatusSwitchProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (checked: boolean) => {
    const newStatus: clinicStatus = checked ? 'OPEN' : 'CLOSED';
    dispatch(
      updateStatus({
        id: clinic.clinicId,
        request: { status: newStatus },
      })
    );
  };
  const isOpen = clinic.status === 'OPEN';

  return (
    <div
      className="flex items-center space-x-3"
      onClick={(e) => e.stopPropagation()}
    >
      <Label
        htmlFor={`statusSwitch-${clinic.clinicId}`}
        className={cn(
          'text-sm font-semibold',
          isOpen ? 'text-green-600' : 'text-red-600'
        )}
      >
        {isOpen ? 'Đang hoạt động' : 'Tạm đóng'}
      </Label>
      <Switch
        id={`statusSwitch-${clinic.clinicId}`}
        checked={isOpen}
        onCheckedChange={handleToggle}
      />
    </div>
  );
};

const ClinicListPages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    listClinic = [],
    loading = false,
    error = null,
  } = useSelector((state: RootState) => state.clinicByOwner || {});

  const [openModal, setOpenModal] = useState(false);
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
    <div className="bg-white rounded-xl min-h-screen p-6">
      <div className="mx-20">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listClinic.map((item, index) => (
            <div
              key={index}
              className="bg-white group rounded-2xl transition cursor-pointer shadow-xl w-full pb-5"
              onClick={() => handleEditClick(item)}
            >
              <img
                src={item.images?.[0] || '/placeholder.png'}
                alt={item.clinicName}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

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
                  <StatusSwitch clinic={item} />
                </div>
                <Link
                  to={DashboardPaths.LIST_SERVICE_CLINIC_PATH(item.clinicId)}
                  className={`flex items-center gap-2`}
                >
                  <img className={`w-6 h-6`} src="/icon/icon-list.png" alt="" />
                  <span className={`text-xs hover:underline`}>
                    View all service
                  </span>
                </Link>
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
  );
};

export default ClinicListPages;
