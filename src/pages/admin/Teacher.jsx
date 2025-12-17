import { FaUserPlus, FaEdit, FaTrash, FaIdCard, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Teacher() {
    const teachers = [
        {
            id: 1,
            name: "John Doe",
            father: "Robert Doe",
            class: "10",
            section: "A",
            role: "Teacher",
            address: "123 Main St",
            email: "john@example.com",
            mobile: "123-456-7890",
        },
        {
            id: 2,
            name: "Jane Smith",
            father: "James Smith",
            class: "9",
            section: "B",
            role: "Teacher",
            address: "456 Oak St",
            email: "jane@example.com",
            mobile: "234-567-8901",
        },
        {
            id: 3,
            name: "Michael Johnson",
            father: "David Johnson",
            class: "11",
            section: "C",
            role: "Teacher",
            address: "789 Pine St",
            email: "michael@example.com",
            mobile: "345-678-9012",
        },
    ];

    return (
        <div className="bg-gray-50 h-[92vh] md:p-6 p-2 overflow-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-lg font-bold text-gray-700 mb-2 sm:mb-0">TEACHER RECORDS</h1>
                <Link to={"/admin_dashboard/teacher_add"} className="flex text-sm items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
                    <FaUserPlus />
                    ADD TEACHER
                </Link>
            </div>

            {/* Teacher Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-400 shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">ID</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Name</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Father</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Class</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Section</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Role</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Address</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Email</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Mobile</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id} className="border-t hover:bg-gray-50 transition text-nowrap text-sm">
                                <td className="py-1 px-4">{teacher.id}</td>
                                <td className="py-1 px-4">{teacher.name}</td>
                                <td className="py-1 px-4">{teacher.father}</td>
                                <td className="py-1 px-4">{teacher.class}</td>
                                <td className="py-1 px-4">{teacher.section}</td>
                                <td className="py-1 px-4">{teacher.role}</td>
                                <td className="py-1 px-4">{teacher.address}</td>
                                <td className="py-1 px-4">{teacher.email}</td>
                                <td className="py-1 px-4">{teacher.mobile}</td>
                                <td className="py-1 px-4 flex gap-2">
                                    <Link to={'/admin_dashboard/teacher_details'} className="flex items-center gap-1 border border-green-600 text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 px-2 py-1 transition cursor-pointer"><FaEye /></Link>
                                    <Link to={'/admin_dashboard/teacher_id_card'} className="flex items-center gap-1 border border-yellow-600 text-yellow-600 hover:text-yellow-800 bg-yellow-100 hover:bg-yellow-200 px-2 py-1 transition cursor-pointer"><FaIdCard /></Link>
                                    <Link to={'/admin_dashboard/teacher_update'} className="flex items-center gap-1 border border-blue-600 text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-2 py-1 transition cursor-pointer"><FaEdit /></Link>
                                    <button className="flex items-center gap-1 border border-red-600 text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 px-2 py-1 transition cursor-pointer"><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Note */}
            <div className="mt-2 text-gray-500 text-sm">
                Total Teachers: {teachers.length}
            </div>
        </div>
    );
}
