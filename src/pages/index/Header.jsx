import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Header */}
            <div className="fixed w-full h-[8vh] bg-slate-100 flex items-center justify-between shadow px-4 sm:px-6 md:px-12 lg:px-20 z-50">
                <div className="text-2xl font-bold">SCHOOL</div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-5 items-center text-md">
                    <a href="/">Home</a>
                    <a href="#about">About us</a>
                    <a href="#academics">Academics</a>
                    <a href="#admissions">Admissions</a>
                    <a href="#faculty_staff">Staff</a>
                    <a href="#facilities">Facilities</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#notice_news">Notice</a>
                    <a href="#contact">Contact us</a>
                    <Link to={"/login"} className="px-4 py-1 bg-gray-700 text-white hover:bg-gray-800 duration-500">Login</Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden"><FaBars className="text-2xl cursor-pointer" onClick={() => setOpen(!open)} /></div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-[8vh] right-0 w-50 h-screen bg-slate-50 shadow-lg p-6 flex flex-col gap-6 text-lg transform transition-all duration-500 z-100 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <a onClick={() => setOpen(false)} href="/">Home</a>
                <a onClick={() => setOpen(false)} href="#about">About us</a>
                <a onClick={() => setOpen(false)} href="#academics">Academics</a>
                <a onClick={() => setOpen(false)} href="#admissions">Admissions</a>
                <a onClick={() => setOpen(false)} href="#faculty_staff">Staff</a>
                <a onClick={() => setOpen(false)} href="#facilities">Facilities</a>
                <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
                <a onClick={() => setOpen(false)} href="#notice_news">Notice</a>
                <a onClick={() => setOpen(false)} href="#contact">Contact us</a>
                <Link to={"/login"} className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 duration-500">Login</Link>
            </div>
        </div>
    );
}

