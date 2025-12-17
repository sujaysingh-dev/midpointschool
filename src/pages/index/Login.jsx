import { ImHome } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dummyData = [
        { username: "admin", password: "1234", role: "admin" },
        { username: "student", password: "1234", role: "student" },
        { username: "teacher", password: "1234", role: "teacher" }
    ];

    const back = () => {
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = dummyData.find(
            (u) => u.username === username && u.password === password
        );

        if (!user) {
            toast.error("Invalid username or password");
            return;
        }

        localStorage.setItem("role", user.role);
        localStorage.setItem("isLoggedIn", true);

        if (user.role === "admin") {
            navigate("/admin_dashboard");
        } else if (user.role === "teacher") {
            navigate("/teacher_dashboard");
        } else if (user.role === "student") {
            navigate("/student_dashboard");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center p-2">
            <div className="bg-slate-50 p-4 w-100 sm:w-120 border border-slate-200">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <button onClick={back} className="text-2xl cursor-pointer"><ImHome /></button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-10">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border px-3 py-2"/>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-3 py-2"/>
                    </div>
                    <button className="bg-slate-800 text-white w-full px-3 py-2 mt-3 cursor-pointer">Login</button>
                </form>
                
                <p className="mt-2">I don't have an account?{" "}<Link to={"/register"} className="text-blue-500 hover:underline">Register</Link></p>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
        </div>
    );
}
