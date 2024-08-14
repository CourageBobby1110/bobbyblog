import { Bold, Icon } from "lucide-react";
import { GiTeacher } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlinePersonSearch } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { GrResources } from "react-icons/gr";
import { SiSemanticscholar } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { IoChatboxOutline } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaDiscourse } from "react-icons/fa";

export const education = [
   

  
   

    {
        icon: <GrResources color="white" />,                                       
        title:"Educational Resources",
        path: "/education-resources",

    },
    {
        icon: <GiArchiveResearch color="white" />,
        title:"Research Papers",
        path: "/research-papers", 

    },
 
   
    {
        icon:  <IoBookSharp color="white" />,
        title:"Buy Courses",
        path: "/Buy-courses",

    },
    {
        icon:<GiBookshelf color="white" />,
        title:"Free e-books",
        path:"/Free-ebooks"

    },
    {
        icon:<IoChatboxOutline  color="white" fontWeight={800}/>,
        title:"Find a student Chat Room",
        path: "/find-student-chat",
    },
   
]