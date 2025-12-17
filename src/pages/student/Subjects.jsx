import React from "react";
import { MdOutlineSubject } from "react-icons/md";

export default function Subjects() {
    const subjects = ["Mathematics", "Science", "History", "English", "Physical Education"];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Subjects
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((sub, index) => (
                    <li key={index} className="bg-white border border-gray-300 shadow-md p-4">
                        <h2 className="text-xl font-semibold text-gray-700">{sub}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}
