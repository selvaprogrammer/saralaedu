import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    const toastLoader = toast.loading("Logging out...");
    setTimeout(() => { navigate("/login"); localStorage.clear(); toast.dismiss(toastLoader) }, 2000);
  },
    [])
  return <Loader />
}
