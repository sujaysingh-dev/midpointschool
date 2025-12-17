import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const summaryCards = [
    {
        title: "Class",
        value: "5 - A", // Current enrolled class
        icon: <FaChalkboardTeacher size={28} />,
        bgColor: "bg-green-100",
        textColor: "text-green-600",
    },
    {
        title: "Subjects",
        value: "6", // Number of subjects
        icon: <FaUserGraduate size={28} />,
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
    },
    {
        title: "Attendance",
        value: "92%", // Attendance percentage
        icon: <MdEvent size={28} />,
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
    },
    {
        title: "Fees Due",
        value: "$500", // Pending fees
        icon: <FaMoneyBillWave size={28} />,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
    },
];

export default function Dashboard() {
    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <p className="text-gray-600 mb-1">Welcome, Student</p>
            <h1 className="text-lg font-bold text-gray-700 mb-4">STUDENT DASHBOARD</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {summaryCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4"
                    >
                        <div className={`${card.bgColor} p-3 rounded-full ${card.textColor}`}>
                            {card.icon}
                        </div>
                        <div>
                            <span className="text-gray-600 text-sm">{card.title}</span>
                            <h2 className="text-2xl font-bold mt-1">{card.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Calendar and Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-300 shadow-md p-4 h-80">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Upcoming Events</h2>
                    <div className="w-full h-full flex flex-col items-start justify-start text-gray-600 gap-2">
                        <p>Science Fair - 25 Dec 2025</p>
                        <p>Sports Day - 10 Jan 2026</p>
                        <p>Annual Day - 15 Feb 2026</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 shadow-md p-4 lg:col-span-2 h-80">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Academic Overview</h2>
                    <div className="w-full h-full flex flex-col items-start justify-start text-gray-600 gap-2">
                        <p>Math - Grade: A</p>
                        <p>Science - Grade: B+</p>
                        <p>History - Grade: A-</p>
                        <p>English - Grade: B</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
