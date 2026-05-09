import { CommonAction } from "@/store/action/public"
import { config } from "@helpers/configuration"
import NarrativeForm from "../coding/NarrativeForm"
import type { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import ReportData from "./ReportData";
import { TbReport } from "react-icons/tb";
import { Appdispatch } from "@/store/service";
import { RESET } from "@/store/type/public";
import { useEffect } from "react";

export default function ReportView() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { return () => { dispatch(Appdispatch(RESET)); console.log('unmount'); } }, [])
    return (
        <div className="p-2">
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20 ">Reportablity</span>
                <TbReport size={20} />
            </div>
            <NarrativeForm onSubmit={(e) => { dispatch(CommonAction('report', config.report, e, 'post')) }} />
            <ReportData />
        </div>
    )
}
