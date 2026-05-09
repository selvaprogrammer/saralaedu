import { Empty } from "@/helpers/image";
import { setCode, setTerm } from "@/helpers/utils";
import { CommonAction } from "@/store/action/public";
import { config } from "@helpers/configuration";
import { useEffect, useState } from "react";
import { LuSearchCode } from "react-icons/lu";
import { Fragment } from "react/jsx-runtime";
import { Placeholder, Loader, Toggle, Divider, Whisper, Tooltip } from "rsuite";
import { AppAccordion } from "../Accordin";
import ComplaintsInput from "../Complaints";
import type { AppDispatch } from "@/store";
import type { RootState } from "@/store/reducer";
import { Appdispatch } from "@/store/service";
import { UPDATE_NARRATIVE } from "@/store/type/public";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaX } from "react-icons/fa6";
import Qcdata from "./Qcdata";

export default function NarrativeData() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState(1);
  const [form, setForm] = useState({ searchForm: null, searchId: null, comments: '', narrativeStateData: null, isQc: false });
  const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); }
  const { narrativeData, narrativeLoading, getcodeLoading, getcodeData, narrativeTimeTaken, qcData } = useSelector((state: RootState) => state.public);
  useEffect(() => {
    if (!getcodeData) return;
    dispatch(Appdispatch(UPDATE_NARRATIVE, { key: form.searchForm, index: form.searchId }));
    handleChange('searchForm', null); handleChange('searchId', null); handleChange('comments', '')
  }, [getcodeData]);
  useEffect(() => { if (narrativeData) handleChange('narrativeStateData', narrativeData) }, [narrativeData, narrativeLoading]);
  useEffect(() => {
    if (!narrativeLoading) return toast.dismissAll();
    toast.loading("Fetching IMDRF Data"); handleChange('isQc', false);
  }, [narrativeLoading]);
  useEffect(() => { if (form.isQc && !qcData) dispatch(CommonAction('qc', config.socket + 'getIMDRFQCData/', { json_data: { result: narrativeData }, complaint_text: form.comments }, 'post')); }, [form.isQc])
  return (
    <Fragment>
      {
        narrativeLoading ?
          Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
          narrativeData && Object.keys(narrativeData)?.length ?
            <Fragment>
              <div className="flex-between">
                <span className="border bg-white p-2 rounded-2 font-size-14">Time Taken : <span>{(narrativeTimeTaken / 1000).toFixed(2)} ms</span></span>
                <span className="border bg-white p-2 rounded-2 font-size-14">
                  Qc Validation <Toggle onChange={(isQc) => { handleChange('isQc', isQc) }} className="ms-2" checkedChildren={<FaCheck />} unCheckedChildren={<FaX />} defaultChecked={form.isQc} />
                </span>
              </div>
              <Divider />
              {form.isQc ?
                <Qcdata /> :
                Object.keys(narrativeData).map((e, i) => {
                  return (
                    <AppAccordion key={i} title={e} isOpen={selected == i + 1} onClick={() => setSelected(i + 1)}>
                      {narrativeData[e]?.map((e1: any, i1: any) => {
                        const code = setCode(e1); const term = setTerm(e1);
                        return (
                          <div key={i1} className={`row align-items-center py-2 ${i1 != narrativeData[e]?.length - 1 ? 'border-bottom' : null} `}>
                            <div className="col-2 d-flex align-items-center gap-2">
                              <span className='text-truncate font-size-13'>Choice #{i1 + 1} :
                                {i1 == 0 && (<span className="badge-soft-success p-2 ms-2">Most relevant</span>)}
                              </span>
                            </div>
                            <div className="col-3 d-flex align-items-center gap-2">
                              {form.searchForm == e && form.searchId == i1 + 1 ?
                                <ComplaintsInput hideFooter value={form.comments} loading={getcodeLoading} onChange={(comments) => handleChange('comments', comments)}
                                  onSubmit={() => { dispatch(CommonAction('get_code', config.imdrf, { text: form.comments }, 'post')) }} placeholder="Search Term" disableSubmit={false} error={''} /> :
                                <span className='text-truncate font-size-13'>Code :
                                  {code ?
                                    <Whisper placement="top" speaker={<Tooltip>{term}</Tooltip>}>{code + '-' + term}</Whisper> :
                                    getcodeLoading ?
                                      <Loader size="sm" /> :
                                      <span role="button" onClick={() => { handleChange('searchForm', e); handleChange('searchId', i1 + 1) }}><LuSearchCode size={20} /></span>}</span>}
                            </div>
                            <div className="col-7 text-truncate">
                              <Whisper placement="top" speaker={<Tooltip>{e1?.Definition}</Tooltip>}>
                                <span className='text-truncate font-size-13'>Definition : {e1?.Definition}</span>
                              </Whisper>
                            </div>
                          </div>
                        )
                      })}
                    </AppAccordion>
                  )
                })}
            </Fragment>
            :
            <span className="d-flex align-item-center justify-content-center theme-brand-primary">
              <img src={Empty} className="w-40" />
            </span>
      }
    </Fragment>
  )
}
