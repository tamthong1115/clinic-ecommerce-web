import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchField: React.FC = () => {
  return (
    <div className="flex items-center w-auto max-w-sm rounded-xl h-1/3 bg-white px-4 py-2 border border-gray-400">
      <FiSearch className="text-gray-400 text-xl mr-2" />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchField;
