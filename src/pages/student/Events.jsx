import React from "react";
import { MdEvent } from "react-icons/md";

export default function Event() {
    const events = [
        { title: "Science Fair", date: "25 Dec 2025" },
        { title: "Sports Day", date: "10 Jan 2026" },
        { title: "Annual Day", date: "15 Feb 2026" },
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Events
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((ev, index) => (
                    <div key={index} className="bg-white border border-gray-300 shadow-md p-4">
                        <h2 className="text-xl font-semibold text-gray-700">{ev.title}</h2>
                        <p className="text-gray-600 mt-1">Date: {ev.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
