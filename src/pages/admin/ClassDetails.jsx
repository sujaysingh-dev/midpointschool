import { Link } from "react-router-dom";

export default function ClassDetails() {
    // Example class data (You can replace it with dynamic data later)
    const classData = {
        id: 1,
        className: "Class 6",
        section: "A",
        strength: 35,
        teacher: "Mr. Adams",
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">CLASS DETAILS</h1>

            <div className="bg-white shadow p-2 md:p-6 mb-8">

                <h2 className="text-md font-semibold text-gray-700 mb-4">Class Information</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

                    <div>
                        <p className="text-gray-500">Class ID</p>
                        <p className="text-gray-800 font-medium">{classData.id}</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Class Name</p>
                        <p className="text-gray-800 font-medium">{classData.className}</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Section</p>
                        <p className="text-gray-800 font-medium">{classData.section}</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Strength</p>
                        <p className="text-gray-800 font-medium">{classData.strength}</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Class Teacher</p>
                        <p className="text-gray-800 font-medium">{classData.teacher}</p>
                    </div>
                </div>

                <div className="border-t my-6" />

                <div className="flex gap-3 justify-end">
                    <button onClick={handleBack} className="bg-gray-600 text-white text-sm px-4 py-2 hover:bg-gray-700 transition cursor-pointer">BACK</button>
                    <Link to={`/admin_dashboard/class_update`} className="bg-blue-600 text-white text-sm px-4 py-2 hover:bg-blue-700 transition">EDIT CLASS</Link>
                    <button className="bg-red-600 text-white text-sm px-4 py-2 hover:bg-red-700 transition cursor-pointer">DELETE CLASS</button>
                </div>
            </div>
        </div>
    );
}
