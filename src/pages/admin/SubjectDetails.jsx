import { useNavigate } from "react-router-dom";

export default function SubjectDetails() {
    const navigate = useNavigate();

    // Example subject data (replace with API or state later)
    const subject = {
        id: 1,
        name: "Mathematics",
        code: "MATH101",
        class: "10",
        section: "A",
        teacher: "John Doe",
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this subject?")) {
            // TODO: Add delete API call here
            alert("Subject deleted successfully!");
            navigate("/admin_dashboard/subjects"); // Go back to subject list
        }
    };

    const handleUpdate = () => {
        navigate(`/admin_dashboard/subject_update`);
    };

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">SUBJECT DETAILS</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

                    <div>
                        <p className="font-medium text-gray-700">Subject Name:</p>
                        <p className="text-gray-800">{subject.name}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Code:</p>
                        <p className="text-gray-800">{subject.code}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Class:</p>
                        <p className="text-gray-800">{subject.class}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Section:</p>
                        <p className="text-gray-800">{subject.section}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Teacher:</p>
                        <p className="text-gray-800">{subject.teacher}</p>
                    </div>

                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end">
                    <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition text-sm w-full sm:w-auto cursor-pointer">BACK</button>
                    <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition text-sm w-full sm:w-auto cursor-pointer">UPDATE</button>
                    <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition text-sm w-full sm:w-auto cursor-pointer">DELETE</button>
                </div>

            </div>
        </div>
    );
}
