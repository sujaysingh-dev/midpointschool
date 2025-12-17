import React from "react";
import { MdNotifications } from "react-icons/md";

export default function Notice() {
    const notices = [
        "Exam schedule released.",
        "New event: Science fair on 25th Dec.",
        "Fee payment due by end of this month.",
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Notices
            </h1>
            <ul className="space-y-4">
                {notices.map((notice, index) => (
                    <li key={index} className="bg-white border border-gray-300 shadow-md p-4">
                        {notice}
                    </li>
                ))}
            </ul>
        </div>
    );
}
