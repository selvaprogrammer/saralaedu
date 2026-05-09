import AppIconButton from "@/components/organisams/AppIconButton";
import { Flag } from "@/helpers/image";
import type { RootState } from "@/store/reducer";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { useSelector } from "react-redux";
interface Props{
    onCountry:(e:string)=>void;
}
export default function ReportCountry(props:Props) {
    const { reportData } = useSelector((state: RootState) => state.public);
    return (
        <div>
            <div className="row flex-center">
                {reportData?.results && Object.entries(reportData?.results).map(([key, value]: any, i) => {
                    return (
                        <div key={i} className="col-3 mb-2 ">
                            <div className="p-2 shadow flex-between border bg-white rounded-top-3">
                                <span className="font-size-14 text-brand-primary">{key}</span>
                                <FcGlobe size={20} />
                            </div>
                            <img src={Flag[key]} className="w-100 vh-25 border" />
                            <div className="p-1  flex-between border bg-white rounded-bottom-3">
                                <span className="font-size-14 text-brand-primary">{value?.Classification ? value?.Classification  : 'Not Reportable'}</span>
                                <AppIconButton tooltip="View" icon={<FaArrowRightLong />} className="bg-primary-gradient text-white" onClick={()=>{props.onCountry(key)}}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
