// import React, { useEffect } from 'react';

// import NavbarOwner from '../../components/owner/NavbarOwner.jsx';
// import Sidebar from '../../components/owner/Sidebar.jsx';
// import { Outlet } from 'react-router-dom';
// import { useAppContext } from '../../context/AppContext.jsx';

// const Layout = () => {
//   const { isOwner, navigate } = useAppContext();
//   useEffect(() => {
//     if (!isOwner) {
//       navigate('/');
//     }
//   }, [isOwner]);
//   return (
//     <div className="flex flex-col">
//       <NavbarOwner />
//       <div className="flex">
//         <Sidebar />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React, { useEffect } from 'react';
import NavbarOwner from '../../components/owner/NavbarOwner.jsx';
import Sidebar from '../../components/owner/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.jsx';

const Layout = () => {
  const { isOwner, navigate } = useAppContext();

  useEffect(() => {
    if (!isOwner) {
      navigate('/');
    }
  }, [isOwner]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOwner />
      <div className="flex flex-1">
        <Sidebar />
        {/* Main content — pb-20 on mobile to clear bottom nav */}
        <div className="flex-1 overflow-x-hidden pb-20 md:pb-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;