import { Empty } from "@/helpers/image";
import type { RootState } from "@/store/reducer";
import { FaIcicles } from "react-icons/fa6";
import { GrCompliance, GrThreeDEffects } from "react-icons/gr";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { MdOutlineContactEmergency } from "react-icons/md";
import { SiRimacautomobili } from "react-icons/si";
import { useSelector } from "react-redux";
import { Divider, Placeholder } from "rsuite";

export default function FemaData() {
    const { femaData, femaLoading } = useSelector((state: RootState) => state.public);
    console.log('femaData', femaData);
    return (
        <div>
            {femaLoading ?
                Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
                femaData && Object.keys(femaData)?.length ?
                    <div>
                        <div className="flex-between">
                            <span className="border bg-white p-2 rounded-2 font-size-14"><MdOutlineContactEmergency size={20} className="me-1" /> FMEA Data</span>
                            <span className="border bg-white p-2 rounded-2 font-size-14">
                                <GrCompliance size={20} className="me-1" /> Complaint Id : <span>{femaData?.complaint_id}</span>
                            </span>
                        </div>
                        <Divider />
                        <div className="border rounded-2 p-2">
                            <div className="flex-between text-brand-primary">
                                <span className="font-size-16">Fema Summary</span>
                                <HiOutlineViewfinderCircle size={20} />
                            </div>
                            <Divider />
                            <span className="font-size-14 text-muted">Device Issue :- {femaData?.summary?.device_issue_summary}</span>
                            <Divider />
                            <span className="font-size-14 text-muted">Patient Impact :- {femaData?.summary?.patient_impact_summary}</span>
                            <Divider />
                            <span className="font-size-14 text-muted">Description :- {femaData?.summary?.short_description}</span>
                        </div>
                        <div className="row mt-2">
                            <div className="col-4">
                                <div className="border rounded-2 p-2">
                                    <div className="flex-between text-brand-primary">
                                        <span className="font-size-16">Causes</span>
                                        <SiRimacautomobili size={20} />
                                    </div>
                                    <Divider />
                                    {femaData?.causes?.map((e: any, i: number) => {
                                        return (
                                            <div key={i}>
                                                <ul  >
                                                    <li><span className="font-size-14 text-muted">Name :- {e?.name}</span></li>
                                                    <li><span className="font-size-14 text-muted">Code :- {e?.code}</span></li>
                                                    <li><span className="font-size-14 text-muted">Confidence :- {e?.confidence}</span></li>
                                                    <li><span className="font-size-14 text-muted">Description :- {e?.description}</span></li>
                                                    <li><span className="font-size-14 text-muted">Justification :- {e?.justification}</span></li>
                                                    <li><span className="font-size-14 text-muted">Evidence :- {e?.evidence_from_complaint}</span></li>
                                                </ul>
                                                {i != femaData?.causes.length - 1 ? (<Divider />) : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border rounded-2 p-2">
                                    <div className="flex-between text-brand-primary">
                                        <span className="font-size-16">Effects</span>
                                        <GrThreeDEffects size={20} />
                                    </div>
                                    <Divider />
                                    {femaData?.effects?.map((e: any, i: number) => {
                                        return (
                                            <div key={i}>
                                                <ul  >
                                                    <li><span className="font-size-14 text-muted">Name :- {e?.name}</span></li>
                                                    <li><span className="font-size-14 text-muted">Code :- {e?.code}</span></li>
                                                    <li><span className="font-size-14 text-muted">Confidence :- {e?.confidence}</span></li>
                                                    <li><span className="font-size-14 text-muted">Description :- {e?.description}</span></li>
                                                    <li><span className="font-size-14 text-muted">Justification :- {e?.justification}</span></li>
                                                    <li><span className="font-size-14 text-muted">Evidence :- {e?.evidence_from_complaint}</span></li>
                                                </ul>
                                                {i != femaData?.effects.length - 1 ? (<Divider />) : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border rounded-2 p-2">
                                    <div className="flex-between text-brand-primary">
                                        <span className="font-size-16">Failure Mode</span>
                                        <FaIcicles size={20} />
                                    </div>
                                    <Divider />
                                    {femaData?.failure_modes?.map((e: any, i: number) => {
                                        return (
                                            <div key={i}>
                                                <ul  >
                                                    <li><span className="font-size-14 text-muted">Name :- {e?.name}</span></li>
                                                    <li><span className="font-size-14 text-muted">Code :- {e?.code}</span></li>
                                                    <li><span className="font-size-14 text-muted">Confidence :- {e?.confidence}</span></li>
                                                    <li><span className="font-size-14 text-muted">Description :- {e?.description}</span></li>
                                                    <li><span className="font-size-14 text-muted">Justification :- {e?.justification}</span></li>
                                                    <li><span className="font-size-14 text-muted">Evidence :- {e?.evidence_from_complaint}</span></li>
                                                </ul>
                                                {i != femaData?.failure_modes.length - 1 ? (<Divider />) : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <span className="flex-center flex-column gap-3">
                        <img src={Empty} className="w-50" />
                        <span>No fema data found</span>
                    </span>
            }
        </div>
    )
}
