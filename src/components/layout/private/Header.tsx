import { LogoutAlert } from "@/helpers/alerts";
import { config } from "@/helpers/configuration";
import { MainLogo } from "@/helpers/image";
import { FaRegCircleUser, FaRightToBracket, FaUserCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Dropdown, } from "rsuite";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="border-bottom app-header">
      <img src={MainLogo} style={{ height: '10vh' }} />
      <Dropdown size="md" className="btn-gradient-border rounded-3" title={config.user} icon={<FaRegCircleUser />}>
        <Dropdown.Item icon={<FaUserCheck />} >
          Profile
        </Dropdown.Item>
        <Dropdown.Item icon={<FaRightToBracket />} onClick={() => LogoutAlert(() => navigate('/logout'))}>
          Logout
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
