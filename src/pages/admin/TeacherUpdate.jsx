import { useNavigate } from "react-router-dom";

export default function TeacherUpdate() {
    const navigate = useNavigate();

    // Example existing teacher data (replace with API/state later)
    const teacher = {
        id: 1,
        name: "John Smith",
        subject: "Mathematics",
        address: "123 Main St",
        email: "john@example.com",
        mobile: "987-654-3210",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add API call to update teacher
        alert("Teacher updated successfully!");
        navigate("/admin_dashboard/teachers");
    };

    const handleBack = () => window.history.back();

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">TEACHER UPDATE</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teacher Name</label>
                        <input type="text" defaultValue={teacher.name} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" defaultValue={teacher.subject} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" defaultValue={teacher.address} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" defaultValue={teacher.email} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                        <input type="tel" defaultValue={teacher.mobile} className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
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
