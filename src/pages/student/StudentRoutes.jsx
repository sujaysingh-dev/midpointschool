import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Classes from "./Classes";
import Subjects from "./Subjects";
import Attendance from "./Attendance";
import Payment from "./Payment";
import Notice from "./Notice";
import Event from "./Events";
import Exam from "./Exam";
import Setting from "./Setting";
import ErrorPage from "../ErrorPage"

export default function StudentRoutes() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full overflow-hidden">
                <Header />
                <div className="h-[92vh]">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="classes" element={<Classes/>} />
                        <Route path="subjects" element={<Subjects/>} />
                        <Route path="attendance" element={<Attendance/>} />
                        <Route path="payment" element={<Payment/>} />
                        <Route path="notice" element={<Notice/>} />
                        <Route path="event" element={<Event/>} />
                        <Route path="exam" element={<Exam/>} />
                        <Route path="setting" element={<Setting/>} />
                        <Route path="*" element={<ErrorPage/>} />
                    </Routes>
                </div>
            </div>

        </div>
    )
}