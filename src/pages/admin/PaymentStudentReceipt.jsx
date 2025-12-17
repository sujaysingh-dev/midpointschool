import { useState } from "react";
import { useNavigate } from "react-router-dom";
import principalSignature from "/principal_signature.jpg";
import "./receiptPrint.css";

export default function PaymentStudentReceipt() {
    const navigate = useNavigate();

    const dateObj = new Date();
    const today = ("0" + dateObj.getDate()).slice(-2) + "/" + ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" + dateObj.getFullYear();

    // Example student receipt data
    const receiptData = {
        receiptNo: "STU-REC-001",
        date: today,
        studentId: "STU-001",
        studentName: "Jane Doe",
        fatherName: "Robert Doe",
        classSectionRoll: "9 - A - 29",
        mobile: "9471662420",
        email: "student@email.com",
        paymentMode: "Cash",
        totalFee: 5000,
        paidAmount: 2000,
        dueAmount: 3000,
    };

    // WhatsApp Number State
    const [whatsappNumber, setWhatsappNumber] = useState(receiptData.mobile);

    // Generate WhatsApp message
    const generateWhatsappMessage = () => {
        return `STUDENT PAYMENT RECEIPT
            Receipt No: ${receiptData.receiptNo}
            Date: ${receiptData.date}

            Student ID: ${receiptData.studentId}
            Student Name: ${receiptData.studentName}
            Father Name: ${receiptData.fatherName}
            Class/Section/Roll: ${receiptData.classSectionRoll}

            Mobile: ${receiptData.mobile}
            Email: ${receiptData.email}
            Payment Mode: ${receiptData.paymentMode}

            Description          Amount (₹)
            Total Fee            ${receiptData.totalFee}
            Paid Amount          ${receiptData.paidAmount}
            Due Amount           ${receiptData.dueAmount}

            Authorized Signature`;
        };

    // Send WhatsApp
    const sendWhatsapp = () => {
        if (!whatsappNumber) {
            alert("Please enter WhatsApp number with country code (e.g. 919876543210)");
            return;
        }
        const message = encodeURIComponent(generateWhatsappMessage());
        const url = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <div id="print-receipt" className="max-w-3xl mx-auto bg-white shadow-lg p-6">
                <div className="flex justify-between items-start border-b pb-4 mb-6">
                    <div>
                        <h1 className="text-xl font-bold">STUDENT PAYMENT RECEIPT</h1>
                        <p className="text-sm text-gray-600">Receipt No: {receiptData.receiptNo}</p>
                        <p className="text-sm text-gray-600">Date: {receiptData.date}</p>
                    </div>
                    <img src="https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0" alt="student" className="w-24 h-24 border rounded object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                        <p><strong>Student ID:</strong> {receiptData.studentId}</p>
                        <p><strong>Student Name:</strong> {receiptData.studentName}</p>
                        <p><strong>Father Name:</strong> {receiptData.fatherName}</p>
                        <p><strong>Class/Section/Roll:</strong> {receiptData.classSectionRoll}</p>
                    </div>
                    <div>
                        <p><strong>Mobile:</strong> {receiptData.mobile}</p>
                        <p><strong>Email:</strong> {receiptData.email}</p>
                        <p><strong>Payment Mode:</strong> {receiptData.paymentMode}</p>
                    </div>
                </div>

                <table className="w-full border-collapse border mb-6 text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-3 py-2 text-left">Description</th>
                            <th className="border px-3 py-2 text-right">Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-3 py-2">Total Fee</td>
                            <td className="border px-3 py-2 text-right">{receiptData.totalFee}</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2">Paid Amount</td>
                            <td className="border px-3 py-2 text-right">{receiptData.paidAmount}</td>
                        </tr>
                        <tr className="font-medium bg-gray-50">
                            <td className="border px-3 py-2">Due Amount</td>
                            <td className="border px-3 py-2 text-right">{receiptData.dueAmount}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-10">
                    <div className="mb-4 sm:mb-0">
                        <p className="text-sm">Authorized Signature</p>
                        <div className="w-40 border-b mt-6">
                            <img src={principalSignature} alt="Signature" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 gap-2 mt-4 sm:mt-0 no-print w-full sm:w-auto">
                        <input type="tel" readOnly placeholder="WhatsApp number (e.g. 919876543210)" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} className="border px-3 py-2 text-sm w-full sm:w-auto flex-1 cursor-pointer"/>
                        <button onClick={sendWhatsapp} className="bg-green-600 text-white px-4 py-2 text-sm w-full sm:w-auto cursor-pointer">Send WhatsApp</button>
                        <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 text-sm w-full sm:w-auto cursor-pointer">PRINT</button>
                        <button onClick={() => navigate(-1)} className="bg-gray-600 text-white px-4 py-2 text-sm w-full sm:w-auto cursor-pointer">BACK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
