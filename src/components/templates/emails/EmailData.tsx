
import AppSelectbox from "@/components/organisams/AppSelectbox";
import { Empty } from "@/helpers/image";
import type { AppDispatch } from "@/store";
import { ConnectSocket, EmitSocket, DisconnectSocket } from "@/store/action/public";
import type { RootState } from "@/store/reducer";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import { RiAttachment2 } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "rsuite";
import SimpleBarReact from "simplebar-react";
interface Props {
    onmail: (e: any) => void;
}
const cateogryList = [{ value: 'Ae_pqc (Adverse Event or Product Quality Complaint)', label: 'AE/PQC' }, { value: 'Junk', label: 'JUNK' }, { value: 'Feedback', label: 'FEEDBACK' }
    , { value: 'Inquiry', label: 'INQUIRY' }];
export default function EmailData(props: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const [selected, setSelected] = useState(null);
    const [page, setPage] = useState(1)
    const [cateogry, setCateogry] = useState(null)
    const { connected, messages, codingLoading, getcodeLoading, narrativeLoading } = useSelector((state: RootState) => state.public);
    useEffect(() => { if (!connected) dispatch(ConnectSocket()); return () => { dispatch(DisconnectSocket()) } }, [connected]);
    useEffect(() => { if (page == messages?.skip) return; dispatch(EmitSocket(page)); setSelected(null) }, [page]);
    useEffect(() => { if (cateogry) dispatch(EmitSocket(page, cateogry)); setSelected(null) }, [cateogry]);
    return (
        <Fragment>
            <div className="mt-2">
                <div className="p-1 shadow flex-between border bg-white rounded-top-3">
                    <span className="font-size-14 text-brand-primary">Emails</span>
                    <AppSelectbox
                        onClean={() => dispatch(EmitSocket(page))}
                        data={cateogryList}
                        value={cateogry}
                        onChange={(cateogry) => { setCateogry(cateogry) }} title="Filter by" />
                </div>
                <SimpleBarReact className="max-height-75">
                    {messages && Object.keys(messages)?.length ?
                        <Fragment>
                            {messages?.result && messages?.result?.length ? messages?.result?.map((e: any, i: any) => {
                                let exportcomplaintData, mailDate, isAttachments = e['Attachments'];
                                if (isAttachments?.length) {
                                    exportcomplaintData = e['Attachment Status']['Extracted Content'];
                                    mailDate = e['Attachment Status']['Awarness Date'] ? e['Attachment Status']['Awarness Date'] : e["Message Details"]["Received Date"];
                                }
                                else {
                                    exportcomplaintData = e["Message Details"]["Body Preview"]?.trim();
                                    mailDate = e["Message Details"]["Received Date"];
                                }
                                const name = e["Message Details"]["Sent By"]?.split('(');
                                return (
                                    <div key={i} role="button" className={`${selected == i ? 'bg-brand-primary text-white shadow' : 'border-brand-primary'} rounded-2 p-2 mb-2`}
                                        onClick={() => {
                                            if (codingLoading || narrativeLoading || getcodeLoading) return toast('Hold on! Data is binding..', { icon: <FiLoader /> })
                                            setSelected(i);
                                            if (!exportcomplaintData) return toast.error("No complaint data found..");
                                            props.onmail({ comment: exportcomplaintData, date: mailDate })
                                        }}>
                                        <div className="flex-between mb-1">
                                            <span className="font-size-14 fw-bold text-truncate">{name[0]}</span>
                                            {e["Attachments"].length ? <span className="font-size-12"><RiAttachment2 size={15} /></span> : null}
                                        </div>
                                        <div className="flex-between mb-1">
                                            <span className="font-size-12  text-truncate">{e["Message Details"]["Subject"]}</span>
                                            <span className="font-size-12 text-truncate">{moment(e["Message Details"]["Sent Date"]).format("DD-MMM-YY hh:mm A")}</span>
                                        </div>
                                        <span className="mt-2 mb-2 font-size-12 truncate-twoline">{e["Message Details"]["Original Body Preview"] ? e["Message Details"]["Original Body Preview"] : 'No Body Content'}</span>
                                    </div>
                                )
                            }) :
                                <span className="flex-center flex-column gap-3">
                                    <img src={Empty} className="w-100 h-100" />
                                    <span>No messages found</span>
                                </span>}
                        </Fragment>
                        :
                        <span className="flex-center flex-column gap-3">
                            <img src={Empty} className="w-100 h-100" />
                            <span>No messages found</span>
                        </span>
                    }
                </SimpleBarReact>
                <div className="p-1 shadow flex-center border bg-white rounded-bottom-3">
                    <Pagination
                        prev
                        next
                        ellipsis
                        maxButtons={3}
                        size="sm"
                        layout={['pager']}
                        total={messages?.count}
                        limit={10}
                        activePage={page}
                        onChangePage={setPage}
                    />
                </div>
            </div>
        </Fragment>
    )
}
