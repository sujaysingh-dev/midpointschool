import { useState } from "react";

export default function Attendance() {
    const students = [
        {
            id: 1,
            roll: 1,
            name: "Alice Johnson",
            class: "10",
            section: "A"
        },
        {
            id: 2,
            roll: 2,
            name: "Bob Smith",
            class: "10",
            section: "A"
        },
        {
            id: 3,
            roll: 3,
            name: "Charlie Brown",
            class: "10",
            section: "A"
        }
    ];

    const [attendance, setAttendance] = useState({});
    const [date, setDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    const handleChange = (studentId, status) => {
        setAttendance({
            ...attendance,
            [studentId]: status
        });
    };

    const presentCount = Object.values(attendance).filter(
        (status) => status === "Present"
    ).length;

    const absentCount = Object.values(attendance).filter(
        (status) => status === "Absent"
    ).length;

    const leaveCount = Object.values(attendance).filter(
        (status) => status === "Leave"
    ).length;

    return (
        <div className="bg-gray-100 h-[92vh] md:p-6 p-2 overflow-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-lg font-semibold text-gray-800 mb-6 uppercase">Student Attendance</h1>
                <div className="flex gap-2">
                    <div className="flex gap-1">
                        <div className="bg-green-200 border rounded-sm shadow p-1">
                            <p className="text-black text-xl">P <span className="text-xl font-bold text-green-800">{presentCount}</span></p>
                        </div>

                        <div className="bg-red-200 border rounded-sm shadow p-1">
                            <p className="text-black text-xl">A <span className="text-xl font-bold text-red-600">{absentCount}</span></p>
                        </div>

                        <div className="bg-yellow-200 border rounded-sm shadow p-1">
                            <p className="text-black text-xl">L <span className="text-xl font-bold text-yellow-600">{leaveCount}</span></p>
                        </div>
                    </div>
                    <input type="date" className="border border-gray-500 px-3 py-2 text-sm" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>

            {/* Summary Cards */}


            {/* Attendance Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow rounded">
                    <thead className="bg-gray-200">
                        <tr className="text-nowrap">
                            <th className="py-3 px-4 text-left">Roll</th>
                            <th className="py-3 px-4 text-left">Student Name</th>
                            <th className="py-3 px-4 text-center">P</th>
                            <th className="py-3 px-4 text-center">A</th>
                            <th className="py-3 px-4 text-center">L</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-t text-sm hover:bg-gray-50 text-nowrap">
                                <td className="py-2 px-4">{student.roll}</td>
                                <td className="py-2 px-4">{student.name}</td>
                                {["Present", "Absent", "Leave"].map((status) => (
                                    <td key={status} className="py-2 px-4 text-center">
                                        <input type="radio" name={`attendance-${student.id}`} checked={attendance[student.id] === status} onChange={() => handleChange(student.id, status)} className="cursor-pointer" />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 shadow cursor-pointer">Submit Attendance</button>
            </div>
        </div>
    );
}
