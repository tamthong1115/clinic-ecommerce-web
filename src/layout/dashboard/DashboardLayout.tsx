import React, { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar.tsx';
import DashboardNavbar from './DashboardNavbar.tsx';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen bg-[#f7fafc]">
      <div className="w-1/6 fixed top-0 left-0 h-screen z-10">
        <DashboardSidebar />
      </div>

      <div className="ml-[16.666667%] w-5/6 flex flex-col">
        <div className="fixed top-0 left-[16.666667%] w-5/6 z-10">
          <DashboardNavbar />
        </div>

        <div className="mt-[5rem] h-[calc(100vh-64px)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
