import Footer from "@/components/layout/private/Footer";
import Author from "@/components/templates/login/Author";
import Guide from "@/components/templates/login/Guide";
import LoginForm from "@/components/templates/login/LoginForm";
import { MainLogo } from "@/helpers/image";
import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { Fragment } from "react/jsx-runtime";
import { HStack, SegmentedControl } from "rsuite";
const loginTab = [
  {
    label: (
      <HStack>
        <FiLogIn />
        <span>Login</span>
      </HStack>
    ),
    value: 'login'
  },
  {
    label: (
      <HStack>
        <LiaUserAstronautSolid />
        <span>Guide</span>
      </HStack>
    ),
    value: 'guide'
  },
  {
    label: (
      <HStack>
        <FaUserGraduate />
        <span>Researcher</span>
      </HStack>
    ),
    value: 'author'
  },
];
export default function Login() {
  const [selectedTab, setSelectedTab] = useState('login')
  return (
    <Fragment>
      <div className='flex-end me-3'>
        <img src={MainLogo} className="vh-25" />
        <SegmentedControl
          value={selectedTab}
          data={loginTab}
          onChange={(e: any) => { setSelectedTab(e) }}
        />
      </div>
      {selectedTab == 'login' ? <LoginForm /> : selectedTab == 'author' ? <Author /> : <Guide />}
    </Fragment>
  )
}
