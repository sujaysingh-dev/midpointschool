import { FaUserPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Subject() {
    const subjects = [
        {
            id: 1,
            name: "Mathematics",
            code: "MATH101",
            class: "10",
            section: "A",
            teacher: "John Doe",
        },
        {
            id: 2,
            name: "Science",
            code: "SCI102",
            class: "9",
            section: "B",
            teacher: "Jane Smith",
        },
        {
            id: 3,
            name: "History",
            code: "HIS103",
            class: "11",
            section: "C",
            teacher: "Michael Johnson",
        },
    ];

    return (
        <div className="bg-gray-50 h-[92vh] md:p-6 p-2 overflow-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-lg font-bold text-gray-700 mb-2 sm:mb-0">SUBJECT RECORDS</h1>
                <Link to={"/admin_dashboard/subject_add"} className="flex text-sm items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
                    <FaUserPlus />
                    ADD SUBJECT
                </Link>
            </div>

            {/* Subject Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-400 shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">ID</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Subject Name</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Code</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Class</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Section</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Teacher</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject) => (
                            <tr key={subject.id} className="border-t hover:bg-gray-50 transition text-nowrap text-sm">
                                <td className="py-1 px-4">{subject.id}</td>
                                <td className="py-1 px-4">{subject.name}</td>
                                <td className="py-1 px-4">{subject.code}</td>
                                <td className="py-1 px-4">{subject.class}</td>
                                <td className="py-1 px-4">{subject.section}</td>
                                <td className="py-1 px-4">{subject.teacher}</td>
                                <td className="py-1 px-4 flex gap-2">
                                    <Link to={'/admin_dashboard/subject_details'} className="flex items-center gap-1 border border-green-600 text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 px-2 py-1 transition cursor-pointer"><FaEye /></Link>
                                    <Link to={'/admin_dashboard/subject_update'} className="flex items-center gap-1 border border-blue-600 text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-2 py-1 transition cursor-pointer"><FaEdit /></Link>
                                    <button className="flex items-center gap-1 border border-red-600 text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 px-2 py-1 transition cursor-pointer"><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Note */}
            <div className="mt-2 text-gray-500 text-sm">
                Total Subjects: {subjects.length}
            </div>
        </div>
    );
}
