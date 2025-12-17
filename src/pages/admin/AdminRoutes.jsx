import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Dashboard from "./Dashboard";
import Teacher from "./Teacher";
import Student from "./Student";
import Notice from "./Notice";
import Event from "./Event"
import Exam from "./Exam"
import Setting from "./Setting"
import StudentDetails from "./StudentDetails";
import StudentAdd from "./StudentAdd";
import StudentUpdate from "./StudentUpdate";
import StudentIdCard from "./StudentIdCard";
import Classes from "./Classes";
import TeacherAdd from "./TeacherAdd";
import TeacherDetails from "./TeacherDetails";
import TeacherUpdate from "./TeacherUpdate";
import TeacherIdCard from "./TeacherIdCard";
import ClassAdd from "./ClassAdd";
import ClassDetails from "./ClassDetails";
import ClassUpdate from "./ClassUpdate";
import Subject from "./Subjects";
import SubjectDetails from "./SubjectDetails";
import SubjectUpdate from "./SubjectUpdate";
import SubjectAdd from "./SubjectAdd";
import Payment from "./Payments";
import PaymentStaffDetails from "./PaymentStaffDetails";
import PaymentStudentDetails from "./PaymentStudentDetails";
import PaymentStaff from "./PaymentStaff";
import PaymentStudent from "./PaymentStudent";
import PaymentStaffReceipt from "./PaymentStaffReceipt";
import PaymentStudentReceipt from "./PaymentStudentReceipt";
import PaymentStaffHistory from "./PaymentStaffHistory";
import PaymentStudentHistory from "./PaymentStudentHistory";
import TeacherAttendance from "./TeacherAttendance";
import ErrorPage from "../ErrorPage";
import Profile from "./Profile";


export default function AdminRoutes() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full overflow-hidden">
                <Header />
                <div className="h-[92vh]">
                    <Routes>
                        <Route index element={<Dashboard />} />

                        <Route path="profile" element={<Profile/>} />

                        <Route path="classes" element={<Classes />} />
                        <Route path="class_add" element={<ClassAdd />} />
                        <Route path="class_details" element={<ClassDetails />} />
                        <Route path="class_update" element={<ClassUpdate />} />

                        <Route path="subjects" element={<Subject />} />
                        <Route path="subject_add" element={<SubjectAdd />} />
                        <Route path="subject_details" element={<SubjectDetails />} />
                        <Route path="subject_update" element={<SubjectUpdate />} />

                        <Route path="teachers" element={<Teacher />} />
                        <Route path="teacher_add" element={<TeacherAdd />} />
                        <Route path="teacher_details" element={<TeacherDetails />} />
                        <Route path="teacher_update" element={<TeacherUpdate />} />
                        <Route path="teacher_id_card" element={<TeacherIdCard />} />

                        <Route path="students" element={<Student />} />
                        <Route path="student_add" element={<StudentAdd />} />
                        <Route path="student_details" element={<StudentDetails />} />
                        <Route path="student_update" element={<StudentUpdate />} />
                        <Route path="student_id_card" element={<StudentIdCard />} />

                        <Route path="notice" element={<Notice />} />
                        <Route path="event" element={<Event />} />
                        <Route path="exam" element={<Exam />} />
                        <Route path="setting" element={<Setting />} />

                        <Route path="payment" element={<Payment />} />
                        <Route path="payment_staff_details" element={<PaymentStaffDetails />} />
                        <Route path="payment_student_details" element={<PaymentStudentDetails />} />
                        <Route path="payment_staff" element={<PaymentStaff />} />
                        <Route path="payment_student" element={<PaymentStudent />} />
                        <Route path="payment_staff_receipt" element={<PaymentStaffReceipt />} />
                        <Route path="payment_student_receipt" element={<PaymentStudentReceipt />} />
                        <Route path="payment_staff_history" element={<PaymentStaffHistory />} />
                        <Route path="payment_student_history" element={<PaymentStudentHistory />} />

                        <Route path="attendance" element={<TeacherAttendance/>} />
                        <Route path="*" element={<ErrorPage/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

