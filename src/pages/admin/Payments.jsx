import { FaPlus, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillCreditCard } from "react-icons/ai";

export default function Payment() {

    // ================= FILTER STATES =================
    const [staffFilter, setStaffFilter] = useState("");
    const [studentFilter, setStudentFilter] = useState("");

    // ================= STAFF PAYMENT DATA =================
    const staffPayments = [
        {
            id: 1,
            name: "Mr. Adams",
            designation: "Math Teacher",
            department: "Mathematics",
            joiningDate: "12-06-2021",
            salaryMonth: "August 2025",
            status: "Paid"
        },
        {
            id: 2,
            name: "Ms. Brown",
            designation: "Science Teacher",
            department: "Science",
            joiningDate: "20-03-2020",
            salaryMonth: "August 2025",
            status: "Pending"
        },
        {
            id: 3,
            name: "Mrs. Clark",
            designation: "English Teacher",
            department: "English",
            joiningDate: "15-01-2019",
            salaryMonth: "August 2025",
            status: "Paid"
        }
    ];

    // ================= STUDENT PAYMENT DATA =================
    const studentPayments = [
        {
            id: 101,
            name: "Rahul Sharma",
            classSection: "6 - A",
            mobile: "9876543210",
            classTeacher: "Mr. Adams",
            status: "Paid"
        },
        {
            id: 102,
            name: "Ananya Singh",
            classSection: "7 - B",
            mobile: "9123456780",
            classTeacher: "Ms. Brown",
            status: "Pending"
        },
        {
            id: 103,
            name: "Amit Verma",
            classSection: "8 - A",
            mobile: "9988776655",
            classTeacher: "Mrs. Clark",
            status: "Paid"
        }
    ];

    // ================= FILTER LOGIC =================
    const filteredStaff = staffPayments.filter(item =>
        item.status.toLowerCase().includes(staffFilter.toLowerCase())
    );

    const filteredStudents = studentPayments.filter(item =>
        item.status.toLowerCase().includes(studentFilter.toLowerCase())
    );

    return (
        <div className="bg-gray-100 h-[92vh] p-2 md:p-6 overflow-y-auto">

            {/* ================= HEADER ================= */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
                <h1 className="text-lg font-semibold text-gray-800">PAYMENT MANAGEMENT</h1>

                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm gap-1 sm:gap-2">
                        <label className="whitespace-nowrap font-bold">Staff Filter:</label>
                        <input type="text" placeholder="Paid / Pending" className="border px-2 py-1 w-full sm:w-auto" value={staffFilter} onChange={(e) => setStaffFilter(e.target.value)}/>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm gap-1 sm:gap-2">
                        <label className="whitespace-nowrap font-bold">Student Filter:</label>
                        <input type="text" placeholder="Paid / Pending" className="border px-2 py-1 w-full sm:w-auto" value={studentFilter} onChange={(e) => setStudentFilter(e.target.value)} />
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-4">

                {/* ================= STAFF HISTORY ================= */}
                <div className="md:w-1/2 w-full">
                    <div className="flex items-center gap-4 mb-1">
                        <h2 className="text-sm font-semibold">STAFF</h2>
                    </div>

                    <div className="bg-white max-h-[79vh] overflow-x-auto shadow">
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-200 sticky top-0 text-nowrap">
                                <tr>
                                    <th className="p-2">ID</th>
                                    <th className="p-2">Staff Name</th>
                                    <th className="p-2">Designation</th>
                                    <th className="p-2">Department</th>
                                    <th className="p-2">Joining Date</th>
                                    <th className="p-2">Salary Month</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStaff.length > 0 ? (
                                    filteredStaff.map((staff) => (
                                        <tr key={staff.id} className="border-t hover:bg-gray-50 text-nowrap">
                                            <td className="px-3 py-1">{staff.id}</td>
                                            <td className="px-3 py-1">{staff.name}</td>
                                            <td className="px-3 py-1">{staff.designation}</td>
                                            <td className="px-3 py-1">{staff.department}</td>
                                            <td className="px-3 py-1">{staff.joiningDate}</td>
                                            <td className="px-3 py-1">{staff.salaryMonth}</td>
                                            <td className={`px-3 py-1 font-medium ${staff.status === "Paid" ? "text-green-600" : "text-red-600"}`}>{staff.status}</td>
                                            <td className="px-2 py-1 flex gap-2">
                                                <Link to={`/admin_dashboard/payment_staff_details`} className="border border-green-600 text-green-600 bg-green-100 px-2 py-1"><FaEye /></Link>
                                                <Link to={`/admin_dashboard/payment_staff`} className="border border-blue-600 text-blue-600 bg-blue-100 px-2 py-1"><AiFillCreditCard /></Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center py-4 text-gray-500">No records found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ================= STUDENT HISTORY ================= */}
                <div className="md:w-1/2 w-full">
                    <div className="flex items-center gap-4 mb-1">
                        <h2 className="text-sm font-semibold">STUDENT</h2>
                    </div>

                    <div className="bg-white max-h-[79vh] overflow-x-auto shadow">
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-200 sticky top-0 text-nowrap">
                                <tr>
                                    <th className="p-2">ID</th>
                                    <th className="p-2">Student Name</th>
                                    <th className="p-2">Class - Section</th>
                                    <th className="p-2">Mobile No</th>
                                    <th className="p-2">Class Teacher</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.length > 0 ? (
                                    filteredStudents.map((student) => (
                                        <tr key={student.id} className="border-t hover:bg-gray-50 text-nowrap">
                                            <td className="px-3 py-1">{student.id}</td>
                                            <td className="px-3 py-1">{student.name}</td>
                                            <td className="px-3 py-1">{student.classSection}</td>
                                            <td className="px-3 py-1">{student.mobile}</td>
                                            <td className="px-3 py-1">{student.classTeacher}</td>
                                            <td className={`px-3 py-1 font-medium ${student.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                                                {student.status}
                                            </td>
                                            <td className="px-2 py-1 flex gap-2">
                                                <Link to="/admin_dashboard/payment_student_details" className="border border-green-600 text-green-600 bg-green-100 px-2 py-1"><FaEye /></Link>
                                                <Link to={`/admin_dashboard/payment_student`} className="border border-blue-600 text-blue-600 bg-blue-100 px-2 py-1"><AiFillCreditCard /></Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4 text-gray-500">No records found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
