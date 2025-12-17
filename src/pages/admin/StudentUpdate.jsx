import { useNavigate } from "react-router-dom";

export default function StudentUpdate() {
    const navigate = useNavigate();

    // Example existing student data (replace with API/state later)
    const student = {
        id: 1,
        name: "Alice Johnson",
        father: "Robert Johnson",
        class: "10",
        section: "A",
        role: "Student",
        address: "123 Main St",
        email: "alice@example.com",
        mobile: "123-456-7890",
    };

    const classOptions = ["6", "7", "8", "9", "10", "11", "12"];
    const sectionOptions = ["A", "B", "C", "D"];

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add API call to update student
        alert("Student updated successfully!");
        navigate("/admin_dashboard/students");
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">STUDENT UPDATE</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input type="text" defaultValue={student.name} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                        <input type="text" defaultValue={student.father} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                        <select defaultValue={student.class} className="w-full border border-gray-300 px-3 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500" >
                            {classOptions.map((cls) => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                        <select defaultValue={student.section} className="w-full border border-gray-300 px-3 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            {sectionOptions.map((sec) => (
                                <option key={sec} value={sec}>{sec}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select defaultValue={student.role} className="w-full border border-gray-300 px-3 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500" >
                            <option value="Student">Student</option>
                            <option value="Prefect">Prefect</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" defaultValue={student.address} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" defaultValue={student.email} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                        <input type="tel" defaultValue={student.mobile} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                </form>

                <div className="mt-6 flex justify-end gap-4">
                    <button onClick={handleBack} className="bg-gray-600 text-white px-6 py-2 text-sm hover:bg-gray-700 transition cursor-pointer">BACK</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 text-sm hover:bg-blue-700 transition cursor-pointer">UPDATE</button>
                </div>
            </div>
        </div>
    );
}
