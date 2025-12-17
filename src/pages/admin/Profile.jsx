import { useState } from "react";
import profile_image from "/manager.png"
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "Sujay Singh",
        email: "Sujaysingh@example.com",
        phone: "9471662024",
        address: "Patna, Bihar, India, PIN - 803202",
        photo: profile_image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-800 mb-6 uppercase">Admin Profile</h1>

            <div className="bg-white shadow flex flex-col lg:flex-row gap-6 lg:gap-10 p-2 md:p-6 mb-8">
                {/* Profile Photo */}
                <div className="flex flex-col items-center">
                    <img src={profile.photo} alt="Profile" className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-200"/>
                    <label className="cursor-pointer">
                        <div className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition text-center text-sm uppercase">Change Photo</div>
                        <input type="file" accept="image/*" className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setProfile({ ...profile, photo: URL.createObjectURL(file) });
                                }
                            }}
                        />
                    </label>
                </div>

                {/* Profile Info */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
                        <FaUser className="text-gray-500 text-xl" />
                        <input type="text"  name="name" value={profile.name} onChange={handleChange} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name"/>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
                        <FaEnvelope className="text-gray-500 text-xl" />
                        <input type="email" name="email" value={profile.email} onChange={handleChange}  className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"  placeholder="Email"/>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
                        <FaPhone className="text-gray-500 text-xl" />
                        <input  type="text" name="phone" value={profile.phone} onChange={handleChange} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Phone"/>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
                        <FaMapMarkerAlt className="text-gray-500 text-xl" />
                        <input type="text"  name="address" value={profile.address} onChange={handleChange} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Address" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button onClick={handleBack} className="w-full sm:w-auto bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition cursor-pointer">Back</button>
                        <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition uppercase cursor-pointer">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
