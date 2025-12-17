import { useNavigate } from "react-router-dom";

export default function TeacherDetails() {
    const navigate = useNavigate();

    // Example teacher data (replace with API or state later)
    const teacher = {
        id: 1,
        name: "John Smith",
        father: "Robert Smith",
        subject: "Mathematics",
        role: "Teacher",
        address: "456 Main St",
        email: "john@example.com",
        mobile: "987-654-3210",
        photo: "https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0" // Teacher photo
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this teacher?")) {
            // TODO: Add delete API call here
            alert("Teacher deleted successfully!");
            navigate("/admin_dashboard/teachers"); // Go back to teacher list
        }
    };

    const handleIdCard = () => {
        navigate(`/admin_dashboard/teacher_id_card`);
    }

    const handleUpdate = () => {
        navigate(`/admin_dashboard/teacher_update`);
    };

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">TEACHER DETAILS</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">

                {/* Teacher Image */}
                <div className="mb-6">
                    <img src={teacher.photo} alt={teacher.name} className="w-32 h-32 border-2 rounded-md border-blue-600 object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

                    <div>
                        <p className="font-medium text-gray-700">Teacher Name:</p>
                        <p className="text-gray-800">{teacher.name}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Father's Name:</p>
                        <p className="text-gray-800">{teacher.father}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Subject:</p>
                        <p className="text-gray-800">{teacher.subject}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Role:</p>
                        <p className="text-gray-800">{teacher.role}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Address:</p>
                        <p className="text-gray-800">{teacher.address}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Email:</p>
                        <p className="text-gray-800">{teacher.email}</p>
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Mobile:</p>
                        <p className="text-gray-800">{teacher.mobile}</p>
                    </div>

                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end">
                    <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition text-sm w-full sm:w-auto cursor-pointer">BACK</button>
                    <button onClick={handleIdCard} className="bg-yellow-600 text-white px-4 py-2 hover:bg-yellow-700 transition text-sm w-full sm:w-auto cursor-pointer">ID CARD</button>
                    <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition text-sm w-full sm:w-auto cursor-pointer">UPDATE</button>
                    <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition text-sm w-full sm:w-auto cursor-pointer">DELETE</button>
                </div>

            </div>
        </div>
    );
}
