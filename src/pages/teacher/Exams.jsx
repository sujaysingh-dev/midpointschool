import { useState } from "react";
import { FaSave, FaTrash } from "react-icons/fa"; // Using react-icons for icons

export default function Exams() {
    const [students] = useState([
        { role: 1, name: "Rahul Kumar" },
        { role: 2, name: "Anita Sharma" },
    ]);

    const [subjects] = useState(["Math", "Science", "English", "Hindi", "Computer"]);

    // Store marks per student: { studentName: { Math: 90, Science: 80, ... } }
    const [marksData, setMarksData] = useState({});

    // Update a mark for a student & subject
    const updateMark = (student, subject, newMark) => {
        setMarksData((prev) => ({
            ...prev,
            [student]: {
                ...prev[student],
                [subject]: newMark,
            },
        }));
    };

    // Save student marks (here just a placeholder for actual API call)
    const saveStudentMarks = (student) => {
        alert(`Marks for ${student} saved!`);
        // Implement actual save logic here
    };

    // Delete student entirely
    const deleteStudent = (student) => {
        const updated = { ...marksData };
        delete updated[student];
        setMarksData(updated);
    };

    return (
        <div className="bg-gray-100 h-[92vh] md:p-6 p-2 overflow-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6 uppercase">Exams & Marks</h1>

            {/* Marks Table */}
            <div className="bg-white border shadow overflow-x-auto">
                <table className="w-full text-left min-w-max">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3">Role</th>
                            <th className="p-3">Student</th>
                            {subjects.map((sub, i) => (
                                <th key={i} className="p-3 text-center">{sub}</th>
                            ))}
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s) => (
                            <tr key={s.id} className="border-t hover:bg-gray-50">
                                <td className="px-3 py-1 font-medium">{s.role}</td>
                                <td className="px-3 py-1 font-medium">{s.name}</td>
                                {subjects.map((sub, i) => (
                                    <td key={i} className="px-1 py-1 text-center">
                                        <input type="number" min="0" max="100" value={marksData[s.name]?.[sub] || ""}
                                            onChange={(e) =>
                                                updateMark(s.name, sub, Number(e.target.value))
                                            } className="border p-0 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                    </td>
                                ))}


                                <td className="px-3 py-1 text-center flex justify-center gap-2">
                                    <button onClick={() => saveStudentMarks(s.name)} className="p-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer" title="Save"><FaSave size={16} /></button>
                                    <button onClick={() => deleteStudent(s.name)} className="p-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer" title="Delete"><FaTrash size={16} /></button>
                                </td>
                            </tr>
                        ))}
                        {students.length === 0 && (
                            <tr>
                                <td colSpan={subjects.length + 2} className="p-4 text-center text-gray-500"> No students found. </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
