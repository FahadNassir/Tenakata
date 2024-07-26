import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Sidenav = () => {
  const [small, setSmall] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {small ? (
        <div className="dropdown absolute top-6 left-4">
          <button> 
            <i className="bx bx-menu text-2xl"></i>
          </button>
          <div className="dropdown-content">
            <a>Dashboard</a>
            <a>Investor Mgt</a>
            <a>Document Mgt</a>
            <a>communication</a>
            <a>Reports</a>
            <a>Settings</a>
            <a>Support</a>
          </div>
        </div>
      ) : (
        <div className="bg-buttonBlue text-white w-fit min-h-screen flex flex-col p-5">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <Logo />
          </div>
          <ul className="flex flex-col gap-6 text-sm ml-1 mt-24">
            <li><i className="bx bxs-dashboard"></i> Dashboard</li>
            <li><i className="bx bx-clipboard"></i> Investor Mgt</li>
            <li><i className="bx bxs-folder"></i> Document Mgt</li>
            <li><i className="bx bxs-user"></i> Communication</li>
            <li><i className="bx bx-folder-open"></i> Reports</li>
            <li><i className="bx bx-cog"></i> Settings</li>
            <li><i className="bx bx-support"></i> Support</li>
          </ul>
          <div className='absolute -bottom-80 flex items-center gap-1 cursor-pointer' onClick={() => {navigate("/")}}>
          <i className='bx bx-log-out'></i>Log Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
