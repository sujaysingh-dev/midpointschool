export default function Setting() {
    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">Settings</h1>
            <div className="bg-white border border-gray-300 shadow-md p-6 max-w-md">
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">Old Password</label>
                        <input type="text" className="w-full border p-2" placeholder="Old password" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">New Password</label>
                        <input type="email" className="w-full border p-2" placeholder="New password" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                        <input type="password" className="w-full border p-2" placeholder="Confirm password" />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 uppercase cursor-pointer">Save Changes</button>
                </form>
            </div>
        </div>
    );
}
