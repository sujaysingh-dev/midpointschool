export default function Events() {
    const events = [
        { title: "PTM Meeting", date: "20 Dec 2025" },
        { title: "Annual Day", date: "10 Jan 2026" }
    ];

    return (
        <div className="p-6 bg-gray-100 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6 uppercase">
                School Events
            </h1>

            {events.map((event, index) => (
                <div key={index} className="bg-white border shadow p-4 mb-3">
                    <h2 className="font-semibold">{event.title}</h2>
                    <p className="text-gray-600">{event.date}</p>
                </div>
            ))}
        </div>
    );
}
