import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [pendingOrgs, setPendingOrgs] = useState([]);
  const [drives, setDrives] = useState([]);
  const [alert, setAlert] = useState(null);

  // Dummy stats until backend supports them
  const [userGrowth] = useState([
    { month: "Jan", users: 20 },
    { month: "Feb", users: 35 },
    { month: "Mar", users: 50 },
    { month: "Apr", users: 75 },
  ]);

  const [donations] = useState([
    { month: "Jan", drives: 5 },
    { month: "Feb", drives: 8 },
    { month: "Mar", drives: 12 },
    { month: "Apr", drives: 10 },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://TracyN.pythonanywhere.com/api/get_users").then((res) =>
      setUsers(res.data)
    );
    axios.get("https://TracyN.pythonanywhere.com/api/get_org").then((res) =>
      setOrgs(res.data)
    );
    axios
      .get("https://TracyN.pythonanywhere.com/api/pending_org")
      .then((res) => setPendingOrgs(res.data));
    axios
      .get("https://TracyN.pythonanywhere.com/api/get_drive")
      .then((res) => setDrives(res.data));
    axios
      .get("https://TracyN.pythonanywhere.com/api/get_alert")
      .then((res) => setAlert(res.data));
  }, []);

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">BloodConnect Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow">
          <h2 className="text-lg">Users</h2>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl shadow">
          <h2 className="text-lg">Organizations</h2>
          <p className="text-3xl font-bold">{orgs.length}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-6 rounded-2xl shadow">
          <h2 className="text-lg">Pending Orgs</h2>
          <p className="text-3xl font-bold">{pendingOrgs.length}</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-2xl shadow">
          <h2 className="text-lg">Blood Drives</h2>
          <p className="text-3xl font-bold">{drives.length}</p>
        </div>
      </div>

      {/* Graphs side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Donation Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={donations}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="drives" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie chart */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Organizations Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: "Active", value: orgs.length - pendingOrgs.length },
                { name: "Pending", value: pendingOrgs.length },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {COLORS.map((color, index) => (
                <Cell key={index} fill={color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Emergency Alert */}
      {alert && (
        <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-red-700 mb-2">Emergency Alert</h3>
          <p><strong>Org:</strong> {alert.orgName}</p>
          <p><strong>Blood Type:</strong> {alert.blood_type}</p>
          <p><strong>Location:</strong> {alert.location}</p>
          <p>{alert.message}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate("/host-drive-form")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Host Blood Drive
        </button>
        <button
          onClick={() => navigate("/emergency-alert-form")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Emergency Alerts
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
