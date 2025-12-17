import { Link, useNavigate } from "react-router-dom";

export default function ClassAdd() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh

        // simulate saving
        setTimeout(() => {
            navigate("/admin_dashboard/classes");
        }, 1000);
    };

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">ADD NEW CLASS</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
                        <input type="text" placeholder="e.g., Class 6" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                        <input type="text" placeholder="e.g., A" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class Strength</label>
                        <input type="number" placeholder="e.g., 40" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class Teacher</label>
                        <select className="w-full border border-gray-300 px-3 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Teacher</option>
                            <option value="Mr. Adams">Mr. Adams</option>
                            <option value="Ms. Brown">Ms. Brown</option>
                            <option value="Mrs. Clark">Mrs. Clark</option>
                            <option value="Mr. Johnson">Mr. Johnson</option>
                        </select>
                    </div>
                </form>

                <div className="mt-6 flex gap-2 justify-end">
                    <button onClick={handleBack} className="bg-gray-600 text-white text-sm px-4 py-2 hover:bg-gray-700 transition cursor-pointer">BACK</button>
                    <button type="button" onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 text-sm cursor-pointer hover:bg-blue-700 transition">SAVE CLASS</button>
                </div>

            </div>
        </div>
    );
}
