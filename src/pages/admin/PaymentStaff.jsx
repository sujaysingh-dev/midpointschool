import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentStaff() {
    const navigate = useNavigate();

    const today = new Date().toISOString().split("T")[0];

    const [baseAmount, setBaseAmount] = useState("");
    const [advanceAmount, setAdvanceAmount] = useState("");

    const dueAmount = baseAmount && advanceAmount ? Number(baseAmount) - Number(advanceAmount) : "";

    const handleSubmit = (e) => {
        e.preventDefault();
        const paymentData = { baseAmount, advanceAmount, dueAmount, paymentDate: today };
        console.log("Payment Data:", paymentData);
        alert("Payment saved successfully!");
        navigate("/admin_dashboard/payment_staff_receipt");
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">
            <h1 className="text-lg font-semibold text-gray-800 mb-6">PAYMENT STAFF</h1>

            <div className="bg-white shadow p-4 md:p-6 mb-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="md:col-span-2 flex justify-center">
                        <img src="https://th.bing.com/th/id/R.b60ce78c14a656b51adcb57f476e5f6a?rik=srJw9abm%2b3UnSA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f27900000%2fJack-Sparrow-pirates-of-the-caribbean-27970599-1024-768.jpg&ehk=Ia2qABWFKfJeG6uTjVWePgJN3F5pC0EORxJNRjnkgb8%3d&risl=&pid=ImgRaw&r=0" alt="student" className="w-28 h-28 border rounded object-cover" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Staff ID</label>
                        <input type="text" readOnly placeholder="STF-001" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Staff Name</label>
                        <input type="text" readOnly placeholder="Staff Name" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Father Name</label>
                        <input type="text" readOnly placeholder="Father Name" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Designation / Department</label>
                        <input type="text" readOnly placeholder="Teacher / Science" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile No</label>
                        <input type="tel" readOnly placeholder="9876543210" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email ID</label>
                        <input type="email" readOnly placeholder="staff@email.com" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Payment Mode</label>
                        <select className="w-full border px-2 py-2 text-sm">
                            <option value="">Select Mode</option>
                            <option>Cash</option>
                            <option>UPI</option>
                            <option>Bank Transfer</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Base Salary</label>
                        <input type="number" readOnly value={baseAmount} onChange={(e) => setBaseAmount(e.target.value)} placeholder="Total Salary" className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Paid Amount</label>
                        <input type="number" value={advanceAmount} onChange={(e) => setAdvanceAmount(e.target.value)} placeholder="Paid Amount" className="w-full border px-3 py-2 text-sm" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Due Amount</label>
                        <input type="number" value={dueAmount} readOnly className="w-full border px-3 py-2 text-sm bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Payment Date</label>
                        <input type="date" defaultValue={today} className="w-full border px-3 py-2 text-sm" />
                    </div>

                </form>

                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 text-sm cursor-pointer">BACK</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 text-sm cursor-pointer">SAVE PAYMENT</button>
                </div>

            </div>
        </div>
    );
}
