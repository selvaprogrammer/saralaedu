import AppIconButton from "@/components/organisams/AppIconButton";
import { config } from "@/helpers/configuration";
import { Empty } from "@/helpers/image";
import type { AppDispatch } from "@/store";
import {  CommonAction } from "@/store/action/public";
import type { RootState } from "@/store/reducer";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import { TbReload } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Placeholder } from "rsuite";
import SimpleBarReact from "simplebar-react";
interface Props {
    onmail: (e: any) => void;
}
export default function SocialData(props: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const [form, setForm] = useState({ selected: null, page: 1, refresh: false });
    const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); }
    const { socialData, socialLoading } = useSelector((state: RootState) => state.public);
    useEffect(() => {
        if (form.page == socialData?.page) return; dispatch(CommonAction('social', config.socket + 'social', form, 'get'));
    }, [form.page]);
    useEffect(() => { if (form.refresh) dispatch(CommonAction('social', config.socket + 'social', form, 'get')); }, [form.refresh]);
    return (
        <Fragment>
            <div className="mt-2">
                <div className="p-1 shadow flex-between border bg-white rounded-top-3">
                    <span className="font-size-14 text-brand-primary">Social</span>
                    <AppIconButton icon={<TbReload />} onClick={() => handleChange('refresh', true)} tooltip="Reload" />
                </div>
                <SimpleBarReact className="max-height-75">
                    {socialLoading ?
                        Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
                        socialData && Object.keys(socialData)?.length ?
                            <Fragment>
                                {socialData?.data && socialData?.data?.length ? socialData?.data?.map((e: any, i: any) => {
                                    return (
                                        <div key={i} role="button" className={`${form.selected == i ? 'bg-soft-success shadow' : 'border-soft-neutral'} rounded-2 p-2 mb-2`}
                                            onClick={() => {
                                                if (socialLoading) return toast('Hold on! Data is binding..', { icon: <FiLoader /> })
                                                handleChange('selected', i);
                                                if (!e) return toast.error("No complaint data found..");
                                                props.onmail({ comment: e.text, date: e.timestamp })
                                            }}>
                                            <div className="flex-between mb-1">
                                                <span className="font-size-14 fw-bold email_name">{e.username}</span>
                                                <span className={` p-2 rounded-3 shadow badge-soft-${e.status == 'old' ? 'error' : 'success'}`}>{e.status}</span>
                                            </div>
                                            <div className="flex-between mb-1">
                                                <span className="font-size-12  text-truncate">Comments</span>
                                                <span className="font-size-12 text-truncate text-muted">{moment(e.timestamp).format("DD-MMM-YY hh:mm A")}</span>
                                            </div>
                                            <span className="mt-2 mb-2 font-size-12 truncate-twoline text-muted">{e.text}</span>
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
                        total={socialData?.totalRecords}
                        limit={10}
                        activePage={form.page}
                        onChangePage={(page) => handleChange('page', page)}
                    />
                </div>
            </div>
        </Fragment>
    )
}
