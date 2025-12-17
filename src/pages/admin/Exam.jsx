import { useState } from "react";

export default function Exam() {
    const [examName, setExamName] = useState("");
    const [className, setClassName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [room, setRoom] = useState("");

    const [exams, setExams] = useState([]);

    // Add New Exam Schedule
    const handleAddExam = () => {
        if (!examName || !className || !date || !time || !room) {
            alert("Please fill all fields");
            return;
        }

        const newExam = {
            id: Date.now(),
            examName,
            className,
            date,
            time,
            room,
        };

        setExams([...exams, newExam]);

        // Clear inputs
        setExamName("");
        setClassName("");
        setDate("");
        setTime("");
        setRoom("");
    };

    // Delete Exam
    const handleDelete = (id) => {
        setExams(exams.filter((exam) => exam.id !== id));
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">EXAM SCHEDULE MANAGEMENT</h1>

            {/* Form Section */}
            <div className="bg-white shadow p-2 md:p-6 mb-8">
                <h2 className="text-xl font-medium text-gray-700 mb-4">Add New Exam</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div>
                        <label className="text-sm text-gray-600">Exam Name</label>
                        <input type="text" value={examName} onChange={(e) => setExamName(e.target.value)} placeholder="Mid Term, Final Exam..." className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Class</label>
                        <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} placeholder="Class 5, Class 10..." className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Exam Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Exam Time</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Room Number</label>
                        <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Room 201, Hall A..." className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>
                </div>
                <button onClick={handleAddExam} className="mt-4 text-sm bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition">ADD EXAM</button>
            </div>

            {/* Exam List Table */}
            <div className="bg-white shadow p-2 md:p-6">
                <h2 className="text-xl font-medium text-gray-700 mb-4">Scheduled Exams</h2>

                {exams.length === 0 ? (
                    <p className="text-gray-600">No exams scheduled yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-3 border">Exam Name</th>
                                    <th className="p-3 border">Class</th>
                                    <th className="p-3 border">Date</th>
                                    <th className="p-3 border">Time</th>
                                    <th className="p-3 border">Room</th>
                                    <th className="p-3 border">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {exams.map((exam) => (
                                    <tr key={exam.id} className="border-b">
                                        <td className="p-3 border">{exam.examName}</td>
                                        <td className="p-3 border">{exam.className}</td>
                                        <td className="p-3 border">{exam.date}</td>
                                        <td className="p-3 border">{exam.time}</td>
                                        <td className="p-3 border">{exam.room}</td>
                                        <td className="p-3 border">
                                            <button className="text-blue-600 mr-4 hover:underline">Edit</button>
                                            <button onClick={() => handleDelete(exam.id)} className="text-red-600 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
