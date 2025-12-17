import { useState } from "react";
import { useNavigate } from "react-router-dom";
import principalSignature from "/principal_signature.jpg";
import "./receiptPrint.css";

export default function PaymentStaffHistory() {
    const navigate = useNavigate();

    // Example staff payment history data
    const [paymentHistory] = useState([
        {
            receiptNo: "STF-REC-001",
            date: "15/12/2025",
            staffId: "STF-001",
            staffName: "John Doe",
            designation: "Teacher",
            department: "Science",
            baseSalary: 5000,
            advancePaid: 2000,
            dueAmount: 3000,
            mobile: "9471662420",
        },
        {
            receiptNo: "STF-REC-002",
            date: "10/12/2025",
            staffId: "STF-002",
            staffName: "Mary Jane",
            designation: "Administrator",
            department: "Admin",
            baseSalary: 6000,
            advancePaid: 4000,
            dueAmount: 2000,
            mobile: "9471662421",
        },
    ]);

    const [whatsappNumber, setWhatsappNumber] = useState("");

    // Generate WhatsApp message for staff payment
    const generateWhatsappMessage = (payment) => {
        return `STAFF PAYMENT RECEIPT
Receipt No: ${payment.receiptNo}
Date: ${payment.date}

Staff ID: ${payment.staffId}
Staff Name: ${payment.staffName}
Designation: ${payment.designation}
Department: ${payment.department}

Base Salary: ₹${payment.baseSalary}
Advance Paid: ₹${payment.advancePaid}
Due Amount: ₹${payment.dueAmount}

Authorized Signature`;
    };

    const sendWhatsapp = (mobile, payment) => {
        if (!mobile) {
            alert("Please enter WhatsApp number with country code (e.g. 919876543210)");
            return;
        }
        const message = encodeURIComponent(generateWhatsappMessage(payment));
        const url = `https://wa.me/${mobile}?text=${message}`;
        window.open(url, "_blank");
    };

    const viewReceipt = (receiptNo) => {
        navigate(`/admin_dashboard/payment_staff_receipt/${receiptNo}`);
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">STAFF PAYMENT HISTORY</h1>

            <div className="bg-white shadow p-4 md:p-6">
                <table className="w-full border-collapse border text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-3 py-2 text-left">Receipt No</th>
                            <th className="border px-3 py-2 text-left">Date</th>
                            <th className="border px-3 py-2 text-left">Staff Name</th>
                            <th className="border px-3 py-2 text-left">Designation</th>
                            <th className="border px-3 py-2 text-left">Department</th>
                            <th className="border px-3 py-2 text-right">Base Salary</th>
                            <th className="border px-3 py-2 text-right">Paid</th>
                            <th className="border px-3 py-2 text-right">Due</th>
                            <th className="border px-3 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((payment, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border px-3 py-2">{payment.receiptNo}</td>
                                <td className="border px-3 py-2">{payment.date}</td>
                                <td className="border px-3 py-2">{payment.staffName}</td>
                                <td className="border px-3 py-2">{payment.designation}</td>
                                <td className="border px-3 py-2">{payment.department}</td>
                                <td className="border px-3 py-2 text-right">₹{payment.baseSalary}</td>
                                <td className="border px-3 py-2 text-right">₹{payment.advancePaid}</td>
                                <td className="border px-3 py-2 text-right">₹{payment.dueAmount}</td>
                                <td className="border px-3 py-2 text-center flex flex-col sm:flex-row gap-1 justify-center">
                                    <button
                                        onClick={() => viewReceipt(payment.receiptNo)}
                                        className="bg-blue-600 text-white px-2 py-1 text-xs rounded"
                                    >
                                        View
                                    </button>
                                    <input
                                        type="tel"
                                        placeholder="WhatsApp No"
                                        value={whatsappNumber}
                                        onChange={(e) => setWhatsappNumber(e.target.value)}
                                        className="border px-2 py-1 text-xs rounded w-full sm:w-auto"
                                    />
                                    <button
                                        onClick={() => sendWhatsapp(whatsappNumber, payment)}
                                        className="bg-green-600 text-white px-2 py-1 text-xs rounded"
                                    >
                                        WhatsApp
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-600 text-white px-4 py-2 text-sm cursor-pointer"
                    >
                        BACK
                    </button>
                </div>
            </div>
        </div>
    );
}
