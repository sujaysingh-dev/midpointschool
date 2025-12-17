import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export default function Attendance() {
    const attendance = [
        { subject: "Math", percentage: 95 },
        { subject: "Science", percentage: 90 },
        { subject: "History", percentage: 85 },
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Attendance
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {attendance.map((att, index) => (
                    <div key={index} className="bg-white border border-gray-300 shadow-md p-4">
                        <h2 className="text-xl font-semibold text-gray-700">{att.subject}</h2>
                        <p className="text-gray-600 mt-1">Attendance: {att.percentage}%</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                            <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${att.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
