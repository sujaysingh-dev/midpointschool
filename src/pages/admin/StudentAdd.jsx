import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentAdd() {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add API call to save student along with photo
        alert("Student added successfully!");
        setTimeout(() => {
            navigate("/admin_dashboard/students");
        }, 1000);
    };

    const classOptions = ["6", "7", "8", "9", "10", "11", "12"];
    const sectionOptions = ["A", "B", "C", "D"];

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">ADD STUDENT</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input type="text" placeholder="e.g., Alice Johnson" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                        <input type="text" placeholder="e.g., Robert Johnson" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                        <select className="w-full border border-gray-300 px-2 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Class</option>
                            {classOptions.map((cls) => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                        <select className="w-full border border-gray-300 px-2 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Section</option>
                            {sectionOptions.map((sec) => (
                                <option key={sec} value={sec}>{sec}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select className="w-full border border-gray-300 px-2 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Prefect">Prefect</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" placeholder="e.g., 123 Main St" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" placeholder="e.g., abc@example.com" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                        <input type="tel" placeholder="e.g., 123-456-7890" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    {/* Photo Upload Section */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Photo</label>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} className="w-full text-sm text-gray-700 cursor-pointer"/>
                        {preview && (
                            <div className="mt-2 flex justify-center">
                                <img src={preview} alt="Preview" className="w-32 h-32 border-2 rounded-md border-blue-600 object-cover"/>
                            </div>
                        )}
                    </div>

                </form>

                <div className="mt-6 flex gap-2 justify-end">
                    <button onClick={() => navigate("/admin_dashboard/students")} className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition text-sm cursor-pointer">BACK</button>
                    <button type="submit" onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 text-sm hover:bg-blue-700 transition cursor-pointer">SAVE STUDENT</button>
                </div>
            </div>
        </div>
    );
}
