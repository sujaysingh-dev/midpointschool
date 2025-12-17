import { useState } from "react";

export default function Setting() {
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState(null);

    // Handle image upload
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">SETTING</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white shadow p-2 md:p-6">
                        <h2 className="text-xl font-medium text-gray-800 mb-4">Profile Settings</h2>
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <input type="file" id="profilePhotoInput" accept="image/*" onChange={handlePhotoChange} className="hidden"/>
                                <img src={preview || "/default-avatar.png"} alt="Profile"
                                    onClick={() =>
                                        document.getElementById("profilePhotoInput").click()
                                    }
                                    className="w-24 h-24 rounded-full object-cover border cursor-pointer hover:opacity-80 transition"
                                />

                                {/* OPTIONAL Hover Overlay */}
                                <div
                                    className="absolute inset-0 rounded-full bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-xs cursor-pointer"
                                    onClick={() =>
                                        document.getElementById("profilePhotoInput").click()
                                    }
                                >
                                    Change
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-600">Full Name</label>
                                <input type="text"  placeholder="Admin" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Email</label>
                                <input type="email" placeholder="admin@example.com" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Phone Number</label>
                                <input type="tel" placeholder="+1 000 000 0000" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow p-2 md:p-6">
                        <h2 className="text-xl font-medium text-gray-800 mb-4">Change Password</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-600">Current Password</label>
                                <input type="password" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                            </div>
                            <div>
                                <label className="text-sm text-gray-600">New Password</label>
                                <input type="password" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Confirm New Password</label>
                                <input type="password"  className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-2 md:p-6 shadow">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Notifications</h3>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-700">Email Alerts</span>
                            <input type="checkbox" className="text-sm toggle-switch" />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">System Messages</span>
                            <input type="checkbox" className="text-sm toggle-switch" />
                        </div>
                    </div>
                    <button className="w-full text-sm bg-blue-600 text-white py-2 cursor-pointer font-medium hover:bg-blue-700 transition">SAVE CHANGES</button>
                </div>
            </div>
        </div>
    );
}
