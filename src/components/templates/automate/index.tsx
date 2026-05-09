import { useEffect, useState } from "react";
import ReportData from "../report/ReportData";
import { Divider, HStack, SegmentedControl } from "rsuite";
import { ImDice } from "react-icons/im";
import { TbAutomaticGearbox, TbReportSearch } from "react-icons/tb";
import NarrativeData from "../coding/NarrativeData";
import NarrativeForm from "../coding/NarrativeForm";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { CommonAction } from "@/store/action/public";
import { config } from "@/helpers/configuration";
import EmailData from "../emails/EmailData";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import HshData from "../hsha/HshData";
import { MdOutlineContactEmergency } from "react-icons/md";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import Downloadfsa from "./Downloadfsa";
import FemaData from "./FemaData";
import InvestigateData from "./InvestigateData";
import { Appdispatch } from "@/store/service";
import { RESET } from "@/store/type/public";
const autoTab = [
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
    },
    {
        label: (
            <HStack>
                <PiIdentificationBadgeLight />
                <span>HSHA</span>
            </HStack>
        ),
        value: 'hsha'
    },
    {
        label: (
            <HStack>
                <MdOutlineContactEmergency />
                <span>FMEA</span>
            </HStack>
        ),
        value: 'fema'
    },
    {
        label: (
            <HStack>
                <HiOutlineViewfinderCircle />
                <span>INVESTIGATION</span>
            </HStack>
        ),
        value: 'investigate'
    }
];
export default function AutomateView() {
    const dispatch = useDispatch<AppDispatch>();
    const [isReport, setIsReport] = useState('imdrf');
    const [comment, setComment] = useState(null);
    useEffect(() => { return () => { dispatch(Appdispatch(RESET));  } }, [])
    return (
        <div className='p-2 row'>
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20 "><TbAutomaticGearbox className="me-1" />Automate Intake</span>
                <div className="flex-center flex-row">
                    <SegmentedControl
                        value={isReport}
                        data={autoTab}
                        onChange={(e: any) => { setIsReport(e) }}
                    />
                    <Divider vertical />
                    <Downloadfsa comment={comment} />
                </div>
            </div>
            <Divider />
            <div className='col-3'>
                <EmailData onmail={(e) => { setComment(e.comment) }} />
            </div>
            <div className='col-9'>
                <NarrativeForm comment={comment} onSubmit={(e) => {
                    let comments = e.text;
                    setComment(comments)
                    dispatch(CommonAction('narrative', config.imdrf, { text: comments }, 'post'));
                    dispatch(CommonAction('report', config.report, { text: comments }, 'post'));
                    dispatch(CommonAction('hsha', config.openAi + `hsha`, { complaint: comments }, 'get'))
                    dispatch(CommonAction('fema', config.openAi + `fema`, { complaint: comments }, 'get'))
                    dispatch(CommonAction('investigate', config.openAi + `investigation`, { complaint: comments }, 'get'))
                }} />
                {isReport == 'imdrf' ? <NarrativeData /> :
                    isReport == 'report' ? <ReportData /> :
                        isReport == 'hsha' ? <HshData /> :
                            isReport == 'fema' ? <FemaData /> : <InvestigateData />}
            </div>
        </div>
    )
}
