import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, TableCellsIcon, CalendarIcon, ViewColumnsIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleCloseSidebar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSidebarOpen(false);
  };

  return (
    <>
      <aside 
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="sidebar-header">
          <div className="sidebar-logo" aria-label="Dashboard logo">
            <div className="sidebar-logo-icon"></div>
            <h2 className="sidebar-logo-text">MyPanel</h2>
          </div>
          <button 
            className="sidebar-toggle" 
            onClick={handleCloseSidebar}
            aria-label="Close sidebar"
          >
            <XMarkIcon style={{ width: '1.5rem', height: '1.5rem' }} />
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink 
                to="/" 
                className="nav-link" 
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Dashboard"
              >
                <HomeIcon />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/orders" 
                className="nav-link" 
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Orders"
              >
                <TableCellsIcon />
                <span>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/calendar" 
                className="nav-link" 
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Calendar"
              >
                <CalendarIcon />
                <span>Calendar</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/kanban" 
                className="nav-link" 
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Kanban"
              >
                <ViewColumnsIcon />
                <span>Kanban</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      {isSidebarOpen && (
        <div 
          className="mobile-overlay" 
          onClick={handleCloseSidebar}
          role="button"
          aria-label="Close sidebar overlay"
        ></div>
      )}
    </>
  );
};

export default Sidebar;