import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Classes from "./Classes";
import Subjects from "./Subjects";
import Students from "./Students";
import Attendance from "./Attendance";
import Exams from "./Exams";
import Notices from "./Notices";
import Events from "./Events";
import Settings from "./Settings";
import ErrorPage from "../ErrorPage"

export default function TeacherRoutes() {
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
                        <Route path="students" element={<Students/>} />
                        <Route path="attendance" element={<Attendance/>} />
                        <Route path="exam" element={<Exams/>} />
                        <Route path="notice" element={<Notices/>} />
                        <Route path="event" element={<Events/>} />
                        <Route path="setting" element={<Settings/>} />
                        <Route path="*" element={<ErrorPage/>} />
                    </Routes>
                </div>
            </div>

        </div>
    )
}