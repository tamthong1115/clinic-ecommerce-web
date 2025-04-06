import React from 'react';
import './ProfileLayout.css';

const ProfileLayout: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }) => {
  return (
    <div className={'w-full min-h-screen my-5 relative'}>
      <div className={'w-full h-full relative flex  flex-col items-center'}>
        {children}
      </div>
    </div>
  );
};
export default ProfileLayout;
