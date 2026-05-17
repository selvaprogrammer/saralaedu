import { MainLogo, SmallLogo } from "@/helpers/image";
import { useState } from "react";
import { LiaQuestionSolid } from "react-icons/lia";
import { MdAssignmentAdd, MdOutlineDashboardCustomize, MdPlayLesson } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { TbDeviceGamepad3, } from "react-icons/tb";
import { VscReferences, VscServerProcess } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Sidenav, Nav, Divider } from "rsuite";
import Header from "./Header";

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
        <Header />
        <img src={MainLogo} className="w-100" />
        <Nav activeKey={activeKey} onSelect={setActiveKey}>
          <Nav.Item eventKey="1" icon={<MdOutlineDashboardCustomize />} as={Link} to={'/dashboard'}>
            Dashboard
          </Nav.Item>
          <Nav.Menu eventKey="2" title="Lesson" icon={<MdPlayLesson />} >
            <Nav.Item eventKey="2-1" as={Link} to={'/respiration'}>Respiration</Nav.Item>
            <Nav.Item eventKey="2-2" as={Link} to={'/bodyfluids'}>Body Fluids</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="3" title="Ebook" icon={<SlNotebook />}>
            <Nav.Item eventKey="3-1" as={Link} to={'/book1'}>Biology - Tamil</Nav.Item>
            <Nav.Item eventKey="3-2" as={Link} to={'/book2'}>Biology - English</Nav.Item>
            <Nav.Item eventKey="3-3" as={Link} to={'/book3'}>Zoology - Tamil</Nav.Item>
            <Nav.Item eventKey="3-4" as={Link} to={'/book4'}>Zoology - English</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="Question Paper" eventKey="4" icon={<LiaQuestionSolid />} >
            <Nav.Item eventKey="4-1" as={Link} to={'/que1'}>Question 1</Nav.Item>
            <Nav.Item eventKey="4-2" as={Link} to={'/que2'}>Question 2</Nav.Item>
            <Nav.Item eventKey="4-3" as={Link} to={'/que3'}>Question 3</Nav.Item>
            <Nav.Item eventKey="4-4" as={Link} to={'/que4'}>Question 4</Nav.Item>
            <Nav.Item eventKey="4-5" as={Link} to={'/que5'}>Question 5</Nav.Item>
          </Nav.Menu>
          <Nav.Item eventKey="5" icon={<MdOutlineDashboardCustomize />} as={Link} to={'/furthur'}>
            Furthur Learning
          </Nav.Item>
          <Nav.Item eventKey="6" icon={<VscServerProcess />} as={Link} to={'/eval'}>
            Evaluation
          </Nav.Item>
          <Nav.Menu title="References" eventKey="7" icon={<VscReferences />} >
            <Nav.Item eventKey="7-1" as={Link} to={'/ref1'}>Respiration</Nav.Item>
            <Nav.Item eventKey="7-2" as={Link} to={'/ref2'}>Circulation</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
      {/*  <Sidenav.Footer >
       {expanded && (<span className="font-size-13 text-truncate">Design & Developed by <Divider vertical size="md" /> <img src={SmallLogo} className="w-10" /></span>)}
        <Sidenav.Toggle onToggle={setExpanded} className="shadow border sidebar-toggle bg-white" />
      </Sidenav.Footer>*/}
    </Sidenav>
  )
}
