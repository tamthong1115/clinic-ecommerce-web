import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../app/store.ts';
import { useEffect, useState } from 'react';
import {
  fetchAllServices,
  fetchServiceBySpecialityId,
} from '../../features/public/serviceSlice.ts';
import { ServiceDTO } from '../../api/public/service/serviceTypes.ts';
import { fetchSpeciality } from '../../features/public/specialitySlice.ts';

const ServicePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const specialityId = searchParams.get('specialityId') || undefined;

  const {
    allServices = [],
    servicesBySpeciality = [],
    loading = false,
    error = null,
    paginationAll,
    paginationSpec,
  } = useSelector((state: RootState) => state.service || {});

  const { speciality = [] } = useSelector(
    (state: RootState) => state.serviceSpeciality || {}
  );

  const matchedSpeciality = speciality.find(
    (spec) => spec.specialityId === String(specialityId)
  );
  const pagination = specialityId ? paginationSpec : paginationAll;
  const ITEM_PER_PAGE = pagination.size;
  const totalPages = pagination.totalPages || 1;
  const [currentPage, setCurrentPage] = useState(pagination.page + 1);

  useEffect(() => {
    const pageParam = Number(currentPage - 1);
    if (specialityId) {
      dispatch(
        fetchServiceBySpecialityId({
          id: specialityId,
          page: pageParam,
          size: ITEM_PER_PAGE,
        })
      );
    } else {
      dispatch(fetchAllServices({ page: pageParam, size: ITEM_PER_PAGE }));
    }
  }, [dispatch, currentPage, specialityId]);

  useEffect(() => {
    if (!speciality || speciality.length === 0) {
      dispatch(fetchSpeciality({ page: 0, size: 100 }));
    }
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [specialityId]);

  const services: ServiceDTO[] = specialityId
    ? servicesBySpeciality
    : allServices;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {specialityId
          ? `Dịch vụ chuyên khoa: ${matchedSpeciality?.specialityName || '...'}`
          : 'Tất cả dịch vụ'}
      </h1>

      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500">Lỗi: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((svc) => (
          <div
            key={svc.serviceId}
            className="p-4 border rounded shadow hover:shadow-md transition group cursor-pointer"
          >
            <h2 className="font-semibold text-lg">{svc.serviceName}</h2>
            <p className="text-sm text-gray-600">{svc.specialityName}</p>
            <p className="mt-2">{svc.description}</p>
            <p className="mt-1 text-blue-600 font-medium">
              {svc.price.toLocaleString()} VNĐ
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicePage;
