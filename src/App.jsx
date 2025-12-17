import { Route, Routes } from "react-router-dom";
import Login from "./pages/index/Login";
import Register from "./pages/index/Register";
import AdminRoutes from "./pages/admin/AdminRoutes";
import TeacherRoutes from "./pages/teacher/TeacherRoutes";
import StudentRoutes from "./pages/student/StudentRoutes";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/index/Landing";

export default function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />


                <Route path="/admin_dashboard/*" element={<AdminRoutes/>} />
                <Route path="/teacher_dashboard/*" element={<TeacherRoutes/>} /> 
                <Route path="/student_dashboard/*" element={<StudentRoutes/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </div>
    )
}