import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic validation
        if (!fullName || !emailId || !password || !confirmPassword) {
            toast.error("All fields are required. Please complete the form before submitting.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match. Please try again.");
            return;
        }

        // Here you can add API call logic
        console.log({ fullName, emailId, password, confirmPassword });
        toast.success("Registration successful! Welcome aboard.");

        // Reset form
        setFullName("");
        setEmailId("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="h-screen flex items-center justify-center p-2">
            <div className="bg-slate-50 p-4 w-100 sm:w-120 duration-500 border border-slate-200">
                <h1 className="text-2xl mb-6 font-bold">Register</h1>

                <form onSubmit={handleRegister}>
                    <div className="flex flex-col mt-3">
                        <label>Fullname</label>
                        <input type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border px-3 py-2"/>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label>Email id</label>
                        <input type="email" name="emailId" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="border px-3 py-2"/>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-3 py-2"/>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label>Confirm password</label>
                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border px-3 py-2"/>
                    </div>
                    <button type="submit" className="bg-slate-800 text-white w-full px-3 py-2 mt-3 cursor-pointer">Register</button>
                </form>

                <p className="mt-2">I already have an account ? <Link to={"/login"} className="text-blue-500 hover:underline">Login</Link></p>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
        </div>
    );
}
