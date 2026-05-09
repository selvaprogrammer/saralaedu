import { useEffect, useState } from "react";
import SocialData from "./SocialData"
import ReportData from "../report/ReportData";
import { Divider, HStack, SegmentedControl } from "rsuite";
import { ImDice } from "react-icons/im";
import { TbReportSearch } from "react-icons/tb";
import { TiSocialFlickr } from "react-icons/ti";
import NarrativeData from "../coding/NarrativeData";
import NarrativeForm from "../coding/NarrativeForm";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { CommonAction } from "@/store/action/public";
import { config } from "@/helpers/configuration";
import { Appdispatch } from "@/store/service";
import { RESET } from "@/store/type/public";
const socialTab = [
    {
        label: (
            <HStack>
                <ImDice />
                <span>IMDRF</span>
            </HStack>
        ),
        value: 'imdrf'
    },
    {
        label: (
            <HStack>
                <TbReportSearch />
                <span>REPORT</span>
            </HStack>
        ),
        value: 'report'
    }
];
export default function SocialView() {
    const dispatch = useDispatch<AppDispatch>();
    const [isReport, setIsReport] = useState(null);
    const [comment, setComment] = useState(null);
    useEffect(() => { return () => { dispatch(Appdispatch(RESET)); console.log('unmount'); } }, [])
    return (
        <div className='p-2 row'>
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20"><TiSocialFlickr className="me-1" />  Social Intake</span>
                <SegmentedControl defaultValue="imdrf" data={socialTab} onChange={(e: any) => { setIsReport(e) }} />
            </div>
            <Divider />
            <div className='col-3'>
                <SocialData onmail={(e) => { setComment(e.comment) }} />
            </div>
            <div className='col-9'>
                <NarrativeForm comment={comment} onSubmit={(e) => {
                    dispatch(CommonAction('narrative', config.imdrf, e, 'post'));
                    dispatch(CommonAction('report', config.report, e, 'post'))
                }} />
                {isReport == 'report' ? <ReportData /> : <NarrativeData />}
            </div>
        </div>
    )
}
