export const statsData = [
  { title: 'Total Revenue', value: '₹1,50,00,000', change: 12 },
  { title: 'New Orders', value: '2,500', change: 8 },
  { title: 'Customers', value: '15,000', change: 5 },
  { title: 'Pending Tasks', value: '45', change: -3 },
];

export const salesData = [
  { month: 'Jan', sales: 5000000 },
  { month: 'Feb', sales: 6000000 },
  { month: 'Mar', sales: 5500000 },
  { month: 'Apr', sales: 7000000 },
  { month: 'May', sales: 6500000 },
  { month: 'Jun', sales: 8000000 },
];

export const categoryData = [
  { name: 'Electronics', value: 35 },
  { name: 'Fashion', value: 25 },
  { name: 'Home Appliances', value: 20 },
  { name: 'Groceries', value: 20 },
];

export const ordersData = [
  { id: 'ORD001', customer: 'Amit Sharma', amount: 15000, status: 'Delivered', date: '2025-06-01' },
  { id: 'ORD002', customer: 'Priya Patel', amount: 25000, status: 'Processing', date: '2025-06-02' },
  { id: 'ORD003', customer: 'Rahul Gupta', amount: 8000, status: 'Cancelled', date: '2025-06-03' },
  { id: 'ORD004', customer: 'Sneha Reddy', amount: 35000, status: 'Delivered', date: '2025-06-04' },
  { id: 'ORD005', customer: 'Vikram Singh', amount: 12000, status: 'Processing', date: '2025-06-05' },
];

export const eventsData = [
  { id: '1', title: 'Diwali Campaign Meeting', start: '2025-06-10', city: 'Mumbai' },
  { id: '2', title: 'Product Launch Delhi', start: '2025-06-15', city: 'Delhi' },
  { id: '3', title: 'Inventory Audit', start: '2025-06-20', city: 'Bengaluru' },
];

export const tasksData = {
  todo: {
    name: 'To Do',
    items: [
      { id: 'task1', title: 'Update Website', description: 'Revamp homepage for Diwali sale' },
      { id: 'task2', title: 'Contact Suppliers', description: 'Negotiate rates for bulk orders' },
    ],
  },
  inProgress: {
    name: 'In Progress',
    items: [
      { id: 'task3', title: 'Marketing Plan', description: 'Draft social media campaign for Mumbai' },
    ],
  },
  done: {
    name: 'Done',
    items: [
      { id: 'task4', title: 'Store Setup', description: 'Completed new store opening in Chennai' },
    ],
  },
};