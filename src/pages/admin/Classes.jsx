import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Classes() {

    const classes = [
        { id: 1, className: "Class 6", section: "A", strength: 35, teacher: "Mr. Adams" },
        { id: 2, className: "Class 7", section: "B", strength: 32, teacher: "Ms. Brown" },
        { id: 3, className: "Class 8", section: "A", strength: 40, teacher: "Mrs. Clark" },
    ];

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-lg font-semibold text-gray-800">CLASSES RECORDS</h1>
                <Link to={"/admin_dashboard/class_add"} className="flex text-sm items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"><FaPlus />ADD CLASS</Link>
            </div>

            {/* Table */}
            <div className="bg-white shadow  mb-2 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-400 shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">ID</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Class</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Section</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Strength</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Class Teacher</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {classes.map((cls) => (
                            <tr key={cls.id} className="border-t hover:bg-gray-50 transition whitespace-nowrap text-sm">
                                <td className="py-1 px-4">{cls.id}</td>
                                <td className="py-1 px-4">{cls.className}</td>
                                <td className="py-1 px-4">{cls.section}</td>
                                <td className="py-1 px-4">{cls.strength}</td>
                                <td className="py-1 px-4">{cls.teacher}</td>
                                <td className="py-1 px-4 flex gap-2">
                                    <Link to={`/admin_dashboard/class_details`} className="flex items-center gap-1 border border-green-600 text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 px-2 py-1 transition"><FaEye /></Link>
                                    <Link to={`/admin_dashboard/class_update`} className="flex items-center gap-1 border-blue-600 border text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-2 py-1 transition"><FaEdit /></Link>
                                    <button className="flex items-center gap-1 border border-red-600 text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 px-2 py-1 transition cursor-pointer"><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="text-gray-500 text-sm">
                Total Classes: {classes.length}
            </div>
        </div>
    );
}
