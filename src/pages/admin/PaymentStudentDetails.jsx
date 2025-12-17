import { useNavigate } from "react-router-dom";

export default function PaymentStudentDetails() {
    const navigate = useNavigate();

    // Example student + payment data
    const student = {
        id: 1,
        name: "Alice Johnson",
        father: "Robert Johnson",
        class: "10",
        section: "A",
        mobile: "123-456-7890",
        photo: "https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0",
    };

    const payment = {
        totalFee: 45000,
        paidAmount: 30000,
        dueAmount: 15000,
        lastPaymentDate: "2025-01-15",
        paymentStatus: "Partial",
        paymentMode: "UPI",
        receiptNo: "REC-2025-0123",
    };

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">STUDENT PAYMENT DETAILS</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">

                {/* Student Image */}
                <div className="mb-6">
                    <img src={student.photo} alt={student.name} className="w-32 h-32 border-2 rounded-md border-blue-600 object-cover"/>
                </div>

                {/* Student + Payment Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

                    <Info label="Student Name" value={student.name} />
                    <Info label="Father's Name" value={student.father} />
                    <Info label="Class" value={`${student.class} - ${student.section}`} />
                    <Info label="Mobile" value={student.mobile} />

                    <Info label="Total Fee" value={`₹ ${payment.totalFee}`} />
                    <Info label="Paid Amount" value={`₹ ${payment.paidAmount}`} />
                    <Info label="Due Amount" value={`₹ ${payment.dueAmount}`} />
                    <Info label="Payment Status" value={payment.paymentStatus} />

                    <Info label="Last Payment Date" value={payment.lastPaymentDate} />
                    <Info label="Payment Mode" value={payment.paymentMode} />
                    <Info label="Receipt No" value={payment.receiptNo} />

                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end">

                    <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition text-sm w-full sm:w-auto cursor-pointer">BACK</button>
                    <button onClick={() => navigate("/admin_dashboard/payment_student_history")} className="bg-purple-600 text-white px-4 py-2 hover:bg-purple-700 transition text-sm w-full sm:w-auto cursor-pointer">PAYMENT HISTORY</button>
                    <button onClick={() => navigate("/admin_dashboard/payment_student_receipt")} className="bg-yellow-600 text-white px-4 py-2 hover:bg-yellow-700 transition text-sm w-full sm:w-auto cursor-pointer">RECEIPT</button>
                    <button onClick={() => navigate("/admin_dashboard/payment_student")} className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition text-sm w-full sm:w-auto cursor-pointer">PAY FEE</button>

                </div>

            </div>
        </div>
    );
}

/* ===== Reusable Info Component ===== */
function Info({ label, value }) {
    return (
        <div>
            <p className="font-medium text-gray-700">{label}:</p>
            <p className="text-gray-800 pl-4">{value}</p> {/* 4-space tab spacing */}
        </div>
    );
}
