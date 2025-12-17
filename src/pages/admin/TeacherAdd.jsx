import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherAdd() {
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
        // TODO: Add API call to save teacher with photo
        alert("Teacher added successfully!");
        setTimeout(() => {
            navigate("/admin_dashboard/teachers");
        }, 1000);
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">ADD TEACHER</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teacher Name</label>
                        <input type="text" placeholder="e.g., John Smith" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                        <input type="text" placeholder="e.g., Robert Smith" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" placeholder="e.g., Mathematics" className="w-full border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select className="w-full border border-gray-300 px-2 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Role</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Head Teacher">Head Teacher</option>
                        </select>
                    </div>

                    {/* Photo Upload Section */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teacher Photo</label>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} className="w-full text-sm text-gray-700 cursor-pointer"/>
                        {preview && (
                            <div className="mt-2 flex justify-center">
                                <img src={preview} alt="Preview" className="w-32 h-32 border-2 rounded-md border-blue-600 object-cover"/>
                            </div>
                        )}
                    </div>

                </form>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end">
                    <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition text-sm cursor-pointer w-full sm:w-auto">BACK</button>
                    <button type="submit" onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 text-sm hover:bg-blue-700 transition cursor-pointer w-full sm:w-auto">SAVE TEACHER</button>
                </div>
            </div>
        </div>
    );
}
