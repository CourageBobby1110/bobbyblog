import { icons } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { GoSmiley } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiShop } from "react-icons/ci";export const  Nav = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: <MdDashboard />
        
    },
    {
        name: "Add Post",
        path: "/dashboard",
        icon: <MdOutlinePostAdd />
        
    },

{
    name: "Orders",
    path: "/Orders",
    icon:   <CiShop />
    
},
{
    name: "tutors",
    path: "/tutorsadmin",
    icon:<LiaChalkboardTeacherSolid />
},
{
    name: "Students",
    path: "/students",
    icon:  <PiStudentBold />
    
},
{
    name: "Customers",
    path: "/customers",
    icon: <GoSmiley />
    
},
{
    name: "Users",
    path: "/users",
    icon: <FaRegUser />

    
},
{
    name: "Revenue",
    path: "/revenue",
    icon:  <FaMoneyBillTrendUp />
    
},




{
    name: "Account",
    path: "/account",
    icon:  <MdOutlineManageAccounts />
  
    
},




]