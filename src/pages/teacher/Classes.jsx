export default function Classes() {
    const classes = [
        { name: "Class 5A", section: "A", strength: 40 },
        { name: "Class 6B", section: "B", strength: 38 }
    ];

    return (
        <div className="p-6 bg-gray-100 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6 uppercase">
                My Classes
            </h1>

            <table className="w-full bg-white border shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3 text-left">Class</th>
                        <th className="p-3 text-left">Section</th>
                        <th className="p-3 text-left">Students</th>
                    </tr>
                </thead>

                <tbody>
                    {classes.map((cls, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-3 py-1">{cls.name}</td>
                            <td className="px-3 py-1">{cls.section}</td>
                            <td className="px-3 py-1">{cls.strength}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
