import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../app/store.ts';
import { fetchSpeciality } from '../../features/public/specialitySlice.ts';
import { SpecialityDTO } from '../../api/public/speciality/specialityTypes.ts';
import { Link } from 'react-router-dom';
import PublicPaths from '../../routes/public/pathPublic.ts';

const SpecialityPages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    speciality = [],
    loading = false,
    error = null,
    pagination,
  } = useSelector((state: RootState) => state.serviceSpeciality || {});

  const currentItems: SpecialityDTO[] = speciality;

  const ITEM_PER_PAGE = pagination.size;
  const totalPages = pagination.totalPages;
  const [currentPage, setCurrentPage] = useState(pagination.page + 1);

  useEffect(() => {
    const pageParam = currentPage - 1;
    dispatch(fetchSpeciality({ page: pageParam, size: ITEM_PER_PAGE }));
  }, [dispatch, currentPage, ITEM_PER_PAGE]);

  // console.log('🔎 speciality:', speciality);
  // console.log('🔎 isArray:', Array.isArray(speciality));
  // console.log('🔎 type of speciality:', typeof speciality);
  // console.log('🔎 length:', speciality.length);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className={'my-20 text-center '}>
        <h2 className={'font-semibold font-title text-2xl text-[#015259]'}>
          <span
            className={
              'p-6 bg-[#ebfcfd] rounded-xl border-b-2 border-[#0aaab8]'
            }
          >
            Chuyên Khoa
          </span>
        </h2>
      </div>
      <div className="w-full my-4">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(6,1fr)] gap-y-4 gap-x-2 p-2 sm:p-4 lg:p-6">
          {currentItems.map((item: SpecialityDTO, index: number) => (
            <Link
              to={PublicPaths.SERVICE_BY_SPECIALITY(item.specialityId)}
              key={index}
              className="bg-gray-300 group rounded-md transition cursor-pointer"
            >
              <div className="w-full h-full flex justify-center items-center gap-2">
                <div
                  className="w-20 h-full bg-[#32c1ce] rounded-md flex flex-row items-center justify-center
        group-hover:shadow-[0_12px_10px_rgba(0,0,0,0.4)] transition duration-500"
                >
                  <img
                    src={item.specialityImageUrl || '/placeholder.png'}
                    alt={item.specialityName}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className={'w-full h-full'}>
                  <h3 className="text-lg font-semibold mb-2 uppercase text-cyan-700">
                    {item.specialityName}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.specialityDescription ||
                      'Thông tin đang được cập nhật...'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 border rounded-md text-sm hover:bg-cyan-500 hover:text-white transition ${
                currentPage === i + 1
                  ? 'bg-cyan-600 text-white'
                  : 'bg-white text-cyan-600 border-cyan-600'
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default SpecialityPages;
