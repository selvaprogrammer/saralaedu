import { Empty } from "@/helpers/image";
import type { RootState } from "@/store/reducer";
import { IoTimer } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import { Divider, Placeholder } from "rsuite";
import { useState } from "react";
import { questions } from "@/helpers/utils";
import { FaArrowLeftLong, FaClipboardQuestion } from "react-icons/fa6";
import { SiAnswer } from "react-icons/si";
import ReportCountry from "./ReportCountry";
import { FcGlobe } from "react-icons/fc";
import AppIconButton from "@/components/organisams/AppIconButton";

export default function ReportData() {
    const [key, setKey] = useState<any>(null);
    const { reportData, reportLoading } = useSelector((state: RootState) => state.public);
    return (
        <Fragment>
            {reportLoading ?
                Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
                reportData && Object.keys(reportData)?.length ?
                    <Fragment>
                        <div className="flex-between">
                            <span className="border bg-white p-2 rounded-2 font-size-14"><TbReport size={20} className="me-1" /> Report Data</span>
                            <span className="border bg-white p-2 rounded-2 font-size-14">
                                <IoTimer size={20} className="me-1" /> Time Taken : <span>{reportData?.total_time}</span>
                            </span>
                        </div>
                        <Divider />
                        {key ?
                            <div className="mb-2 ">
                                <div className="p-2 shadow flex-between border bg-white rounded-top-3">
                                    <AppIconButton tooltip="View" icon={<FaArrowLeftLong />} className="bg-primary-gradient text-white" onClick={() => { setKey(null) }} />
                                    <div>
                                        <span className="font-size-14 text-brand-primary">{key}</span>
                                        <FcGlobe size={20} className="ms-2" />
                                    </div>
                                </div>
                                <div className="p-2 border bg-white rounded-bottom-3">
                                    <span className="font-size-14 text-brand-primary"><FaClipboardQuestion className="me-1" /> Questions :-</span>
                                    <Divider />
                                    <ul>
                                        {questions[key]?.map((e: string, i: number) => <li key={i}><span className="font-size-14 text-muted">{e}</span></li>)}
                                    </ul>
                                    <span className="font-size-14 text-brand-primary"><SiAnswer className="me-1" /> Answers :-</span>
                                    <Divider />
                                    <ul>
                                        {typeof reportData?.results[key] == 'object' &&
                                            Object.entries(reportData?.results[key])?.map(([key1, value1]: any, i1) =>{
                                                let val = value1 ? value1 : '';
                                                if(key1 == 'Classification') val = value1 ? value1 : 'Not Reportable';
                                               return <li key={i1}><span className="font-size-14 text-muted">{key1} : {val}</span></li>
                                            })}
                                    </ul>
                                </div>
                            </div> :
                            <ReportCountry onCountry={(key) => setKey(key)} />
                        }
                    </Fragment> :
                    <span className="d-flex align-item-center justify-content-center"><img src={Empty} className="w-40" /></span>}
        </Fragment>
    )
}
