import React from "react";
import { MdMenuBook } from "react-icons/md";

export default function Exam() {
    const exams = [
        { subject: "Math", date: "12 Jan 2026", result: "Pending" },
        { subject: "Science", date: "15 Jan 2026", result: "Pending" },
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Exams
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exams.map((exam, index) => (
                    <div key={index} className="bg-white border border-gray-300 shadow-md p-4">
                        <h2 className="text-xl font-semibold text-gray-700">{exam.subject}</h2>
                        <p className="text-gray-600 mt-1">Date: {exam.date}</p>
                        <p className="text-gray-600 mt-1">Result: {exam.result}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
