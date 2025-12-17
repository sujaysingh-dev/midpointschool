import { useState } from "react";

export default function Notice() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [noticeText, setNoticeText] = useState("");
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState("");
    const [issuedBy, setIssuedBy] = useState("");
    const [priority, setPriority] = useState("");
    const [validUntil, setValidUntil] = useState("");
    const [audience, setAudience] = useState("");

    const [notices, setNotices] = useState([]);

    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
        }
    };

    const handleAddNotice = () => {
        if (!title || !date || !noticeText || !category || !issuedBy || !priority || !validUntil || !audience) {
            alert("Please fill all required fields");
            return;
        }

        const newNotice = {
            id: Date.now(),
            title,
            date,
            noticeText,
            fileName: file ? file.name : null,
            category,
            issuedBy,
            priority,
            validUntil,
            audience
        };

        setNotices([...notices, newNotice]);

        // Clear fields
        setTitle(""); setDate(""); setNoticeText(""); setFile(null);
        setCategory(""); setIssuedBy(""); setPriority(""); setValidUntil(""); setAudience("");
    };

    const handleDelete = (id) => {
        setNotices(notices.filter(notice => notice.id !== id));
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">NOTICE MANAGEMENT</h1>
            {/* Create Notice Section */}
            <div className="bg-white p-2 md:p-6 shadow mb-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">Add New Notice</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-gray-700">Notice Title *</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Holiday Notice, Exam Notice…" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Date *</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Category *</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300">
                            <option value="">Select Category</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Exam">Exam</option>
                            <option value="Event">Event</option>
                            <option value="Fee">Fee</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Issued By *</label>
                        <input type="text" value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)} placeholder="Admin, Principal, Teacher" className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Priority *</label>
                        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300">
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Valid Until *</label>
                        <input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Audience *</label>
                        <select value={audience} onChange={(e) => setAudience(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300">
                            <option value="">Select Audience</option>
                            <option value="All Students">All Students</option>
                            <option value="Specific Classes">Specific Classes</option>
                            <option value="Teachers">Teachers</option>
                            <option value="Parents">Parents</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm text-gray-700">Upload File (optional)</label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-full mt-1 text-sm border px-4 py-2 cursor-pointer"/>
                        {file && ( <p className="text-gray-600 text-sm mt-1">Selected File: <span className="font-medium">{file.name}</span></p> )}
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm text-gray-700">Notice Description *</label>
                        <textarea value={noticeText} onChange={(e) => setNoticeText(e.target.value)} placeholder="Write the notice details..." rows={4} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"></textarea>
                    </div>
                </div>
                <button onClick={handleAddNotice} className="mt-5 text-sm cursor-pointer bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition">ADD NOTICE</button>
            </div>

            {/* Notice List */}
            <div className="bg-white p-2 md:p-6 shadow">
                <h2 className="text-xl font-medium text-gray-800 mb-4">Notices</h2>

                {notices.length === 0 ? (
                    <p className="text-gray-600">No notices added yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-3 border">Title</th>
                                    <th className="p-3 border">Date</th>
                                    <th className="p-3 border">Category</th>
                                    <th className="p-3 border">Issued By</th>
                                    <th className="p-3 border">Priority</th>
                                    <th className="p-3 border">Valid Until</th>
                                    <th className="p-3 border">Audience</th>
                                    <th className="p-3 border">Description</th>
                                    <th className="p-3 border">File</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notices.map(notice => (
                                    <tr key={notice.id} className="border-b">
                                        <td className="p-3 border">{notice.title}</td>
                                        <td className="p-3 border">{notice.date}</td>
                                        <td className="p-3 border">{notice.category}</td>
                                        <td className="p-3 border">{notice.issuedBy}</td>
                                        <td className="p-3 border">{notice.priority}</td>
                                        <td className="p-3 border">{notice.validUntil}</td>
                                        <td className="p-3 border">{notice.audience}</td>
                                        <td className="p-3 border">{notice.noticeText}</td>
                                        <td className="p-3 border">{notice.fileName || "No File"}</td>
                                        <td className="p-3 border">
                                            <button className="text-blue-600 mr-4 hover:underline">Edit</button>
                                            <button
                                                className="text-red-600 hover:underline"
                                                onClick={() => handleDelete(notice.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
