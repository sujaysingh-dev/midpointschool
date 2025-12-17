import React from "react";
import { SiGoogleclassroom } from "react-icons/si";

export default function Classes() {
    const classes = [
        { name: "Math", teacher: "Mr. Smith", schedule: "Mon & Wed 10:00-11:00" },
        { name: "Science", teacher: "Mrs. Lee", schedule: "Tue & Thu 12:00-1:00" },
        { name: "History", teacher: "Mr. Brown", schedule: "Fri 9:00-10:00" },
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Classes
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classes.map((cls, index) => (
                    <div key={index} className="bg-white border border-gray-300 shadow-md p-4">
                        <h2 className="text-xl font-semibold text-gray-700">{cls.name}</h2>
                        <p className="text-gray-600 mt-1">Teacher: {cls.teacher}</p>
                        <p className="text-gray-600 mt-1">Schedule: {cls.schedule}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
