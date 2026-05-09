
import { CommonAction } from "@/store/action/public";
import { config } from "@helpers/configuration";
import NarrativeForm from "./NarrativeForm";
import type { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import NarrativeData from "./NarrativeData";
import { TbDeviceImacCode } from "react-icons/tb";
import { useEffect } from "react";
import { Appdispatch } from "@/store/service";
import { RESET } from "@/store/type/public";
interface Props {
    comment?: string | null;
}
export default function NarrativeView(props: Props) {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { return () => { dispatch(Appdispatch(RESET)); console.log('unmount'); } }, [])
    return (
        <div className='p-2'>
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20 ">IMDRF Coding</span>
                <TbDeviceImacCode size={20} />
            </div>
            <NarrativeForm comment={props.comment} onSubmit={(e) => { dispatch(CommonAction('narrative', config.imdrf, e, 'post')); }} />
            <NarrativeData />
        </div>
    )
}
