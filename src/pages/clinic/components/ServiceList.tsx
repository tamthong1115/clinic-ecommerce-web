import { serviceInClinic } from '@/api/clinic/clinicTypes.ts';
import { AppDispatch, RootState } from '@/app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
  editStatusService,
  getService,
} from '@/features/clinic/clinicSlice.ts';
import { cn } from '@/lib/utils.ts';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type StatusSwitchProps = {
  service: serviceInClinic;
};

const StatusSwitch = ({ service }: StatusSwitchProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const clinicId =
    searchParams.get('clinicId') || 'a774500c-6dd1-4378-a5f9-ac91458a9b6f';

  const handleToggle = (checked: boolean) => {
    const newStatus = checked ? 'ACTIVE' : 'INACTIVE';
    dispatch(
      editStatusService({
        serviceId: service.serviceId,
        clinicId: clinicId,
        status: newStatus,
      })
    );
  };
  const isActive = service.status === 'ACTIVE';

  return (
    <div
      className={`flex items-center space-x-3`}
      onClick={(e) => e.stopPropagation()}
    >
      <Label
        htmlFor={`statusSwitch-${service.serviceId}`}
        className={cn(
          'text-sm font-semibold',
          isActive ? 'text-green-600' : 'text-red-600'
        )}
      >
        {isActive ? 'Đang hoạt động' : 'Ngưng'}
      </Label>
      <Switch
        id={`statusSwitch-${service.serviceId}`}
        checked={isActive}
        onCheckedChange={handleToggle}
      />
    </div>
  );
};

const ServiceListPages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const clinicId =
    searchParams.get('clinicId') || 'a774500c-6dd1-4378-a5f9-ac91458a9b6f';
  const {
    listServiceInClinic = [],
    loading = false,
    error = null,
  } = useSelector((state: RootState) => state.clinicByOwner || {});

  useEffect(() => {
    if (clinicId != null) {
      dispatch(getService(clinicId));
    }
  }, [dispatch, clinicId]);

  return (
    <div className={`bg-white rounded-xl min-h-screen p-6`}>
      <div className={`mx-20`}>
        {loading && <p className={`text-center`}>Loading...</p>}
        {error && <p className={`text-center text-red-500`}>{error}</p>}

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {listServiceInClinic.map((item, index) => (
            <div
              key={index}
              className={`bg-white group rounded-2xl transition cursor-pointer shadow-lg w-full p-5`}
            >
              <div>
                <span className={`text-xl font-semibold text-[#4fd1c5]`}>
                  {item.specialityName}
                </span>
              </div>
              <hr className="border-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 my-2" />
              <div className={`mb-3`}>
                <span className={`text-[1rem]`}>{item.serviceName}</span>
              </div>
              <StatusSwitch service={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceListPages;
