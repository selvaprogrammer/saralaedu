import { LogoutAlert } from "@/helpers/alerts";
import { config } from "@/helpers/configuration";
import { MainLogo } from "@/helpers/image";
import { FaRegCircleUser, FaRightToBracket, FaUserCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Dropdown, } from "rsuite";
import CryptoJS from "crypto-js";
const secretKey = config.secret;
export default function Header() {
  const navigate = useNavigate();
  const storedData = localStorage.getItem("user") ?? '';
  const bytes = CryptoJS.AES.decrypt(storedData, secretKey);
  const decryptedData = JSON.parse(
    bytes.toString(CryptoJS.enc.Utf8)
  );
  return (
     <Dropdown size="md" className="btn-gradient-border rounded-3" title={decryptedData?.name} icon={<FaRegCircleUser />}>
        <Dropdown.Item icon={<FaUserCheck />} >
          Profile
        </Dropdown.Item>
        <Dropdown.Item icon={<FaRightToBracket />} onClick={() => LogoutAlert(() => navigate('/logout'))}>
          Logout
        </Dropdown.Item>
      </Dropdown>
  )
}
