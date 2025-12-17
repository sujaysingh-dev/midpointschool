import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
    const [date, setDate] = useState(new Date());

    const data = [
        { name: "Students", value: 400 },
        { name: "Teachers", value: 15 },
        { name: "Events", value: 12 },
        { name: "Revenue", value: 45600 },
        { name: "Total Salary Paid", value: 15600 },
        { name: "Total Fee Collected", value: 40600 },
        { name: "Pending Salary", value: 45600 },
        { name: "Pending Fees", value: 5600 },
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <p className="text-gray-700 mb-1">Welcome, Admin</p>
            <h1 className="text-lg font-bold text-gray-700 mb-4">DASHBOARD</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <FaUserGraduate size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Students</span>
                        <h2 className="text-2xl font-bold mt-1">400</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <FaChalkboardTeacher size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Teachers</span>
                        <h2 className="text-2xl font-bold mt-1">15</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                        <MdEvent size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Events</span>
                        <h2 className="text-2xl font-bold mt-1">12</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                        <FaMoneyBillWave size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Revenue</span>
                        <h2 className="text-2xl font-bold mt-1">$45,600</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <FaMoneyBillWave size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Total Salary Paid</span>
                        <h2 className="text-2xl font-bold mt-1">$15,600</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <FaMoneyBillWave size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Total Fee Collected</span>
                        <h2 className="text-2xl font-bold mt-1">$40,600</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-red-100 p-3 rounded-full text-red-600">
                        <FaMoneyBillWave size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Pending Salary</span>
                        <h2 className="text-2xl font-bold mt-1">$5,600</h2>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4 rounded-lg">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                        <FaMoneyBillWave size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">Pending Fees</span>
                        <h2 className="text-2xl font-bold mt-1">$45,600</h2>
                    </div>
                </div>
            </div>

            {/* Calendar & Overview Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Calendar Card */}
                <div className="bg-white border border-gray-300 shadow-md p-4 rounded-lg h-96 flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Calendar</h2>
                    <div className="flex-1 overflow-auto">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>

                {/* Chart Card */}
                <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 lg:col-span-2 h-96 flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Overview</h2>
                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    tick={{ fontSize: 12 }}
                                    interval={0}
                                    angle={-30}
                                    textAnchor="end"
                                    height={70}
                                />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#3b82f6" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
