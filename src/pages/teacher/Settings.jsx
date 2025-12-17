import { useState } from "react";

export default function Settings() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUpdatePassword = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert("Please fill all fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match.");
            return;
        }

        // Implement password update logic here (API call)
        alert("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">SETTING</h1>
            <div className="bg-white shadow-md p-4 md:p-6 mb-8 w-full max-w-md">

                {/* Current Password */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Current Password</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Current Password"
                        className="border p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* New Password */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="border p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm New Password"
                        className="border p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Update Button */}
                <button
                    onClick={handleUpdatePassword}
                    className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 w-full cursor-pointer"
                >
                    Update Password
                </button>
            </div>
        </div>
    );
}
