import { useState } from "react";
import { useNavigate } from "react-router-dom";
import principalSignature from "/principal_signature.jpg"
import "./receiptPrint.css";

export default function PaymentStaffReceipt() {
    const navigate = useNavigate();

    const dateObj = new Date();
    const today = ("0" + dateObj.getDate()).slice(-2) + "/" + ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" + dateObj.getFullYear();


    // Example receipt data
    const receiptData = {
        receiptNo: "STF-REC-001",
        date: today,
        staffId: "STF-001",
        staffName: "John Doe",
        fatherName: "Robert Doe",
        designation: "Teacher",
        department: "Science",
        mobile: "9471662420",
        email: "staff@email.com",
        paymentMode: "Cash",
        baseSalary: 5000,
        advancePaid: 2000,
        dueAmount: 3000,
    };

    
    // WhatsApp Number State (user can enter number)
    const [whatsappNumber, setWhatsappNumber] = useState(receiptData.mobile);

    // Create WhatsApp message text from receiptData
    const generateWhatsappMessage = () => {
        return `STAFF PAYMENT RECEIPT
            Receipt No: ${receiptData.receiptNo}
            Date: ${receiptData.date}

            Staff ID: ${receiptData.staffId}
            Staff Name: ${receiptData.staffName}
            Father Name: ${receiptData.fatherName}
            Designation: ${receiptData.designation}

            Department: ${receiptData.department}
            Mobile: ${receiptData.mobile}
            Email: ${receiptData.email}
            Payment Mode: ${receiptData.paymentMode}

            Description          Amount (₹)
            Base Salary          ${receiptData.baseSalary}
            Advance Paid         ${receiptData.advancePaid}
            Due Amount           ${receiptData.dueAmount}

            Authorized Signature`;
    };

    // Handle sending WhatsApp message
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
                        <h1 className="text-xl font-bold">STAFF PAYMENT RECEIPT</h1>
                        <p className="text-sm text-gray-600">Receipt No: {receiptData.receiptNo}</p>
                        <p className="text-sm text-gray-600">Date: {receiptData.date}</p>
                    </div>
                    <img src="https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0" alt="staff" className="w-24 h-24 border rounded object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                        <p><strong>Staff ID:</strong> {receiptData.staffId}</p>
                        <p><strong>Staff Name:</strong> {receiptData.staffName}</p>
                        <p><strong>Father Name:</strong> {receiptData.fatherName}</p>
                        <p><strong>Designation:</strong> {receiptData.designation}</p>
                    </div>
                    <div>
                        <p><strong>Department:</strong> {receiptData.department}</p>
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
                            <td className="border px-3 py-2">Base Salary</td>
                            <td className="border px-3 py-2 text-right">{receiptData.baseSalary}</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2">Paid Amount</td>
                            <td className="border px-3 py-2 text-right">{receiptData.advancePaid}</td>
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
                        <input type="tel" readOnly placeholder="WhatsApp number (e.g. 919876543210)" value={whatsappNumber}  onChange={(e) => setWhatsappNumber(e.target.value)} className="border px-3 py-2 text-sm w-full sm:w-auto flex-1 cursor-pointer"/>
                        <button onClick={sendWhatsapp} className="bg-green-600 text-white px-4 py-2 text-sm w-full sm:w-auto cursor-pointer">Send WhatsApp</button>
                        <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 text-sm w-full sm:w-auto cursor-pointer">PRINT</button>
                        <button onClick={() => navigate(-1)} className="bg-gray-600 text-white px-4 py-2 text-sm w-full sm:w-auto cursor-pointer">BACK</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
