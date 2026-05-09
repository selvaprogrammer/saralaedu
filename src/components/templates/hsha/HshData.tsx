import { Empty } from "@/helpers/image";
import type { RootState } from "@/store/reducer";
import { SiHarmonyos } from "react-icons/si";
import { TbBiohazard } from "react-icons/tb";
import { useSelector } from "react-redux";
import {  Placeholder } from "rsuite";

export default function HshData() {
    const { hshaData, hshaLoading } = useSelector((state: RootState) => state.public);
    return (
        <div>
            {hshaLoading ?
                Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
                hshaData && Object.keys(hshaData)?.length ?
                    <div className="row">
                        <div className="col-6">
                            <div className="flex-between border p-2 rounded-top-2 text-brand-primary">
                                <span className="font-size-16">Harms</span>
                                <SiHarmonyos size={20} />
                            </div>
                            <div>
                                {hshaData?.harms?.map((e:any, i:number) => {
                                    return (
                                        <div key={i} className="border rounded-bottom-2 p-2 d-flex  flex-column gap-3 mb-2">
                                            <span className='text-truncate font-size-14'>Term : <span className="fw-bold ms-2">{e?.term}</span></span>
                                            <span className=' font-size-14'>Justification : <span className="fw-bold ms-2">{e?.justification}</span> </span>
                                            <span className='text-truncate font-size-14'>Confidence : <span className="badge-soft-success">{e?.confidence}</span></span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="flex-between border p-2 rounded-top-2 text-brand-primary">
                                <span className="font-size-16">Hazards</span>
                                <TbBiohazard size={20} />
                            </div>
                            <div>
                                {hshaData?.hazards?.map((e:any, i:number) => {
                                    return (
                                        <div key={i} className="border rounded-bottom-2 p-2 d-flex  flex-column gap-3 mb-2">
                                            <span className='text-truncate font-size-14'>Term : <span className="fw-bold ms-2">{e?.term}</span></span>
                                            <span className=' font-size-14'>Justification : <span className="fw-bold ms-2">{e?.justification}</span> </span>
                                            <span className='text-truncate font-size-14'>Confidence : <span className="badge-soft-success">{e?.confidence}</span></span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div> :
                    <span className="flex-center flex-column gap-3">
                        <img src={Empty} className="w-40" />
                    </span>
            }
        </div>
    )
}
