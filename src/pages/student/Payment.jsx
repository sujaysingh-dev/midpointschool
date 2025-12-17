import React from "react";
import { AiFillCreditCard } from "react-icons/ai";

export default function Payment() {
    const payments = [
        { month: "January", status: "Paid" },
        { month: "February", status: "Pending" },
        { month: "March", status: "Paid" },
    ];

    return (
        <div className="bg-gray-100 md:p-6 p-2 h-[92vh] overflow-y-auto">
            <h1 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase">
                Payment
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {payments.map((pay, index) => (
                    <div
                        key={index}
                        className={`bg-white border shadow-md p-4 ${
                            pay.status === "Paid" ? "border-green-400" : "border-red-400"
                        }`}
                    >
                        <h2 className="text-xl font-semibold text-gray-700">{pay.month}</h2>
                        <p
                            className={`mt-1 font-semibold ${
                                pay.status === "Paid" ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {pay.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
