import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = ({ setIsSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (e) => {
    toggleTheme(e.target.value);
  };

  const handleOpenSidebar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Opening sidebar'); // Debugging: remove after testing
    setIsSidebarOpen(true);
  };

  return (
    <header className="navbar">
      <button 
        className="sidebar-toggle" 
        onClick={handleOpenSidebar}
        aria-label="Open sidebar"
      >
        <Bars3Icon style={{ width: '1.5rem', height: '1.5rem' }} />
      </button>
      <select 
        value={theme} 
        onChange={handleThemeChange}
        aria-label="Select theme"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </header>
  );
};

export default Navbar;