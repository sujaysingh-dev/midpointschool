import { useState } from "react";

export default function Event() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [events, setEvents] = useState([]);

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Add Event
    const handleAddEvent = () => {
        if (!title || !date || !time || !description) {
            alert("Please fill out all fields");
            return;
        }

        const newEvent = {
            id: Date.now(),
            title,
            date,
            time,
            description,
            imagePreview,
        };

        setEvents([...events, newEvent]);

        // Clear the form
        setTitle("");
        setDate("");
        setTime("");
        setDescription("");
        setImage(null);
        setImagePreview(null);
    };

    // Delete Event
    const handleDelete = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            
            <h1 className="text-lg font-semibold text-gray-800 mb-6">EVENT MANAGEMENT</h1>

            {/* Create Event Form */}
            <div className="bg-white p-2 md:p-6 shadow mb-8">
                <h2 className="text-xl font-medium text-gray-800 mb-4">Create New Event</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-gray-700">Event Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Sports Day, Annual Function..." className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-700">Event Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-700">Event Time</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-700">Event Image</label>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full mt-1 text-sm border py-2 cursor-pointer"/>
                        {imagePreview && ( <img src={imagePreview} alt="Event" className="mt-2 w-24 h-24 object-cover border" />)}
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-sm text-gray-700">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write something about the event..." className="text-sm w-full mt-1 px-3 py-2 border focus:ring focus:ring-blue-300" rows={3}></textarea>
                </div>
                <button onClick={handleAddEvent} className="mt-5 bg-blue-600 text-sm cursor-pointer text-white px-6 py-2 hover:bg-blue-700 transition">ADD EVENTS</button>
            </div>

            {/* Event List */}
            <div className="bg-white p-2 md:p-6 shadow ">
                <h2 className="text-xl font-medium text-gray-800 mb-4">Upcoming Events</h2>

                {events.length === 0 ? (
                    <p className="text-gray-600">No events added yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-3 border">Image</th>
                                    <th className="p-3 border">Title</th>
                                    <th className="p-3 border">Date</th>
                                    <th className="p-3 border">Time</th>
                                    <th className="p-3 border">Description</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {events.map((event) => (
                                    <tr key={event.id} className="border-b">
                                        <td className="p-3 border">
                                            {event.imagePreview ? (
                                                <img
                                                    src={event.imagePreview}
                                                    className="w-16 h-16 rounded object-cover"
                                                />
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td className="p-3 border">{event.title}</td>
                                        <td className="p-3 border">{event.date}</td>
                                        <td className="p-3 border">{event.time}</td>
                                        <td className="p-3 border">{event.description}</td>
                                        <td className="p-3 border">
                                            <button className="text-blue-600 mr-4 hover:underline">Edit </button>
                                            <button className="text-red-600 hover:underline" onClick={() => handleDelete(event.id)}>Delete</button>
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
