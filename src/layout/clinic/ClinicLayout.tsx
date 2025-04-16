import React, { ReactNode } from 'react';
import ClinicSidebar from './ClinicSidebar';
import ClinicNavbar from './ClinicNavbar.tsx';

interface ClinicLayoutProps {
  children: ReactNode;
}

const ClinicLayout: React.FC<ClinicLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen">
      <div className="w-1/5 bg-indigo-400 p-0 m-0">
        <ClinicSidebar />
      </div>
      <div className="w-4/5 flex-1 flex-col">
        <div className="bg-white shadow-md w-[78vw]">
          <ClinicNavbar />
        </div>
        <div className="flex-1 bg-gray-100 p-6 w-[78vw]">{children}</div>
      </div>
    </div>
  );
};

export default ClinicLayout;
