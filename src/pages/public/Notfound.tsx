import AppButton from "@/components/organisams/AppButton";
import { NotFound } from "@/helpers/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();
  return (
    <div style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center'>
      <img src={NotFound} alt='loader' className="vh-80" />
      <div className='flex-center p-2'>
        <AppButton
          label='Go To Dashboard'
          endIcon={<FaArrowRightLong />}
          className="bg-primary-gradient text-white"
          onClick={()=>navigate('/')}
        />
      </div>
    </div>
  )
}
