import AppButton from "@/components/organisams/AppButton";
import AppIconButton from "@/components/organisams/AppIconButton";
import { downloadCSV, validFileCheck } from "@/helpers/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsFiletypeXlsx, BsUpload } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { RxReset } from "react-icons/rx";
import { VscServerProcess } from "react-icons/vsc";
import {  Loader } from "rsuite";

export default function ProcessView() {
    const [doc, setDoc] = useState({ loading: false, phase1: null, stat: null, phase2: null, phase1Xl: null, statXl: null, phase2Xl: null });
    const handleChange = (title: string, value: any) => { setDoc(prev => ({ ...prev, [title]: value })); }
    const uploadFile = (e: any, value: string) => {
        const fileName = validFileCheck(e);
        if (fileName) handleChange(value, fileName)
    }
    const generateFile = (value: string) => {
        handleChange('loading', true)
        const toastId = toast.loading('Hold on! We are now processing your file...');
        setTimeout(() => {
            toast.dismiss(toastId);
            toast.success("Process Completed..");
            handleChange(value, Date.now() + '-' + value + '.csv')
            handleChange('loading', false)
        }, 5 * 1000);
    }
    return (
        <div className='p-2'>
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20">IMDRF Process</span>
                <VscServerProcess size={20} />
            </div>
            <div className='flex-center vh-85'>
                <div className='container'>
                    <div className="mb-2 mt-2">
                        <div className="flex-between border p-2 rounded-top-2 text-brand-primary">
                            <span className="font-size-16">Phase 1 Upload</span>
                            <BsFiletypeXlsx size={20} />
                        </div>
                        <div className="border  p-2 d-flex flex-row gap-3">
                            <div className='container'>
                                <div className="flex-center flex-row gap-2 p-2">
                                    <div className='mt-3 w-100'>
                                        <input onChange={(e) => { uploadFile(e, 'phase1') }} className="form-control font-size-14" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                        <span className='float-end text-brand-primary font-size-13'>Only upload .csv,.xlsx file</span>
                                    </div>
                                    <AppIconButton className="bg-primary-gradient text-white" disabled={!doc.phase1} loading={doc.loading} icon={<BsUpload />} tooltip="Upload" onClick={() => { generateFile('phase1Xl') }} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-between border p-2 rounded-bottom-2 text-brand-primary">
                            <span className="font-size-13">Download Stat Generated File</span>
                            {doc.loading ? <Loader /> :
                                doc.phase1Xl ?
                                    <AppButton label={doc.phase1Xl} endIcon={<MdOutlineFileDownload size={20} />} onClick={() => { downloadCSV('phase1Xl') }} className="bg-primary-gradient text-white" /> :
                                    <span className="font-size-12 text-braand-primary">Upload file to download phase1 XL</span>}
                        </div>
                    </div>
                    <div className={doc.phase1Xl ? undefined : "rounded-3 top-0 start-0 w-100 h-100 bg-white opacity-50"}>
                        <div className="mb-2 mt-2">
                            <div className="flex-between border p-2 rounded-top-2 text-brand-primary">
                                <span className="font-size-16">STAT Upload</span>
                                <BsFiletypeXlsx size={20} />
                            </div>
                            <div className="border  p-2 d-flex flex-row gap-3">
                                <div className='container'>
                                    <div className="flex-center flex-row gap-2 p-2">
                                        <div className='mt-3 w-100'>
                                            <input onChange={(e) => { uploadFile(e, 'stat') }} className="form-control font-size-14" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                            <span className='float-end text-brand-primary font-size-13'>Only upload .csv,.xlsx file</span>
                                        </div>
                                        <AppIconButton className="bg-primary-gradient text-white" disabled={!doc.stat} loading={doc.loading} icon={<BsUpload />} tooltip="Upload" onClick={() => { generateFile('statXl') }} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between border p-2 rounded-bottom-2 text-brand-primary">
                                <span className="font-size-13">Download Phase 2 Generated File</span>
                                {doc.loading ? <Loader /> :
                                    doc.statXl ?
                                        <AppButton label={doc.statXl} endIcon={<MdOutlineFileDownload size={20} />} onClick={() => { downloadCSV('statXl') }} className="bg-primary-gradient text-white" /> :
                                        <span className="font-size-12 text-braand-primary">Upload file to download stat XL</span>}
                            </div>
                        </div>
                    </div>
                    <div className={doc.statXl ? undefined : "rounded-3 top-0 start-0 w-100 h-100 bg-white opacity-50"}>
                        <div className="mb-2 mt-2">
                            <div className="flex-between border p-2 rounded-top-2 text-brand-primary">
                                <span className="font-size-16">phase 2 Upload</span>
                                <BsFiletypeXlsx size={20} />
                            </div>
                            <div className="border  p-2 d-flex flex-row gap-3">
                                <div className='container'>
                                    <div className="flex-center flex-row gap-2 p-2">
                                        <div className='mt-3 w-100'>
                                            <input onChange={(e) => { uploadFile(e, 'phase2') }} className="form-control font-size-14" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                            <span className='float-end text-brand-primary font-size-13'>Only upload .csv,.xlsx file</span>
                                        </div>
                                        <AppIconButton className="bg-primary-gradient text-white" disabled={!doc.phase2} loading={doc.loading} icon={<BsUpload />} tooltip="Upload" onClick={() => { generateFile('phase2Xl') }} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between border p-2 rounded-bottom-2 text-brand-primary">
                                <span className="font-size-13">Download Phase 1 Generated File</span>
                                {doc.loading ? <Loader /> :
                                    doc.phase2Xl ?
                                        <AppButton label={doc.phase2Xl} endIcon={<MdOutlineFileDownload size={20} />} onClick={() => { downloadCSV('phase2Xl') }} className="bg-primary-gradient text-white" /> :
                                        <span className="font-size-12 text-braand-primary">Upload file to download phase2 XL</span>}
                            </div>
                        </div>
                    </div>
                    {doc.phase1Xl && doc.phase2Xl && doc.statXl &&
                        <div className="flex-between text-brand-primary border p-1 rounded-3">
                            <span className="font-size-14">Completed</span>
                            <AppIconButton className="bg-primary-gradient text-white" icon={<RxReset />} tooltip="Reset" onClick={() => { setDoc(prev => ({ ...prev, loading: false, phase1: null, stat: null, phase2: null, phase1Xl: null, statXl: null, phase2Xl: null })); }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
