import AppIconButton from "@/components/organisams/AppIconButton";
import toast, { type ToastPosition } from "react-hot-toast";
import { FaCheck, FaXmark } from "react-icons/fa6";
const toastConfig = {
    duration: Infinity,
    position: 'top-center' as ToastPosition,
    className: "bg-primary-gradient text-white",
}
export const LogoutAlert = (callback: any) => {
    return (
        toast(
            (t) => {
                return (
                    <div className="d-flex flex-row align-items-center">
                        <span>Are you sure you want to logout ?</span>
                        <AppIconButton tooltip="Ok" className="ms-2 text-success" icon={<FaCheck />} onClick={() => { callback(); toast.dismiss(t.id); }} />
                        <AppIconButton tooltip="Cancel" className="ms-2 text-danger" icon={<FaXmark />} onClick={() => { toast.dismiss(t.id); }} />
                    </div>
                )
            },
            toastConfig
        )
    )
}

export const DownloadFsaAlert = (callback: any) => {
    return (
        toast(
            (t) => {
                return (
                    <div className="d-flex flex-row align-items-center">
                        <span>Are you sure you want to download ?</span>
                        <AppIconButton tooltip="Ok" className="ms-2 text-success" icon={<FaCheck />} onClick={() => { callback(); toast.dismiss(t.id); }} />
                        <AppIconButton tooltip="Cancel" className="ms-2 text-danger" icon={<FaXmark />} onClick={() => { toast.dismiss(t.id); }} />
                    </div>
                )
            },
            toastConfig
        )
    )
}