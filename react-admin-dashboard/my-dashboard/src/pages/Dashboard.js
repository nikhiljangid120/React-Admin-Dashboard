import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { statsData, salesData, categoryData } from '../data/MockData';

const Dashboard = () => {
  return (
    <div className="page-content">
      <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>
      
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-card">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
            <p className={stat.change > 0 ? 'text-green-500' : 'text-red-500'}>
              {stat.change > 0 ? '+' : ''}{stat.change}% from last month
            </p>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <h3>Sales Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>Product Categories</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#2563eb">
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#2563eb', '#10b981', '#f59e0b', '#ef4444'][index % 4]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="activity-feed">
        <h3>Recent Activity</h3>
        <ul>
          <li>Order #1234 shipped - 2 hours ago</li>
          <li>New user registered - 5 hours ago</li>
          <li>Task "Design Review" completed - 1 day ago</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;