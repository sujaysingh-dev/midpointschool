export default function Subjects() {
    const subjects = [
        { name: "Mathematics", class: "5A", hours: 6 },
        { name: "Science", class: "6B", hours: 5 }
    ];

    return (
        <div className="p-6 bg-gray-100 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6 uppercase">
                Assigned Subjects
            </h1>

            <div className="grid md:grid-cols-2 gap-4">
                {subjects.map((sub, index) => (
                    <div key={index} className="bg-white border shadow p-4">
                        <h2 className="font-semibold">{sub.name}</h2>
                        <p className="text-gray-600">Class: {sub.class}</p>
                        <p className="text-gray-600">Weekly Hours: {sub.hours}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
