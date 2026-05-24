import { MainLogo } from "@/helpers/image";
import { useState } from "react";
import { LiaQuestionSolid } from "react-icons/lia";
import { MdAssignmentAdd, MdOutlineDashboardCustomize, MdPlayLesson } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { TbDeviceGamepad3, } from "react-icons/tb";
import { VscReferences, VscServerProcess } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Sidenav, Nav,  } from "rsuite";

type MenuItem = {
  name: string;
  path: string;
  icon: any;
};

type SideMenuItem = {
  title: string;
  menu: MenuItem[];
  icon: any
};

type SideMenu = {
  [key: string]: SideMenuItem;
};

const sideMenus: SideMenu[] = [
  {
    "education": {
      title: "Sarala Learning", icon: TbDeviceGamepad3, menu: [
        { name: "Dashboard", path: "/dashboard", icon: MdOutlineDashboardCustomize },
        { name: "Lesson", path: "/lesson", icon: MdPlayLesson },
        { name: "Ebook", path: "/ebook", icon: SlNotebook },
        { name: "Question Paper", path: "/question", icon: LiaQuestionSolid },
        { name: "Evaluation", path: "/eval", icon: VscServerProcess },
        { name: "Assignment", path: "/assignment", icon: MdAssignmentAdd },
        { name: "References", path: "/refrence", icon: VscReferences }
      ]
    },
  }
];
export default function Sidebar() {
  const { pathname } = useLocation();
  const oKey = sideMenus[0].education.menu.some((e: { path: string; }) => e.path == pathname) || pathname == '/' ? 1 : 2;
  const [activeKey, setActiveKey] = useState(pathname == '/' ? "/dashboard" : pathname);
  const [openKeys, setOpenKeys] = useState<any[]>([oKey]);
  const [expanded, setExpanded] = useState(true);
  return (
    <Sidenav expanded={expanded} appearance={"subtle"} className={`border-end max-width-35`} openKeys={openKeys} onOpenChange={setOpenKeys}>
      <Sidenav.Body>
        <img src={MainLogo} className="w-100" />
        <Nav activeKey={activeKey} onSelect={setActiveKey}>
          <Nav.Item eventKey="1" icon={<MdOutlineDashboardCustomize />} as={Link} to={'/dashboard'}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<MdPlayLesson />} as={Link} to={'/lesson'}>
            Lessons
          </Nav.Item>
          <Nav.Item eventKey="3" icon={<SlNotebook />} as={Link} to={'/ebook'}>
            Ebook
          </Nav.Item>
          <Nav.Item eventKey="4" icon={<LiaQuestionSolid />} as={Link} to={'/question'}>
            Question Papers
          </Nav.Item>
          <Nav.Item eventKey="5" icon={<VscServerProcess />} as={Link} to={'/eval'}>
            Self Evaluation
          </Nav.Item>
          <Nav.Item eventKey="6" icon={<VscServerProcess />} as={Link} to={'/assesment'}>
            Self Assesment
          </Nav.Item>
          <Nav.Item eventKey="7" icon={<MdPlayLesson />} as={Link} to={'/furthur'}>
            Furthur Learning
          </Nav.Item>
          <Nav.Item eventKey="8" icon={<VscReferences />} as={Link} to={'/refrence'}>
            References
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  )
}
