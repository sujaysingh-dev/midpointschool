import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiSideBarFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { AiFillCreditCard } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import {
    MdDashboard,
    MdOutlineSubject,
    MdPerson,
    MdPeople,
    MdNotifications,
    MdEvent,
    MdMenuBook,
    MdSettings,
    MdLogout,
} from "react-icons/md";

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const role = localStorage.getItem("role"); // admin | teacher | student

    const [isOpen, setIsOpen] = useState(
        JSON.parse(localStorage.getItem("sidebarOpen")) ?? false
    );

    useEffect(() => {
        localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
    }, [isOpen]);

    const menus = {
        admin: [
            { link: "/admin_dashboard", icon: <MdDashboard size={26} />, title: "Dashboard" },
            { link: "/admin_dashboard/classes", icon: <SiGoogleclassroom size={26} />, title: "Classes" },
            { link: "/admin_dashboard/subjects", icon: <MdOutlineSubject size={26} />, title: "Subjects" },
            { link: "/admin_dashboard/teachers", icon: <MdPerson size={26} />, title: "Teachers" },
            { link: "/admin_dashboard/students", icon: <MdPeople size={26} />, title: "Students" },
            { link: "/admin_dashboard/attendance", icon: <IoCheckmarkDoneSharp size={26} />, title: "Attendance" },
            { link: "/admin_dashboard/payment", icon: <AiFillCreditCard size={26} />, title: "Payment" },
            { link: "/admin_dashboard/notice", icon: <MdNotifications size={26} />, title: "Notice" },
            { link: "/admin_dashboard/event", icon: <MdEvent size={26} />, title: "Event" },
            { link: "/admin_dashboard/exam", icon: <MdMenuBook size={26} />, title: "Exam" },
            { link: "/admin_dashboard/setting", icon: <MdSettings size={26} />, title: "Setting" },
        ],

        teacher: [
            { link: "/teacher_dashboard", icon: <MdDashboard size={26} />, title: "Dashboard" },
            { link: "/teacher_dashboard/classes", icon: <SiGoogleclassroom size={26} />, title: "Classes" },
            { link: "/teacher_dashboard/subjects", icon: <MdOutlineSubject size={26} />, title: "Subjects" },
            { link: "/teacher_dashboard/students", icon: <MdPeople size={26} />, title: "Students" },
            { link: "/teacher_dashboard/attendance", icon: <IoCheckmarkDoneSharp size={26} />, title: "Attendance" },
            { link: "/teacher_dashboard/notice", icon: <MdNotifications size={26} />, title: "Notice" },
            { link: "/teacher_dashboard/event", icon: <MdEvent size={26} />, title: "Event" },
            { link: "/teacher_dashboard/exam", icon: <MdMenuBook size={26} />, title: "Exam" },
            { link: "/teacher_dashboard/setting", icon: <MdSettings size={26} />, title: "Setting" },
        ],

        student: [
            { link: "/student_dashboard", icon: <MdDashboard size={26} />, title: "Dashboard" },
            { link: "/student_dashboard/classes", icon: <SiGoogleclassroom size={26} />, title: "Classes" },
            { link: "/student_dashboard/subjects", icon: <MdOutlineSubject size={26} />, title: "Subjects" },
            { link: "/student_dashboard/attendance", icon: <IoCheckmarkDoneSharp size={26} />, title: "Attendance" },
            { link: "/student_dashboard/payment", icon: <AiFillCreditCard size={26} />, title: "Payment" },
            { link: "/student_dashboard/notice", icon: <MdNotifications size={26} />, title: "Notice" },
            { link: "/student_dashboard/event", icon: <MdEvent size={26} />, title: "Event" },
            { link: "/student_dashboard/exam", icon: <MdMenuBook size={26} />, title: "Exam" },
            { link: "/student_dashboard/setting", icon: <MdSettings size={26} />, title: "Setting" },
        ],
    };

    const menuItems = menus[role] || [];

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className={`h-screen bg-gray-600 text-white shadow-lg border-r border-white duration-300 flex flex-col ${ isOpen ? "w-52" : "w-16" }`}>
            
            <div className={`h-[7.6vh] flex justify-between items-center ${ isOpen ? "px-6" : "px-4" }`}>
                {isOpen && ( <span className="text-2xl font-semibold capitalize">{role}</span> )}
                <RiSideBarFill size={30} className="cursor-pointer"  onClick={() => setIsOpen(!isOpen)}/>
            </div>

            <div className="h-full p-3 flex flex-col justify-between">
                <div>
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.link;
                        return (
                            <Link  key={index} to={item.link}  className={`flex items-center gap-4 p-2 mb-1 transition ${ isActive ? "bg-gray-500 font-semibold" : "hover:bg-gray-500"}`}>
                                {item.icon}
                                {isOpen && <span>{item.title}</span>}
                            </Link>
                        );
                    })}
                </div>

                <div onClick={logout} className="flex items-center gap-4 p-2 hover:bg-gray-500 rounded cursor-pointer"><MdLogout size={26} />{isOpen && <span>Logout</span>}
                </div>
            </div>
        </div>
    );
}
