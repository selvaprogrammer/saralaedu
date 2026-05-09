import { SmallLogo } from "@/helpers/image";
import { useState } from "react";
import { GrAnalytics, GrCompliance, GrOverview } from "react-icons/gr";
import { IoIosAnalytics } from "react-icons/io";
import { LiaQuestionSolid } from "react-icons/lia";
import { MdAssignmentAdd, MdBatchPrediction, MdOutlineDashboardCustomize, MdOutlineMarkEmailRead, MdOutlinePinch, MdOutlineSignalCellularAlt, MdPlayLesson } from "react-icons/md";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { RiCompasses2Fill } from "react-icons/ri";
import { SiAsana, SiNounproject, SiSyncthing } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
import { TbAutomaticGearbox, TbDeviceDesktopDown, TbDeviceDesktopShare, TbDeviceGamepad3, TbDeviceImacCode, TbReport } from "react-icons/tb";
import { TiSocialFlickr } from "react-icons/ti";
import { VscReferences, VscServerProcess } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Sidenav, Nav, Divider } from "rsuite";

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
        // { name: "Assesment", path: "/assesment", icon: RiCompasses2Fill },
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
    <Sidenav expanded={expanded} appearance={"subtle"} className={`border-end max-width-25`} openKeys={openKeys} onOpenChange={setOpenKeys}>
      <Sidenav.Body>
        <Nav activeKey={activeKey} onSelect={setActiveKey}>
          {sideMenus.map((e, i) => {
            const keyValues = Object.keys(e)[0];
            const title = e[keyValues]?.title;
            const menu = e[keyValues]?.menu;
            const Icons: any = e[keyValues]?.icon;
            return (
              <Nav.Menu key={i} eventKey={i + 1}
                title={(i + 1) == oKey ? <span className="shadow rounded-2 text-brand-primary text-truncate p-2 font-size-14">{title}</span> : title}
                icon={<Icons size={20} className={(i + 1) == oKey ? 'text-brand-primary' : ''} />}>
                {
                  menu?.map((e1: any, i1: number) => {
                    return (
                      <Nav.Item
                        key={i1}
                        active={activeKey == e1.path}
                        onClick={() => { setActiveKey(e1.path); }}
                        eventKey={e1.path} as={Link} to={e1.path}
                        icon={<e1.icon className={activeKey == e1.path ? 'app-sidebar-icon-active' : 'text-muted opacity-50 app-sidebar-icon'} />}
                        className={activeKey == e1.path ? 'app-sidebar-item-active' : 'app-sidebar-item '}>
                        <span className={activeKey == e1.path ? 'text-brand-primary font-size-13' : 'text-muted opacity-50 font-size-13'}>{e1?.name}</span>
                      </Nav.Item>
                    )
                  })
                }
              </Nav.Menu>
            )
          })}
        </Nav>
      </Sidenav.Body>
      <Sidenav.Footer className="flex-center">
        {expanded && (<span className="font-size-13 text-truncate">Design & Developed by <Divider vertical size="md" /> <img src={SmallLogo} className="w-10" /></span>)}
        <Sidenav.Toggle onToggle={setExpanded} className="shadow border sidebar-toggle bg-white" />
      </Sidenav.Footer>
    </Sidenav>
  )
}
