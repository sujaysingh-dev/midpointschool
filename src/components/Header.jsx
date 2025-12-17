import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Header({ toggleSidebar }) {

    const navigate = useNavigate();
    const profile = () => {
        navigate("/admin_dashboard/profile")
    }

    return (
        <div className="h-[8vh] bg-gray-600 flex items-center justify-between md:px-5 px-2 ">
            <div className="flex gap-2 items-center">
            </div>
            <BiUser onClick={profile} size={36} className="p-[3px] bg-white border-gray-800 cursor-pointer border" />
        </div>
    );
}
