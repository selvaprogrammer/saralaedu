import type { AppDispatch } from "@/store";
import { CommonAction } from "@/store/action/public";
import { config } from "@helpers/configuration";
import { useDispatch } from "react-redux";
import NarrativeForm from "../coding/NarrativeForm";
import HshData from "./HshData";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { Appdispatch } from "@/store/service";
import { RESET } from "@/store/type/public";
import { useEffect } from "react";

export default function HshaView() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { return () => { dispatch(Appdispatch(RESET)); console.log('unmount'); } }, [])
    return (
        <div className="p-2">
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20">HSHA Process</span>
                <PiIdentificationBadgeLight size={20} />
            </div>
            <NarrativeForm onSubmit={(e) => { dispatch(CommonAction('hsha', config.openAi + `hsha`, { complaint: e.text }, 'get')) }} />
            <HshData />
        </div>
    )
}
