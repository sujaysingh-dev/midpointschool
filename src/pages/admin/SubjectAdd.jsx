import { useNavigate } from "react-router-dom";

export default function SubjectAdd() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh

        // TODO: Add API call to save subject here

        // simulate saving
        setTimeout(() => {
            navigate("/admin_dashboard/subjects");
        }, 1000);
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">ADD NEW SUBJECT</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8 rounded">
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Subject Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., Mathematics"
                            className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Subject Code
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., MATH101"
                            className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Class
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., 10"
                            className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Section
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., A"
                            className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Subject Teacher
                        </label>
                        <select className="w-full border border-gray-300 px-2 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Teacher</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Jane Smith">Jane Smith</option>
                            <option value="Michael Johnson">Michael Johnson</option>
                            <option value="Emily Brown">Emily Brown</option>
                        </select>
                    </div>
                </form>

                <div className="mt-6 flex gap-2 justify-end">
                    <button
                        onClick={handleBack}
                        className="bg-gray-600 text-white text-sm px-4 py-2 hover:bg-gray-700 transition cursor-pointer"
                    >
                        BACK
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 text-sm cursor-pointer hover:bg-blue-700 transition"
                    >
                        SAVE SUBJECT
                    </button>
                </div>

            </div>
        </div>
    );
}
