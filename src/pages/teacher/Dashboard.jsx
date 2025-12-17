import { FaUserGraduate, FaChalkboardTeacher, FaClipboardCheck, FaBook } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

export default function Dashboard() {
    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <p className="text-gray-600 mb-1">
                Welcome, Teacher
            </p>

            <h1 className="text-lg font-semibold text-gray-800 mb-6">
                DASHBOARD
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <FaChalkboardTeacher size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">
                            Assigned Class
                        </span>
                        <h2 className="text-2xl font-bold mt-1">
                            Class 5 - A
                        </h2>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <FaUserGraduate size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">
                            Total Students
                        </span>
                        <h2 className="text-2xl font-bold mt-1">
                            40
                        </h2>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                        <FaBook size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">
                            Subjects Assigned
                        </span>
                        <h2 className="text-2xl font-bold mt-1">
                            3
                        </h2>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 shadow-md p-4 flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                        <FaClipboardCheck size={28} />
                    </div>
                    <div>
                        <span className="text-gray-600 text-sm">
                            Today Attendance
                        </span>
                        <h2 className="text-2xl font-bold mt-1">
                            92%
                        </h2>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className="bg-white border border-gray-300 shadow-md p-4 h-80">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Upcoming Events
                    </h2>

                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>📅 Parent Teacher Meeting</li>
                        <li>🏫 Annual Day Practice</li>
                        <li>📝 Unit Test - Class 5A</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-300 shadow-md p-4 lg:col-span-2 h-80">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Class Overview
                    </h2>

                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>
                            Attendance / Performance Chart
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
