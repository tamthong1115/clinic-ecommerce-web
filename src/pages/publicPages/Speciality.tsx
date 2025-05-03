import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../app/store.ts';
import { fetchSpeciality } from '../../features/specialitySlice.ts';
import { SpecialityDTO } from '../../api/public/speciality/specialityTypes.ts';
import { Link } from 'react-router-dom';
import PublicPaths from '../../routes/public/pathPublic.ts';

const ITEM_PER_PAGE = 12;
const SpecialityPages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    speciality = [],
    loading = false,
    error = null,
  } = useSelector((state: RootState) => state.serviceSpeciality || {});
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(fetchSpeciality());
  }, [dispatch]);

  // console.log('🔎 speciality:', speciality);
  // console.log('🔎 isArray:', Array.isArray(speciality));
  // console.log('🔎 type of speciality:', typeof speciality);
  // console.log('🔎 length:', speciality.length);

  const totalPages = Math.ceil(speciality.length / ITEM_PER_PAGE);
  const currentItems = speciality.slice(
    (currentPage - 1) * ITEM_PER_PAGE,
    currentPage * ITEM_PER_PAGE
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

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
      <div className="mx-40 my-4">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item: SpecialityDTO, index: number) => (
            <Link
              to={PublicPaths.SERVICE_BY_SPECIALITY(item.specialityId)}
              key={index}
              className="bg-[#fafafa] group rounded-md transition cursor-pointer"
            >
              <div className="p-6 flex items-center gap-4">
                <div
                  className="w-20 h-20 bg-[#32c1ce] rounded-md flex items-center justify-center
        group-hover:shadow-[0_12px_10px_rgba(0,0,0,0.4)] transition duration-500"
                >
                  <img
                    src={item.specialityImageUrl || '/placeholder.png'}
                    alt={item.specialityName}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
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
