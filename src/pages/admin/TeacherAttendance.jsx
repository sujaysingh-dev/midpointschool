import { useState } from "react";

export default function TeacherAttendance() {
    // Example teacher data
    const [teachers, setTeachers] = useState([
        { id: "T001", name: "John Doe", mobile: "9834345498", department: "Math", status: "" },
        { id: "T002", name: "Jane Smith", mobile: "9237482348", department: "Science", status: "" },
        { id: "T003", name: "Robert Brown", mobile: "9389345498", department: "English", status: "" },
    ]);

    const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split("T")[0]);

    const handleStatusChange = (id, status) => {
        setTeachers((prev) =>
            prev.map((teacher) =>
                teacher.id === id ? { ...teacher, status } : teacher
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Attendance Data:", { date: attendanceDate, teachers });
        alert("Attendance saved successfully!");
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <div className="w-full mx-auto bg-white shadow-md p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-4">
                    <h1 className="text-lg font-semibold text-gray-800">TEACHER ATTENDANCE</h1>
                    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                        <label className="text-sm font-medium">Select Date:</label>
                        <input type="date" className="border px-3 py-1 text-sm" value={attendanceDate} onChange={(e) => setAttendanceDate(e.target.value)}/>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse text-sm">
                            <thead>
                                <tr className="bg-gray-100 text-nowrap">
                                    <th className="border px-3 py-2 text-left">ID</th>
                                    <th className="border px-3 py-2 text-left">Name</th>
                                    <th className="border px-3 py-2 text-left">Mobile</th>
                                    <th className="border px-3 py-2 text-left">Department</th>
                                    <th className="border px-3 py-2 text-left">Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher.id} className="hover:bg-gray-50 text-nowrap">
                                        <td className="border px-3 py-2">{teacher.id}</td>
                                        <td className="border px-3 py-2">{teacher.name}</td>
                                        <td className="border px-3 py-2">{teacher.mobile}</td>
                                        <td className="border px-3 py-2">{teacher.department}</td>
                                        <td className="border px-3 py-2">
                                            <div className="flex gap-2">
                                                <label className="flex items-center gap-1">
                                                    <input type="radio" name={`attendance-${teacher.id}`} value="Present" checked={teacher.status === "Present"} onChange={() => handleStatusChange(teacher.id, "Present")}/>
                                                    Present
                                                </label>
                                                <label className="flex items-center gap-1">
                                                    <input type="radio" name={`attendance-${teacher.id}`} value="Absent" checked={teacher.status === "Absent"} onChange={() => handleStatusChange(teacher.id, "Absent")}/>
                                                    Absent
                                                </label>
                                                <label className="flex items-center gap-1">
                                                    <input type="radio" name={`attendance-${teacher.id}`}  value="Leave" checked={teacher.status === "Leave"} onChange={() => handleStatusChange(teacher.id, "Leave")}/>
                                                    Leave
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-end gap-2">
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 text-sm hover:bg-blue-700 transition cursor-pointer">Save Attendance</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
