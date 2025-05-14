import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllOwner } from '@/api/clinic/clinicServices.ts';

interface Owner {
  ownerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profileImageUrl?: string | null;
}

interface PaginationMeta {
  totalPages: number;
  number: number;
}

const ClinicOwnerManage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || '0';
  const size = searchParams.get('size') || '10';
  const sortBy = searchParams.get('sortBy') || 'lastName';
  const rawDirection = searchParams.get('direction');
  const direction: 'asc' | 'desc' = rawDirection === 'desc' ? 'desc' : 'asc';

  const [listOwner, setListOwner] = useState<Owner[]>([]);
  const [pagination, setPagination] = useState<PaginationMeta>({
    totalPages: 1,
    number: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllOwner({
          page: page ? +page : undefined,
          size: size ? +size : undefined,
          sortBy,
          direction,
        });
        setListOwner(response?.data?.content || []);
        setPagination({
          totalPages: response?.data?.totalPages || 1,
          number: response?.data?.number || 0,
        });
      } catch (error) {
        console.error('Failed to fetch clinic owners:', error);
      }
    };

    fetchData();
  }, [page, size, sortBy, direction]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: newPage.toString(),
      size,
      sortBy,
      direction,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Clinic Owners</h1>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded">
          Add Owner
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <span className="text-sm font-medium text-gray-700">Owner Table</span>
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring focus:ring-teal-200"
          />
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-2">Avatar</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {listOwner.map((owner) => (
              <tr key={owner.ownerId} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">
                  {owner.profileImageUrl ? (
                    <img
                      src={owner.profileImageUrl}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                      {(owner.firstName?.charAt(0) || '') +
                        (owner.lastName?.charAt(0) || '')}
                    </div>
                  )}
                </td>
                <td className="px-4 py-2">
                  {owner.firstName} {owner.lastName}
                </td>
                <td className="px-4 py-2">{owner.email}</td>
                <td className="px-4 py-2">{owner.phoneNumber}</td>
                <td className="px-4 py-2">
                  <button className="bg-teal-400 hover:bg-teal-600 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 py-4">
          <button
            disabled={pagination.number === 0}
            onClick={() => handlePageChange(pagination.number - 1)}
            className="px-3 py-1 rounded bg-gray-200 text-sm disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {pagination.number + 1} of {pagination.totalPages}
          </span>
          <button
            disabled={pagination.number >= pagination.totalPages - 1}
            onClick={() => handlePageChange(pagination.number + 1)}
            className="px-3 py-1 rounded bg-gray-200 text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicOwnerManage;
