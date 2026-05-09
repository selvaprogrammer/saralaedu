import { SmallLogo } from "@/helpers/image";
import { Divider } from "rsuite";

export default function Footer() {
  return (
    <div className='position-fixed bottom-0 start-50 translate-middle-x'>
      <span>Design & Developed by <Divider vertical size="md" /> <img src={SmallLogo} className="w-10" /></span>
    </div>
  )
}
