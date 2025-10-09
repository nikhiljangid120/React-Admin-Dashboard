import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/Dashboard';
import OrdersPage from './pages/Orders';
import CalendarPage from './pages/Calendar';
import KanbanPage from './pages/Kanban';
import './App.css';
import './styles.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
    console.log('Theme updated:', theme); 
  }, [theme]);

  useEffect(() => {
    
    const handleResize = () => {
      console.log('Window resized or orientation changed, width:', window.innerWidth); 
      if (isSidebarOpen && window.innerWidth < 768 && window.orientation === 90) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isSidebarOpen]);

  return (
    <div className="app-container">
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div 
        className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}
        style={{ 
          paddingLeft: isSidebarOpen ? (window.orientation === 90 ? '14rem' : '16rem') : '0'
        }}
      >
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;