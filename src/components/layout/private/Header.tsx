import { LogoutAlert } from "@/helpers/alerts";
import { config } from "@/helpers/configuration";
import { MainLogo } from "@/helpers/image";
import { FaRegCircleUser, FaRightToBracket, FaUserCheck, FaWpforms } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, } from "rsuite";
import CryptoJS from "crypto-js";
import { GrUserAdd } from "react-icons/gr";
const secretKey = config.secret;
export default function Header() {
  const navigate = useNavigate();
  const storedData = localStorage.getItem("user") ?? '';
  const bytes = CryptoJS.AES.decrypt(storedData, secretKey);
  const decryptedData = JSON.parse(
    bytes.toString(CryptoJS.enc.Utf8)
  );
  return (
    <div className="flex-end p-2">
      <div className="flex-row-center gap-2">
        <span role="button" className="text-info" onClick={() => navigate('/guide')}>Guide</span>
        <Divider vertical />
        <span role="button" className="text-info" onClick={() => navigate('/research')}>Researcher</span>
        <Divider vertical />
        <Dropdown size="md" className="btn-gradient-border rounded-3" title={decryptedData?.name} icon={<FaRegCircleUser />}>
          <Dropdown.Item icon={<FaUserCheck />} >
            Profile
          </Dropdown.Item>
          {decryptedData?.role == 1 && <Dropdown.Item icon={<GrUserAdd />} onClick={() => navigate('/adduser')}>
            Add User
          </Dropdown.Item>}
          {decryptedData?.role == 1 && <Dropdown.Item icon={<FaWpforms />} onClick={() => navigate('/forum')}>
           Form
          </Dropdown.Item>}
          <Dropdown.Item icon={<FaRightToBracket />} onClick={() => navigate('/logout')}>
            Logout
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}
