import { useEffect, useState } from "react";
import principalSignature from "/principal_signature.jpg"

export default function StudentIdCard() {
    const [showCard, setShowCard] = useState(false);

    const student = {
        name: "Jack Sparrow",
        id: "STU-123456",
        class: "10th Grade",
        section: "A",
        dob: "12 Aug 2010",
        bloodGroup: "O+",
        phone: "+91 8743546778",
        address: "Street-20, Barahiya, PIN - 811302",
        photo: "https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0",
        school: "MID POINT SCHOOL",
        validTill: "2026"
    };

    useEffect(() => {
        // Trigger animation on mount
        setShowCard(true);
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <div className="w-full">
                <h1 className="text-lg font-semibold text-gray-800 mb-6">STUDENT ID CARD</h1>
            </div>

            {/* ID Card with animation */}
            <div className={`bg-white w-[350px] shadow-lg overflow-hidden border mt-10 transition-transform duration-700 ease-out ${showCard ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
                <div className="bg-blue-700 text-white p-4 text-center">
                    <h1 className="text-2xl font-bold">{student.school}</h1>
                    <p className="text-xs tracking-wide">STUDENT IDENTITY CARD</p>
                </div>

                <div className="p-4">
                    <div className="flex justify-center mb-4">
                        <img src={student.photo} alt="Student" className="w-24 h-24 rounded-md border-2 border-blue-600 object-cover"/>
                    </div>

                    <h2 className="text-center text-xl font-bold text-gray-800">{student.name}</h2>

                    <p className="text-center text-sm text-gray-600 mb-4">Student ID: {student.id}</p>

                    <div className="text-sm text-gray-700 grid grid-cols-2 gap-y-2">
                        <span className="font-medium">Class</span>
                        <span>{student.class} - {student.section}</span>

                        <span className="font-medium">Date of Birth</span>
                        <span>{student.dob}</span>

                        <span className="font-medium">Blood Group</span>
                        <span>{student.bloodGroup}</span>

                        <span className="font-medium">Phone</span>
                        <span>{student.phone}</span>

                        <span className="font-medium">Address</span>
                        <span>{student.address}</span>
                    </div>
                </div>

                <div className="border-t px-4 pb-2 text-xs text-gray-600">
                    <div className="flex justify-between items-center">
                        <div>
                            <p>Valid Till</p>
                            <p className="font-semibold">{student.validTill}</p>
                        </div>

                        <div className="text-center">
                            <img src={principalSignature} alt="Signature" className="w-20 h-10 mx-auto mb-1 object-contain"/>
                            <p>Signature</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex gap-3 print:hidden">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition cursor-pointer">BACK</button>
                <button onClick={handlePrint} className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">PRINT ID CARD</button>
            </div>
        </div>
    );
}
