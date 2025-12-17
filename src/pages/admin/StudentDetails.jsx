import { useNavigate } from "react-router-dom";

export default function StudentDetails() {
    const navigate = useNavigate();

    // Example student data (replace with API or state later)
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
        photo: "https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0" // Add student photo URL here
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            // TODO: Add delete API call here
            alert("Student deleted successfully!");
            navigate("/admin_dashboard/students"); // Go back to student list
        }
    };

    const handleIdCard = () => {
        navigate(`/admin_dashboard/student_id_card`)
    }

    const handleUpdate = () => {
        navigate(`/admin_dashboard/student_update`);
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">STUDENT DETAILS</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">

                {/* Student Image */}
                <div className="mb-6">
                    <img src={student.photo} alt={student.name} className="w-32 h-32 border-2 rounded-md border-blue-600 object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

                    <div>
                        <p className="font-medium text-gray-700">Student Name:</p>
                        <p className="text-gray-800">{student.name}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Father's Name:</p>
                        <p className="text-gray-800">{student.father}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Class:</p>
                        <p className="text-gray-800">{student.class}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Section:</p>
                        <p className="text-gray-800">{student.section}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Role:</p>
                        <p className="text-gray-800">{student.role}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Address:</p>
                        <p className="text-gray-800">{student.address}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Email:</p>
                        <p className="text-gray-800">{student.email}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Mobile:</p>
                        <p className="text-gray-800">{student.mobile}</p>
                    </div>

                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end">
                    <button onClick={() => navigate("/admin_dashboard/students")} className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition text-sm w-full sm:w-auto cursor-pointer">BACK</button>
                    <button onClick={handleIdCard} className="bg-yellow-600 text-white px-4 py-2 hover:bg-yellow-700 transition text-sm w-full sm:w-auto cursor-pointer">ID CARD</button>
                    <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition text-sm w-full sm:w-auto cursor-pointer">UPDATE</button>
                    <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition text-sm w-full sm:w-auto cursor-pointer">DELETE</button>
                </div>

            </div>
        </div>
    );
}
