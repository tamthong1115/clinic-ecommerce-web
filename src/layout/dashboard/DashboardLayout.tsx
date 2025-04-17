import React, { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar.tsx';
import DashboardNavbar from './DashboardNavbar.tsx';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#f7fafc] flex min-h-screen w-screen">
      <div className="w-1/5 p-0 m-0">
        <DashboardSidebar />
      </div>
      <div className="w-4/5 flex-1 flex-col">
        <div className="bg-[#f7fafc] w-[78vw]">
          <DashboardNavbar />
        </div>
        <div className="flex-1 p-6 w-[78vw] bg-red-500">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
