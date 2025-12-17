import { useNavigate } from "react-router-dom";

export default function SubjectUpdate() {
    const navigate = useNavigate();

    // Example existing subject data (replace with real data later)
    const subjectData = {
        id: 1,
        name: "Mathematics",
        code: "MATH101",
        class: "10",
        section: "A",
        teacher: "John Doe",
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Add API call to update subject here

        // Simulate successful update and navigate back
        setTimeout(() => {
            navigate("/admin_dashboard/subjects");
        }, 1000);
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">SUBJECT UPDATE</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8 rounded">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
                        <input
                            type="text"
                            defaultValue={subjectData.name}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Code</label>
                        <input
                            type="text"
                            defaultValue={subjectData.code}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                        <input
                            type="text"
                            defaultValue={subjectData.class}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                        <input
                            type="text"
                            defaultValue={subjectData.section}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teacher</label>
                        <select
                            defaultValue={subjectData.teacher}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="John Doe">John Doe</option>
                            <option value="Jane Smith">Jane Smith</option>
                            <option value="Michael Johnson">Michael Johnson</option>
                            <option value="Emily Brown">Emily Brown</option>
                        </select>
                    </div>

                    <input type="hidden" value={subjectData.id} />
                </form>

                <div className="mt-6 flex gap-2 justify-end">
                    <button
                        onClick={handleBack}
                        className="bg-gray-600 text-white text-sm px-4 py-2 hover:bg-gray-700 transition cursor-pointer"
                    >
                        BACK
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 text-sm hover:bg-blue-700 transition cursor-pointer"
                    >
                        UPDATE SUBJECT
                    </button>
                </div>
            </div>
        </div>
    );
}
