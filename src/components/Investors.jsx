import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, TrendingUp, Eye, Leaf, DollarSign, AlertCircle } from 'lucide-react';
import './Investor.css'
// Sample data
const performanceData = [
  { month: 'Jan', value: 3000 },
  { month: 'Feb', value: 3500 },
  { month: 'Mar', value: 4200 },
  { month: 'Apr', value: 4800 },
  { month: 'May', value: 5100 },
  { month: 'Jun', value: 5900 },
];

const notifications = [
  { id: 1, message: "New impact report available for Project Alpha", type: "report" },
  { id: 2, message: "Quarterly dividend payment processed", type: "payment" },
  { id: 3, message: "Project Beta reached carbon offset milestone", type: "impact" },
];

// Custom Card Component
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

// Custom Button Component
const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Badge Component
const Badge = ({ children, className = "" }) => (
  <span className={`px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600 ${className}`}>
    {children}
  </span>
);

const InvestorDashboard = React.forwardRef(({ isDarkMode }, ref) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState('light');
  const [impactScore, setImpactScore] = useState(0);
  const [totalImpactValue, setTotalImpactValue] = useState(0);

  const isLight = theme === 'light';

  // Animated increment for Impact Score and Total Impact Value
  useEffect(() => {
    const incrementImpactScore = () => {
      let start = 0;
      const end = 89.5; // Target impact score
      const duration = 2; // seconds
      const increment = end / (duration * 60); // increment per frame
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setImpactScore(end);
        } else {
          setImpactScore(Math.round(start));
        }
      }, 1000 / 60); // 60 FPS
    };

    const incrementTotalImpactValue = () => {
      let start = 0;
      const end = 127500; // Target total impact value
      const duration = 3; // seconds
      const increment = end / (duration * 60); // increment per frame
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setTotalImpactValue(end);
        } else {
          setTotalImpactValue(Math.round(start));
        }
      }, 1000 / 60); // 60 FPS
    };

    incrementImpactScore();
    incrementTotalImpactValue();
  }, []);

  return (
    <div 
    id="dashboard" 
    ref={ref} 
    className={`min-h-screen ${
        isDarkMode 
        ? 'custom-gradient-dark' 
        : 'custom-gradient-light'
    } p-6 transition-all duration-300`}
    >
<style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Jacques+Francois&display=swap');
        .jacques-francois {
          font-family: 'Jacques Francois', serif;
        }

        .card-hover {
          transition: transform 0.2s ease-in-out;
        }

        .card-hover:hover {
          transform: translateY(-4px);
        }

        .notification-item {
          transition: all 0.2s ease;
        }

        .notification-item:hover {
          background-color: ${isLight ? '#f8fafc' : '#333'};
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className={`jacques-francois text-4xl mt-20 mb-8 ${isLight ? 'text-white' : 'text-gray-800'}`}>Investor Dashboard</h1>


        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div whileHover={{ scale: 1.02 }} className="card-hover">
            <Card className={isLight ? 'bg-white' : 'bg-gray-800'}>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-5 w-5 text-green-500" />
                <h2 className={`jacques-francois text-xl ${isLight ? 'text-gray-800' : 'text-white'}`}>Total Portfolio Value</h2>
              </div>
              <p className={`text-3xl font-bold ${isLight ? 'text-gray-700' : 'text-white'}`}>
                ${totalImpactValue}
              </p>
              <p className="text-green-500 text-sm mt-1">+12.3% this month</p>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="card-hover">
            <Card className={isLight ? 'bg-white' : 'bg-gray-800'}>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <h2 className={`jacques-francois text-xl ${isLight ? 'text-gray-800' : 'text-white'}`}>Active Investments</h2>
              </div>
              <p className={`text-3xl font-bold ${isLight ? 'text-gray-700' : 'text-white'}`}>7</p>
              <p className="text-blue-500 text-sm mt-1">Across 4 sectors</p>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="card-hover">
            <Card className={isLight ? 'bg-white' : 'bg-gray-800'}>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-emerald-500" />
                <h2 className={`jacques-francois text-xl ${isLight ? 'text-gray-800' : 'text-white'}`}>Impact Score</h2>
              </div>
              <p className={`text-3xl font-bold ${isLight ? 'text-gray-700' : 'text-white'}`}>{impactScore}</p>
              <p className="text-emerald-500 text-sm mt-1">Top 10% of investors</p>
            </Card>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className={isLight ? 'bg-white' : 'bg-gray-800'}>
              <h2 className={`jacques-francois text-xl ${isLight ? 'text-gray-800' : 'text-white'} mb-6`}>Portfolio Performance</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e2e8f0' : '#444'} />
                    <XAxis dataKey="month" stroke={isLight ? '#64748b' : '#888'} />
                    <YAxis stroke={isLight ? '#64748b' : '#888'} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isLight ? 'white' : '#444',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      dot={{ fill: '#2563eb', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#2563eb' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Notifications Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className={isLight ? 'bg-white' : 'bg-gray-800'}>
              <div className="flex items-center gap-2 mb-6">
                <Bell className="h-5 w-5 text-slate-600" />
                <h2 className={`jacques-francois text-xl ${isLight ? 'text-gray-800' : 'text-white'}`}>Notifications</h2>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`notification-item flex items-start gap-3 p-3 rounded-lg border ${isLight ? 'border-gray-300' : 'border-gray-700'}`}
                  >
                    <div className={`flex-shrink-0 rounded-full p-2 ${isLight ? 'bg-green-100 text-green-500' : 'bg-gray-600 text-gray-200'}`}>
                      <div className="h-6 w-6">
                        <IconSelector type={notification.type} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${isLight ? 'text-gray-800' : 'text-white'}`}>{notification.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

const IconSelector = ({ type }) => {
  switch (type) {
    case "report":
      return <AlertCircle className="h-5 w-5" />;
    case "payment":
      return <DollarSign className="h-5 w-5" />;
    case "impact":
      return <Leaf className="h-5 w-5" />;
    default:
      return null;
  }
};

export default InvestorDashboard;
