export default function Students() {
    const students = [
        {
            id: 1,
            name: "Alice Johnson",
            father: "Robert Johnson",
            class: "10",
            section: "A",
            role: "Student",
            address: "123 Main St",
            email: "alice@example.com",
            mobile: "123-456-7890",
        },
        {
            id: 2,
            name: "Bob Smith",
            father: "James Smith",
            class: "10",
            section: "A",
            role: "Student",
            address: "456 Oak St",
            email: "bob@example.com",
            mobile: "234-567-8901",
        },
        {
            id: 3,
            name: "Charlie Brown",
            father: "Michael Brown",
            class: "10",
            section: "A",
            role: "Student",
            address: "789 Pine St",
            email: "charlie@example.com",
            mobile: "345-678-9012",
        },
    ];

    return (
        <div className="bg-gray-50 h-[92vh] md:p-6 p-2 overflow-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-lg font-bold text-gray-700 mb-2 sm:mb-0">CLASS STUDENT</h1>
            </div>

            {/* Student Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
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
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-t hover:bg-gray-50 transition text-nowrap text-sm">
                                <td className="py-1 px-4">{student.id}</td>
                                <td className="py-1 px-4">{student.name}</td>
                                <td className="py-1 px-4">{student.father}</td>
                                <td className="py-1 px-4">{student.class}</td>
                                <td className="py-1 px-4">{student.section}</td>
                                <td className="py-1 px-4">{student.role}</td>
                                <td className="py-1 px-4">{student.address}</td>
                                <td className="py-1 px-4">{student.email}</td>
                                <td className="py-1 px-4">{student.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Note */}
            <div className="mt-2 text-gray-500 text-sm">
                Total Students: {students.length}
            </div>
        </div>
    );
}
