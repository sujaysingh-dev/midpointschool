import { useState } from "react";

export default function Notices() {
    const [notice, setNotice] = useState("");

    return (
        <div className="p-6 bg-gray-100 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6 uppercase">Class Notices</h1>
            <textarea className="w-full border p-3 mb-3" rows="4" placeholder="Write notice..." onChange={(e) => setNotice(e.target.value)}/>

            <button className="bg-green-600 text-white px-4 py-2 rounded">Publish Notice</button>
        </div>
    );
}
